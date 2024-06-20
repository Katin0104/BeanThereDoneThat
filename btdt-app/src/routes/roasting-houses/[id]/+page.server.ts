import { error, fail, redirect } from "@sveltejs/kit";
import { RoastingHouse } from "../../../db/entities/roasting-house";
import { BtdtDataSource } from "../../../db/data-source";
import { RoastingHouseVM } from "../view-models";

export const actions = {
    save: async (event) => {
        const data = await event.request.formData();
        const name = data.get('name')?.toString();

        if (!name) {
            return fail(400, { name, missing: true });
        }

        const btdtDataSource = new BtdtDataSource();
        const roastingHouse = await btdtDataSource.dataSourceInstance
            .getRepository(RoastingHouse)
            .findOneByOrFail({ id: Number.parseInt(event.params.id) });

        roastingHouse.name = name;
        roastingHouse.address = data.get('address')?.toString();
        roastingHouse.email = data.get('email')?.toString();
        roastingHouse.shopUrl = data.get('shopUrl')?.toString();
        roastingHouse.tel = data.get('tel')?.toString();
        roastingHouse.website = data.get('website')?.toString();

        await btdtDataSource.dataSourceInstance.getRepository(RoastingHouse).save(roastingHouse);

        redirect(303, '/roasting-houses');
    },

    delete: async (event) => {
        const btdtDataSource = new BtdtDataSource();
        const roastingHouse = await btdtDataSource.dataSourceInstance
            .getRepository(RoastingHouse)
            .delete({ id: Number.parseInt(event.params.id) });

        redirect(303, '/roasting-houses')
    }
};

export async function load({ params }) {

    const btdtDataSource = new BtdtDataSource();

    if (Number.isNaN(params.id)) {
        throw error(400, 'Id is not a number');
    }

    const roastingHouse = await btdtDataSource.dataSourceInstance
        .getRepository(RoastingHouse)
        .findOneByOrFail({ id: Number.parseInt(params.id) });

    const roastingHouseVM = new RoastingHouseVM(roastingHouse);

    return {
        roastingHouse: JSON.parse(JSON.stringify(roastingHouseVM))
    }
}
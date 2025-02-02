import { fail, redirect } from "@sveltejs/kit";
import { BtdtDataSource } from "../../../../../db/data-source";
import { RoastingHouse } from "../../../../../db/entities/roasting-house";
import { RoastingHouseVM } from "../../../view-models";
import { CoffeeBeans, parseRoastType, RoastLevel } from "../../../../../db/entities/coffee-beans";

export async function load({ params }) {
    const btdtDataSource = new BtdtDataSource();

    let roastingHouseVM: RoastingHouseVM;
    const roastingHouse = await btdtDataSource.dataSourceInstance
        .getRepository(RoastingHouse)
        .findOneByOrFail(
            {
                id: parseInt(params.id)
            }
        );

    roastingHouseVM = new RoastingHouseVM(roastingHouse);

    return {
        roastingHouse: JSON.parse(JSON.stringify(roastingHouseVM))
    }
}

export const actions = {
    default: async (event) => {
        const btdtDataSource = new BtdtDataSource();
        const data = await event.request.formData();
        const name = data.get('name')?.toString();
        const roastingHouse = await btdtDataSource.dataSourceInstance
            .getRepository(RoastingHouse)
            .findOneByOrFail(
                {
                    id: parseInt(data.get('roastingHouseId')?.toString() ?? '')
                }
            );

        if (!name) {
            return fail(400, { name, missing: true });
        }

        const caffeine: boolean = (data.get('caffeine')?.toString() ?? 'false') == 'true';

        const coffeeBeans = new CoffeeBeans({
            name: name,
            roastLevel: RoastLevel[(data.get('roastLevel')?.toString() ?? RoastLevel.DARK_ROAST) as keyof typeof RoastLevel],
            roastType: parseRoastType(data.get('roastType')?.toString() ?? ''),
            // TODO: origins: data.get('origins')?.toString(),
            variety: data.get('variety')?.toString(),
            price: parseFloat(parseFloat(data.get('price')?.toString() ?? '0').toFixed(2)),
            currency: data.get('currency')?.toString(),
            caffeine: caffeine,
            acidity: data.get('acidity')?.toString(),
            processingMethod: data.get('processingMethod')?.toString(),
            tastingNote: data.get('tastingNote')?.toString(),
            roastingHouse: roastingHouse
        });

        await btdtDataSource.dataSourceInstance.getRepository(CoffeeBeans).save(coffeeBeans);

        redirect(303, `/roasting-houses/${roastingHouse.id}`);
    }
};
import { fail, redirect } from '@sveltejs/kit';
import { RoastingHouse } from '../../../db/entities/roasting-house';
import { BtdtDataSource } from '../../../db/data-source';

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const name = data.get('name')?.toString();

        if (!name) {
            return fail(400, { name, missing: true });
        }

        const roastingHouse = new RoastingHouse({
            name: name,
            address: data.get('address')?.toString(),
            email: data.get('email')?.toString(),
            shopUrl: data.get('shopUrl')?.toString(),
            tel: data.get('tel')?.toString(),
            website: data.get('website')?.toString()
        });

        const btdtDataSource = new BtdtDataSource();
        await btdtDataSource.dataSourceInstance.getRepository(RoastingHouse).save(roastingHouse);

        redirect(303, '/roasting-houses');
    }
};
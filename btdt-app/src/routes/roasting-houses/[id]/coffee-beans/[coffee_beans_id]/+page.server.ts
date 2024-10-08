import { error, fail, redirect } from "@sveltejs/kit";
import { BtdtDataSource } from "../../../../../db/data-source";
import { CoffeeBeans, RoastType } from "../../../../../db/entities/coffee-beans";
import { CoffeeBeansVM, RoastingHouseVM } from "../../../view-models";
import { RoastingHouse } from "../../../../../db/entities/roasting-house";


export const actions = {
    save: async (event) => {
        const data = await event.request.formData();
        const name = data.get('name')?.toString();

        if (!name) {
            return fail(400, { name, missing: true });
        }

        const btdtDataSource = new BtdtDataSource();
        let coffeeBeans = await btdtDataSource.dataSourceInstance
            .getRepository(CoffeeBeans)
            .findOneBy({ id: Number.parseInt(event.params.coffee_beans_id) });

        if (!coffeeBeans) {
            return fail(404);
        }

        coffeeBeans.name = name;
        coffeeBeans.roastLevel = parseInt(data.get('roastLevel')?.toString() ?? '');
        coffeeBeans.roastType = RoastType[data.get('roastType')?.toString() as keyof typeof RoastType];
        coffeeBeans.origins = data.getAll('origins') as string[] ?? [];
        coffeeBeans.variety = data.get('variety')?.toString();
        coffeeBeans.price = data.get('price')?.toString();
        coffeeBeans.acidity = data.get('acidity')?.toString();
        coffeeBeans.processingMethod = data.get('processingMethod')?.toString();
        coffeeBeans.tastingNote = data.get('tastingNote')?.toString();
        coffeeBeans.caffeine = data.get('caffeine')?.toString() == 'true';

        coffeeBeans = await btdtDataSource.dataSourceInstance.getRepository(CoffeeBeans).save(coffeeBeans);

        redirect(303, `/roasting-houses/${event.params.id}`);
    },

    delete: async (event) => {
        const btdtDataSource = new BtdtDataSource();
        let coffeeBeans = await btdtDataSource.dataSourceInstance
            .getRepository(CoffeeBeans)
            .delete({ id: Number.parseInt(event.params.coffee_beans_id) });

        redirect(303, `/roasting-houses/${event.params.id}`)
    }
};

export async function load({ params }) {

    const btdtDataSource = new BtdtDataSource();

    if (Number.isNaN(params.coffee_beans_id)) {
        throw error(400, 'Id is not a number');
    }

    const coffeeBeans = await btdtDataSource.dataSourceInstance
        .getRepository(CoffeeBeans)
        .findOneByOrFail(
            {
                id: parseInt(params.coffee_beans_id)
            }
        );

    const coffeeBeansVM = new CoffeeBeansVM(coffeeBeans);

    const roastingHouse = await btdtDataSource.dataSourceInstance
        .getRepository(RoastingHouse)
        .find({
            where: {
                id: Number.parseInt(params.id),
            },
            relations: ['coffeeBeans'],
            take: 1
        });
    const roastingHouseVM = new RoastingHouseVM(roastingHouse[0]);

    return {
        coffeeBeans: JSON.parse(JSON.stringify(coffeeBeansVM)),
        roastingHouse: JSON.parse(JSON.stringify(roastingHouseVM))
    };
}
import type { CoffeeBeans, RoastType } from "../../db/entities/coffee-beans";
import type { RoastingHouse } from "../../db/entities/roasting-house";

export class RoastingHouseVM {
    public id!: number;
    public name!: string;
    public address?: string;
    public tel?: string;
    public email?: string;
    public website?: string;
    public shopUrl?: string;
    public coffeeBeans?: CoffeeBeansVM[];

    constructor(values: RoastingHouse) {
        this.id = values.id;
        this.name = values.name;
        this.address = values.address;
        this.tel = values.tel;
        this.email = values.email;
        this.website = values.website;
        this.shopUrl = values.shopUrl;

        if (values.coffeeBeans) {
            this.coffeeBeans = values.coffeeBeans.map(x => new CoffeeBeansVM(x));
        } else {
            this.coffeeBeans = [];
        }
    }
}

export class CoffeeBeansVM {
    public id!: number;
    public name!: string;
    public roastLevel?: number;
    public roastType?: RoastType;
    public origins?: string[];
    public variety?: string;
    public price?: string;
    public caffeine?: boolean;
    public acidity?: string;
    public processingMethod?: string;

    constructor(values: CoffeeBeans) {
        this.id = values.id;
        this.name = values.name;
        this.roastLevel = values.roastLevel;
        this.roastType = values.roastType;
        this.origins = values.origins;
        this.variety = values.variety;
        this.price = values.price;
        this.caffeine = values.caffeine;
        this.acidity = values.acidity;
        this.processingMethod = values.processingMethod;
    }
}
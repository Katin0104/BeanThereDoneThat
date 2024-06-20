import type { RoastingHouse } from "../../db/entities/roasting-house";

export class RoastingHouseVM {
    public id!: number;
    public name!: string;
    public address?: string;
    public tel?: string;
    public email?: string;
    public website?: string;
    public shopUrl?: string;

    constructor(values: RoastingHouse) {
        this.id = values.id;
        this.name = values.name;
        this.address = values.address;
        this.tel = values.tel;
        this.email = values.email;
        this.website = values.website;
        this.shopUrl = values.shopUrl;
    }
}
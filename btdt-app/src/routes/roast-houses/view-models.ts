export class RoastingHouseVM {
    public name!: string;

    constructor(values: { name: string }) {
        this.name = values.name;
    }
}
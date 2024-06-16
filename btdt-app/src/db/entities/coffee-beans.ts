import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, type Relation } from "typeorm"
import type { RoastingHouse } from "./roasting-house"

export enum RoastType {
    LIGHT_ROAST = "LIGHT_ROAST",
    MEDIUM_ROAST = "MEDIUM_ROAST",
    MEDIUM_DARK_ROAST = "MEDIUM_DARK_ROAST",
    DARK_ROAST = "DARK_ROAST",
    BLONDE_ROAST = "BLONDE_ROAST",
    ITALIAN_ROAST = "ITALIAN_ROAST",
    ESPRESSO_ROAST = "ESPRESSO_ROAST"
}


@Entity()
export class CoffeeBeans {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: "text"
    })
    name!: string

    @Column({
        nullable: true,
        type: "decimal"
    })
    roastLevel?: number


    @Column({
        nullable: true,
        type: "text"
    })
    roastType?: RoastType

    @Column({
        nullable: true,
        type: "simple-array"
    })
    origins?: string[]

    @Column({
        nullable: true,
        type: "text"
    })
    variety?: string

    @Column({
        nullable: true,
        type: "text"
    })
    price?: string

    @Column({
        nullable: true,
        type: "bool"
    })
    coffein?: boolean

    @Column({
        nullable: true,
        type: "text"
    })
    acidity?: string

    @Column({ type: "int" })
    roastingHouseId!: number;

    @OneToOne("RoastingHouse") @JoinColumn()
    roastingHouse!: Relation<RoastingHouse>;

    @Column({
        nullable: true,
        type: "text"
    })
    processingMethod?: string

    @Column({
        nullable: true,
        type: "text"
    })
    tastingNote?: string;

    constructor(values: {
        name: string,
        roastLevel?: number,
        roastType?: RoastType,
        origins?: string[],
        variety?: string,
        price?: string,
        coffein?: boolean,
        acidity?: string,
        roastingHouse: RoastingHouse,
        processingMethod?: string,
        tastingNote?: string
    }) {
        if (values) {
            this.name = values.name;
            this.roastLevel = values.roastLevel;
            this.roastType = values.roastType;
            this.origins = values.origins;
            this.variety = values.variety;
            this.price = values.price;
            this.coffein = values.coffein;
            this.acidity = values.acidity;
            this.roastingHouse = values.roastingHouse;
            this.processingMethod = values.processingMethod;
            this.tastingNote = values.tastingNote;
        }
    }
}

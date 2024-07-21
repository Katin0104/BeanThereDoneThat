import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, type Relation, OneToMany, ManyToOne } from "typeorm"
import { RoastingHouse } from "./roasting-house"

export enum RoastType {
    DRUM_ROASTING = "DRUM_ROASTING",
    FLUID_BED_ROASTING = "FLUID_BED_ROASTING",
    INFRARED_ROASTING = "INFRARED_ROASTING",
    CONVECTION_ROASTING = "CONVECTION_ROASTING"
}

export enum RoastLevel {
    BLONDE_ROAST = 0,
    LIGHT_ROAST = 1,
    MEDIUM_ROAST = 2,
    MEDIUM_DARK_ROAST = 3,
    DARK_ROAST = 4,
    ITALIAN_ROAST = 5,
    ESPRESSO_ROAST = 6
}


export const parseRoastType = (input: string): RoastType => {
    const formattedInput = input.trim().toLowerCase();
    for (const key in RoastType) {
        if (RoastType[key as keyof typeof RoastType].toLowerCase() === formattedInput) {
            return RoastType[key as keyof typeof RoastType];
        }
    }
    console.warn(`Could not parse RoastType: "${input}". Fallback to "DRUM_ROASTING"`);
    return RoastType.DRUM_ROASTING; // oder wirf einen Fehler, wenn keine passende Kategorie gefunden wird
}

@Entity({ name: 'coffee_beans' })
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
    roastLevel?: RoastLevel


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
    caffeine?: boolean

    @Column({
        nullable: true,
        type: "text"
    })
    acidity?: string

    @Column({ type: "int" })
    roastingHouseId!: number;

    @ManyToOne(() => RoastingHouse, roastingHouse => roastingHouse.coffeeBeans) @JoinColumn()
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
        caffeine?: boolean,
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
            this.caffeine = values.caffeine;
            this.acidity = values.acidity;
            this.roastingHouse = values.roastingHouse;
            this.processingMethod = values.processingMethod;
            this.tastingNote = values.tastingNote;
        }
    }
}

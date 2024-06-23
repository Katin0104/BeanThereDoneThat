import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { CoffeeBeans } from "./coffee-beans"

@Entity({ name: 'roasting_house' })
export class RoastingHouse {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: "text"
    })
    name!: string

    @Column({
        nullable: true,
        type: "text"
    })
    address?: string

    @Column({
        nullable: true,
        type: "text"
    })
    tel?: string

    @Column({
        nullable: true,
        type: "text"
    })
    email?: string

    @OneToMany(() => CoffeeBeans, coffeeBeans => coffeeBeans.roastingHouse)
    coffeeBeans: CoffeeBeans[];

    @Column({
        nullable: true,
        type: "text"
    })
    website?: string

    @Column({
        nullable: true,
        type: "text"
    })
    shopUrl?: string

    constructor(values: { name: string, address?: string, tel?: string, email?: string, website?: string, shopUrl?: string }) {
        if (values) {
            this.name = values.name;
            this.address = values.address;
            this.tel = values.tel;
            this.email = values.email;
            this.website = values.website;
            this.shopUrl = values.shopUrl;
        }

    }
}
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
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
    description?: string

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

    constructor(values: { name: string, description?: string, address?: string, tel?: string, email?: string, website?: string, shopUrl?: string }) {
        if (values) {
            this.name = values.name;
            this.description = values.description;
            this.address = values.address;
            this.tel = values.tel;
            this.email = values.email;
            this.website = values.website;
            this.shopUrl = values.shopUrl;
        }

    }
}
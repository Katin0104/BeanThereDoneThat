import { BtdtDataSource } from "../../db/data-source";
import { RoastingHouse } from "../../db/entities/roasting-house";
import { RoastingHouseVM } from "./view-models";


export async function load({ params }) {

    const btdtDataSource = new BtdtDataSource();

    let roastingHousesVM: Array<RoastingHouseVM> = [];
    const roastingHouses = await btdtDataSource.dataSourceInstance
        .getRepository(RoastingHouse)
        .find();

    roastingHousesVM = roastingHouses.map<RoastingHouseVM>(x =>
        new RoastingHouseVM({ name: x.name }));

    return {
        roastingHouses: JSON.parse(JSON.stringify(roastingHousesVM))
    }
}
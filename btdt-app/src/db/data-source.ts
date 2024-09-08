import { DataSource } from "typeorm"
import { RoastingHouse } from "./entities/roasting-house";
import { CoffeeBeans } from "./entities/coffee-beans";
import { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_USE_SSL } from "$env/static/private";

export class BtdtDataSource {
    private static _dataSourceInstance: DataSource;
    public get dataSourceInstance() {
        // console.log(process.env);
        const dbConfig = {
            type: "postgres",
            host: POSTGRES_HOST ?? 'localhost',
            port: Number.parseInt(POSTGRES_PORT ?? '5434'),
            username: POSTGRES_USER ?? 'user',
            password: POSTGRES_PASSWORD ?? 'password',
            database: POSTGRES_DB ?? 'btdt',
            ssl: POSTGRES_USE_SSL === 'true'
        }
        console.log(dbConfig)
        BtdtDataSource._dataSourceInstance = BtdtDataSource._dataSourceInstance ? BtdtDataSource._dataSourceInstance : new DataSource({
            type: "postgres",
            host: dbConfig.host,
            port: dbConfig.port,
            username: dbConfig.username,
            password: dbConfig.password,
            database: dbConfig.database,
            synchronize: true,
            logging: false,
            ssl: dbConfig.ssl,
            entities: [RoastingHouse, CoffeeBeans]
        })

        return BtdtDataSource._dataSourceInstance;
    }

    public async initBtdtDataSource() {
        if (!BtdtDataSource._dataSourceInstance) {
            return await this.dataSourceInstance.initialize();
        }
    }
}
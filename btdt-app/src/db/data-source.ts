import { DataSource } from "typeorm"
import { RoastingHouse } from "./entities/roasting-house";
import { CoffeeBeans } from "./entities/coffee-beans";
import 'dotenv/config'
import { configDotenv } from "dotenv";

export class BtdtDataSource {
    private static _dataSourceInstance: DataSource;
    public get dataSourceInstance() {
        configDotenv();

        const dbConfig = {
            type: "postgres",
            host: process.env.POSTGRES_HOST ?? 'localhost',
            port: Number.parseInt(process.env.POSTGRES_PORT ?? '5434'),
            username: process.env.POSTGRES_USER ?? 'user',
            password: process.env.POSTGRES_PASSWORD ?? 'password',
            database: process.env.POSTGRES_DB ?? 'btdt',
            ssl: process.env.POSTGRES_USE_SSL === 'true'
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
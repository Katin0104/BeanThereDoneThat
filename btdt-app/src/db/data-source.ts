import { DataSource } from "typeorm"

export class BtdtDataSource {
    private static _dataSourceInstance: DataSource;
    public get dataSourceInstance() {
        return BtdtDataSource._dataSourceInstance ? BtdtDataSource._dataSourceInstance : new DataSource({
            type: "postgres",
            host: process.env.POSTGRES_HOST ?? 'localhost',
            port: (process.env.POSTGRES_PORT ?? 5434) as number,
            username: process.env.POSTGRES_USER ?? 'user',
            password: process.env.POSTGRES_PASSWORD ?? 'password',
            database: process.env.POSTGRES_DB ?? 'btdt',
            synchronize: true,
            logging: false,
            entities: []
        })
    }
    public async initBtdtDataSource() {
        if (!BtdtDataSource._dataSourceInstance) {
            return this.dataSourceInstance.initialize();
        }
    }
}
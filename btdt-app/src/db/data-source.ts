import { DataSource } from "typeorm"

export class BtdtDataSource {
    private static _dataSourceInstance: DataSource;
    public get dataSourceInstance() {
        return BtdtDataSource._dataSourceInstance ? BtdtDataSource._dataSourceInstance : new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "user",
            password: "password",
            database: "btdt",
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
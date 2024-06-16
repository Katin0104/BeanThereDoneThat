import 'reflect-metadata';
import { BtdtDataSource } from './db/data-source';

const btdtDataSource = new BtdtDataSource();

export async function handle({ event, resolve }) {
    try {
        await btdtDataSource.initBtdtDataSource();
        console.log("Data Source has been initialized!")
    } catch (err) {
        console.error("Error during Data Source initialization:", err)
    }

    const response = await resolve(event);
    return response;
}
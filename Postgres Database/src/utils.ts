import { Client } from "pg";

export async function getClient(){
    const client = new Client("Postgress Connection String");
    await client.connect();
    return client;
}
import { Client } from "pg";

export async function getClient(){
    const client = new Client("postgresql://neondb_owner:npg_2lgauk3PVWZw@ep-polished-shape-a4vekn9b-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require")
    await client.connect();
    return client;
}
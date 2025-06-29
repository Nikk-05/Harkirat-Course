import { getClient } from "./utils";

async function createTable() {
    const client = await getClient();
    try {
        const createUserTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        `;
        await client.query(createUserTableQuery);

        const createTodosTableQuery = `
        CREATE TABLE IF NOT EXISTS todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT false
        );
        `;
        await client.query(createTodosTableQuery);

        console.log('Tables created successfully!');
    } catch (err) {
        console.error('Error creating tables:', err);
    } finally {
        await client.end();
    }
}

createTable()
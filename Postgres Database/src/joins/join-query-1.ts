import { getClient } from "../utils";
async function performJoinQuery(userId: number) {
    const client = await getClient();
    try {
        const joinQuery = `SELECT users.*, todos.title, todos.description, todos.done 
                            FROM users 
                            LEFT JOIN todos on users.id  = todos.user_id 
                            WHERE users.id = $1`;

        const res = await client.query(joinQuery, [userId])
        console.log('Join Query Results:', res.rows);
    }
    catch (err) {
        console.error('Error performing join query:', err);
    } finally {
        await client.end();
    }
}

performJoinQuery(6);
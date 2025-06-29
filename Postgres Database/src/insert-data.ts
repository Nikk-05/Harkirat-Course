import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient()
    try {
        const insertUserText = `Insert into users (email, password) values ($1,$2) returning id`;
        const userValue = ['singh03@gmail.com', 'abcd1234']

        let response = await client.query(insertUserText, userValue);
        const insertTodoText = `Insert into todos (title, description, user_id, done) values ($1,$2,$3,$4) returning id`;
        const todoValues = ['Exercise', 'Leg and Shoulder', response.rows[0].id, false]
        await client.query(insertTodoText, todoValues)

        console.log('Entries created')
    } catch (err) {
        console.error('Error creating entries:', err);
    } finally {
        await client.end();
    }
}

async function createTodosForUser(email: string) {
    const client = await getClient();
    try {
        const selectedUSerText = 'SELECT id FROM users WHERE email = $1';
        const userResponse = await client.query(selectedUSerText, [email]);
        if (userResponse.rows.length === 0) {
            console.log('User not found');
            return;
        }

        const userId = userResponse.rows[0].id;
        const insertTodoText = 'Insert into todos (title, description, user_id, done) values($1, $2,$3,$4) returning id';
        const todoValues = ['Exercise', 'Leg and Shoulder', userId, false];
        await client.query(insertTodoText, todoValues);
        console.log('Todo created for user:', email);
    }
    catch (err) {
        console.error('Error creating todo for user:', err);
    } finally {
        await client.end();
    }
}

// createEntries()
createTodosForUser('singh03@gmail.com')
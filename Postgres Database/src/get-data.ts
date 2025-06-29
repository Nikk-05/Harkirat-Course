import { getClient } from "./utils";

async function getUsers() {
    const client  = await getClient();
    try{
        const selectUsersText = `SELECT * FROM users`;
        const userResponse = await client.query(selectUsersText);

        console.log('Users:')
        for(let user of userResponse.rows){
            console.log(`ID: ${user.id}, Email: ${user.email}`);
        }
    }
    catch(err){
        console.error('Error fetching users:', err);
    }
    finally{
        await client.end();
    }
}

async function getUserFromEmail(email:string){
    const client = await getClient();
    try{
        const selectUsersText = 'SELECT * FROM users WHERE email = $1';
        const userResponse = await client.query(selectUsersText, [email]);

        console.log('User Details:')
        for(let user of userResponse.rows){
            console.log(`ID: ${user.id}, Email: ${user.email}`);
        }
    }
    catch(err){
        console.error('Error fetching user by email:', err);
    }
    finally{
        await client.end();
    }
}

async function getTodosForUser(userId: number){
    const client = await getClient();
    try{
        const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
        const todoResponse = await client.query(selectTodosText, [userId]);

        console.log('Todos for User ID:', userId);
        for(let todo of todoResponse.rows){
            console.log(`ID: ${todo.id}, Title: ${todo.title}, Done: ${todo.done}`);
        }
    }
    catch(err){
        console.error('Error fetching todos for user:', err);
    }
    finally{
        await client.end();
    }
}

getUsers();
getUserFromEmail('singh04@gmail.com');
getTodosForUser(6);
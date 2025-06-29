import {getClient} from './utils'

const updateTodo = async (todoId: number) => {
    const client = await getClient();
    try{
        const updatedTodoText = 'UPDATE todos SET done = $1 WHERE id = $2'
        await client.query(updatedTodoText,[true, todoId])
        console.log(`Todo with ID ${todoId} updated successfully!`);
    }
    catch(err){
        console.error('Error updating todo:', err);
    }
    finally{
        await client.end();
    }
}

updateTodo(2);
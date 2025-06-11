/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
      this.todoList = []
  }

  add(task) {
      this.todoList.push(task)
  }

  remove(indexOfTodo) {
      if (indexOfTodo >= this.todoList.length)
          return;
      this.todoList.splice(indexOfTodo, 1)
  }

  update(index, updatedTodo) {
      if (index >= this.todoList.length)
          return;
      this.todoList.splice(index, 1, updatedTodo)
  }

  getAll() {
      return this.todoList
  }

  get(indexOfTodo) {
      if (indexOfTodo >= this.todoList.length)
          return null;
      return this.todoList[indexOfTodo]
  }

  clear() {
      let len = this.todoList.length
      this.todoList.splice(0, len)
  }

}

module.exports = Todo;

// stores/todoStore.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    finishedTodosEmpty: true,
    unFinishedTodosEmpty: true,
    inputtodo: '',
    inputdeadline: '',
    inputfinished: false,
  }),
  actions: {
    addTodo(todo) {
      this.todos.unshift(todo);
      this.saveTodos();
      this.isTodoEmpty();
    },
    deleteTodo(id) {
      const index = this.todos.findIndex(todo => todo.id === parseInt(id));
      if (!confirm(`Are you sure you want to delete ${this.todos[index].todo}?`)) return;
      this.todos.splice(index, 1);
      this.saveTodos();
      this.isTodoEmpty();
    },
    setAsUnfinished(id) {
      const index = this.todos.findIndex(todo => todo.id === parseInt(id));
      this.todos[index].finished = false;
      this.saveTodos();
      this.isTodoEmpty();
    },
    setAsFinished(id) {
      const index = this.todos.findIndex(todo => todo.id === parseInt(id));
      this.todos[index].finished = true;
      this.saveTodos();
      this.isTodoEmpty();
    },
    isTodoEmpty() {
      this.finishedTodosEmpty = !this.todos.some(todo => todo.finished === true);
      this.unFinishedTodosEmpty = !this.todos.some(todo => todo.finished !== true);
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});

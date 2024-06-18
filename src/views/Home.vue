<!-- views/Home.vue -->
<template>
    <TodoForm 
      @todovaluechange="setTodo" 
      @deadlinevaluechange="setDeadline" 
      @finishedvaluechange="setFinished" 
      @ontodosubmit="addTodo" 
    />
    <TodoContainer 
      :todos="todos" 
      :isFinishedTodosEmpty="finishedTodosEmpty" 
      :isUnFinishedTodosEmpty="unFinishedTodosEmpty"
      @deletebuttonclick="deleteTodo"
      @unfinishbuttonclick="setAsUnfinished"
      @finishbuttonclick="setAsFinished"
    />
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import TodoForm from '../components/TodoForm.vue';
  import TodoContainer from '../components/TodoContainer.vue';
  import { useTodoStore } from '../stores/todoStore';
  
  export default {
    components: { TodoForm, TodoContainer },
    setup() {
      const todoStore = useTodoStore();
  
      const setTodo = (val) => {
        todoStore.inputtodo = val;
      };
  
      const setDeadline = (val) => {
        todoStore.inputdeadline = val;
      };
  
      const setFinished = (val) => {
        todoStore.inputfinished = val;
      };
  
      const addTodo = () => {
        todoStore.addTodo({
          todo: todoStore.inputtodo,
          deadline: todoStore.inputdeadline,
          finished: todoStore.inputfinished,
          id: +new Date(),
        });
      };
  
      onMounted(() => {
        todoStore.isTodoEmpty();
      });
  
      return {
        todos: todoStore.todos,
        finishedTodosEmpty: todoStore.finishedTodosEmpty,
        unFinishedTodosEmpty: todoStore.unFinishedTodosEmpty,
        setTodo,
        setDeadline,
        setFinished,
        addTodo,
        deleteTodo: todoStore.deleteTodo,
        setAsUnfinished: todoStore.setAsUnfinished,
        setAsFinished: todoStore.setAsFinished,
      };
    },
  };
  </script>
  
<template>
  <div id="app">
    <task-input 
      @add-task="addNewTask"
    />
  </div>
</template>

<script>
import TaskInput from './components/TaskInput.vue'

export default {
  name: 'TodoApp',
  components: {
    TaskInput,
  },
  methods: {
    // Method to call the child component
    addNewTask(task) {
      alert(`New task add: ${task}`);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>

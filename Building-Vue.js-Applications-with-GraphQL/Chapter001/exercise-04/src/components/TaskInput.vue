<template>
  <div class="cardBox">
    <h2>My task is: {{ task }}</h2>
    <input 
      type="text" 
      :value="task"
      @input="task = $event.target.value"
      class="taskInput" />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  data() {
    return {
      task: '',
    }
  },
  methods: {
    addTask() {
      if (this.task.length) {
        this.$emit('add-task', this.task);
        this.task = '';
      } else {
        alert('You can not add an empty task');
      }
    },
  }
}
</script>

<style scoped>
  .tasker{
    margin: 20px;
  }
  .taskInput {
    display: block;
    font-size: 14px;
    margin: 0 10px;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  }
  .tasker button {
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }
</style>
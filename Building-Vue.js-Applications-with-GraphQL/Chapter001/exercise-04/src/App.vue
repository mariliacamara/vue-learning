<template>
  <div id="app">
    <task-input 
      @add-task="addNewTask"
    />
    <div>
      <div class="cardBox">
        <div class="container">
          <h3>My Tasks</h3>
          <ul class="taskList">
            <li 
              v-for="(taskItem, index) in taskList"
              :key="`${index}_${Math.random()}`"
            >
              <input 
                type="checkbox"
                :checked="!!taskItem.finishedAt"
                @input="changeStatus(index)"
              />
              {{ taskItem.task }}
              <span v-if="taskItem.finishedAt">
                {{ taskItem.finishedAt }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskInput from './components/TaskInput.vue'

export default {
  name: 'TodoApp',
  components: {
    TaskInput,
  },
  data() {
    return {
      taskList: [],
    }
  },
  methods: {
    // Method to call the child component
    addNewTask(task) {
      this.taskList.push({
        task, 
        createdAt: Date.now(), 
        finishedAt: undefined
      })
    },
    changeStatus(taskIndex) {
      const task = this.taskList[taskIndex];
      if (task.finishedAt){
        task.finishedAt = undefined;
      } else {
        task.finishedAt = Date.now();
      }
    }
  },
};
</script>

<style scoped>
  .taskList li {
    text-align: left;
  }
</style>

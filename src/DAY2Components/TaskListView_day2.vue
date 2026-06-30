<!--
=============================================================
  DAY 2 ASSIGNMENT — TaskListView.vue (Parent Component)
  This file renders a list of TaskCard components.
=============================================================
-->
<script setup>
import { ref } from 'vue'
import TaskCard from './TaskCard_day2.vue'


// TODO 1: Create a ref() tasks array with at least 3 sample tasks
// Each task: { id, name, done, dueDate }
// const tasks = ref([...])
const tasks = ref([
  {
    id: 1,
    name: "Hike",
    done: false,
    dueDate: "2026-07-1",
    priority: "Low"
  },
  {
    id: 2,
    name: "Make Project",
    done: false,
    dueDate: "2026-07-2",
    priority: "High"
  },
  {
    id: 3,
    name: "Study 日本語",
    done: false,
    dueDate: "2026-07-5",
    priority: "Medium"
  },

])

// TODO 2: Write handleComplete(id) — toggle the done state of the task with this id
function handleComplete(id) {
  const foundTask = tasks.value.find(task => task.id === id)
  foundTask.done = !foundTask.done
}

// TODO 3: Write handleDelete(id) — remove the task with this id from the array
function handleDelete(id) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}
</script>

<template>
  <div class="task-list-view">
    <h1>My Tasks</h1>

    <!-- TODO 4: Render a <TaskCard> for each task using v-for
         - Pass :task="task" as a prop
         - Listen @complete="handleComplete"
         - Listen @delete="handleDelete"
         - Fill the "meta" named slot with the due date
    -->
         
    <!-- Example structure (remove the comment markers and complete it):    -->
    <TaskCard 
      v-for="task in tasks"
      :key="task.id" 
      :task="task" 
      @complete="handleComplete" 
      @delete="handleDelete"
    >
      <template #meta>
        Due: {{task.dueDate }}
      </template>
    </TaskCard>
  </div>
</template>

<style scoped>
.task-list-view {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}
h1 { color: #1B2A4A; margin-bottom: 24px; }
</style>

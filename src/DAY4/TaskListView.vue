<!--
=============================================================
  DAY 4 ASSIGNMENT — TaskListView.vue (refactored for Pinia)
  Remove all local state. Use the store for everything.
=============================================================
-->
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

// TODO 1: Import your store
import { useTaskStore } from '@/stores/taskStore'

// TODO 2: Get the store instance
const taskStore = useTaskStore()

// TODO 3: Destructure REACTIVE STATE using storeToRefs()
const { tasks, doneCount, pendingCount, totalCount } = storeToRefs(taskStore)

// TODO 4: Destructure ACTIONS directly (no storeToRefs needed for functions)
const { addTask, toggleTask, removeTask } = taskStore

// This local ref is fine — it's UI state, not task state
const newTaskName = ref('')

function handleAdd() {
  // TODO 5: Call addTask() from the store, then clear the input
  taskStore.addTask(newTaskName.value)
  newTaskName.value = ''
}
</script>

<template>
  <div class="task-view">
    <h1>📝 Tasks</h1>

    <!-- TODO 6: Display totalCount, doneCount, pendingCount from the store -->
    <div class="stats">
      Total: {{taskStore.totalCount}} | Done: {{taskStore.doneCount}} | Pending: {{taskStore.pendingCount}}
    </div>

    <div class="input-row">
      <input v-model="newTaskName" placeholder="New task..." @keyup.enter="handleAdd" />
      <button @click="handleAdd">Add</button>
    </div>

    <!-- TODO 7: Render the task list using tasks from the store -->
    <ul class="task-list">
      <!-- v-for task in tasks -->
      <!--   checkbox v-model="task.done" @change="toggleTask(task.id)" -->
      <!--   span :class done -->
      <!--   remove button @click="removeTask(task.id)" -->

      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.done" @change="toggleTask(task.id)">
        <span :class="{done: task.done}">{{task.name}}</span>
        <button class="remove" @click="removeTask(task.id)">X</button>
      </li>
    </ul>
  </div>  
</template>

<style scoped>
.task-view {
  max-width: 500px;
  margin: 48px auto;
  padding: 32px 28px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  font-family: 'Segoe UI', Arial, sans-serif;
}
h1 { color: #1B2A4A; font-size: 22px; margin: 0 0 16px; }
.stats {
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: #374151;
  padding: 10px 14px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  margin-bottom: 20px;
}
.stats span { font-weight: 600; color: #1B2A4A; }
.input-row { display: flex; gap: 8px; margin-bottom: 20px; }
.input-row input {
  flex: 1;
  padding: 9px 14px;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s;
}
.input-row input:focus { border-color: #42B883; }
.input-row button {
  padding: 9px 20px;
  background: #42B883;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s;
}
.input-row button:hover { background: #36a472; }
.task-list { list-style: none; padding: 0; margin: 0; }
.task-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  background: #f9fafb;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid #f0f0f0;
  transition: border-color 0.15s;
}
.task-list li:hover { border-color: #d1d5db; }
.task-list li input[type="checkbox"] { width: 16px; height: 16px; accent-color: #42B883; cursor: pointer; }
.task-list li span { flex: 1; font-size: 14px; color: #1f2328; }
.done { text-decoration: line-through; color: #9ca3af !important; }
.task-list li .remove {
  padding: 4px 10px;
  background: #fff0f0;
  color: #dc2626;
  border: 1px solid #fecaca;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: background 0.15s;
}
.task-list li .remove:hover { background: #fee2e2; }
</style>

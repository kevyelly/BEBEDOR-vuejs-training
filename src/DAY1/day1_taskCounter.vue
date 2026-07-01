<!--
=============================================================
  DAY 1 Task — Reactive Task Counter App
  Topic: Vue 3 Composition API (ref, computed, v-model, v-for)
  Time: 60 minutes
=============================================================

OBJECTIVE
---------
Build a reactive task management app that demonstrates Vue 3's
reactivity system. You will use ref(), computed(), v-model, v-for,
and event handling — the core building blocks of every Vue app.

WHAT TO BUILD
-------------
A single-file Vue component (this file) that:

  1. Has a text input + "Add Task" button to create new tasks.
  2. Displays the task list, each item with:
       - A checkbox to mark it as done
       - The task name (strike-through when done)
       - A "Remove" button
  3. Shows a live stats bar:
       Total Tasks | Done: X | Pending: X
  4. Shows an empty state message when there are no tasks.

REQUIREMENTS (Acceptance Criteria)
------------------------------------
  [x] Use ref() for the text input value DONE
  [x] Use ref() for the tasks array DONE
  [x] Use computed() for total, done, and pending counts DONE
  [x] Use v-model on the text input DONE
  [x] Use v-for with :key to render the task list DONE
  [x] Use @keyup.enter on the input to also trigger addTask DONE
  [x] Prevent adding empty/whitespace-only tasks DONE
  [x] Clear the input after adding a task

EXTENSION (Additional Points)
---------------------------------
  - Add a filter bar: All | Done | Pending — filters the visible list
  - Add a "Clear All Done" button that removes all completed tasks DONE
  - Add a task priority: Low / Medium / High (use a <select> dropdown)

HINTS (read only if stuck)
---------------------------
  Hint 1: import { ref, computed } from 'vue'
  Hint 2: tasks.value.push({ id: Date.now(), name: '...', done: false })
  Hint 3: computed(() => tasks.value.filter(t => t.done).length)
  Hint 4: For :class strikethrough — :class="{ done: task.done }"
  Hint 5: v-model on a checkbox binds to a boolean — v-model="task.done"
  Hint 6: To prevent empty tasks — if (!newTaskName.value.trim()) return

FILE STRUCTURE (this is a single-file component)
-------------------------------------------------
  <script setup>  — all your reactive logic goes here
  <template>      — your HTML markup
  <style scoped>  — your CSS (scoped = only applies to this component)
=============================================================
-->

<script setup>
import { ref, computed } from 'vue'

// TODO 1: Create a ref for the text input value (initial value: '')
const newTaskName = ref('')

const selectedPrio = ref('')
const selectedFilter = ref("all")
// TODO 2: Create a ref for the tasks array (initial value: [])
const tasks = ref([])

// TODO 3: Create computed() values for total, done, and pending counts
const totalCount  = computed(() => tasks.value.length)
const doneCount   = computed(() => tasks.value.filter(t => t.done).length)
const pendingCount = computed(() => tasks.value.filter(t => !t.done).length)

//MY FILTER LOGIC
const filteredTask = computed(() => {
  if(selectedFilter.value === "all")
    return tasks.value
  else if(selectedFilter.value === "done")
    return tasks.value.filter(task => task.done === true)
  else
    return tasks.value.filter(task => task.done === false)
})

// TODO 4: Write the addTask() function
// - Prevent empty tasks
// - Push a new task object to tasks.value: { id, name, done }
// - Clear the input
function addTask() {
  if(newTaskName.value.trim() !== ''){
    if(selectedPrio.value === ''){
      alert("Select Priority Level");
      return;
    }
    tasks.value.push({id: Date.now(), name:newTaskName.value, done:false, prio:selectedPrio.value})
    newTaskName.value = ''
    selectedPrio.value = ''
  }

}

// TODO 5: Write toggleTask(id) — flip task.done for the matching task
function toggleTask(id) {
  const task = tasks.value.find(task => task.id === id);
  task.done = !task.done
}

// TODO 6: Write removeTask(id) — filter out the task with this id
function removeTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id);
}
function clearAllDone(){
  tasks.value = tasks.value.filter(task => task.done !== true)
}
</script>

<template>
  <div class="app">
    <h1>Task Counter</h1>

    <!-- TODO 7: Add an input with v-model, @keyup.enter, and placeholder -->
    <!-- TODO 8: Add an "Add Task" button with @click="addTask" -->
    <div class="input-row">
      <input v-model="newTaskName" placeholder="Enter task here" @keyup.enter="addTask">
      <div class="prio-field">
        <label for="prio">Choose priority level:</label>
        <select name="prio" id="prio" v-model="selectedPrio">
          <option value="">Select Prio</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button @click="addTask">Add Task</button>
    </div>

    <!-- TODO 9: Display the stats bar using your computed values -->
    <!-- Format: Total: X | Done: X | Pending: X -->
    <div class="stats">
      <div>
        <p>Total: {{ totalCount }} | Done: {{ doneCount }} | Pending:{{ pendingCount }}</p>
      </div>
    </div>

    <!-- TODO 10: Show this message only when the task list is empty -->
    <!-- <p class="empty">No tasks yet. Add one above!</p> -->

    <!-- TODO 11: Render the task list using v-for -->
    <!-- Each item needs: checkbox (v-model), task name (:class done), remove button -->
        <select name="filter" id="filter" v-model="selectedFilter">
          <option value="all">ALL</option>
          <option value="done">DONE</option>
          <option value="pending">PENDING</option>
        </select>
    <ul class="task-list">
      <li v-for="task in filteredTask" :key="task.id">
        <input type="checkbox" v-model="task.done">
        <p class="task-name" :class="{done: task.done}">{{ task.name }}</p>
        <span class="prio-badge" :class="'prio-' + task.prio.toLowerCase()">{{ task.prio }}</span>
        <button @click="removeTask(task.id)">X</button>
      </li>
    </ul>
  </div>
  <div>
    <button @click="clearAllDone">Clear All Done</button>
  </div>
</template>

<style scoped>
.app {
  max-width: 480px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
  padding: 24px;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

h1 { color: #1B2A4A; margin-bottom: 20px; }

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.input-row input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}
.prio-field {
  display: flex;
  flex-direction: column;
}

.prio-field label {
  font-size: 10px;
  margin-bottom: 2px;
  color: #666;
}

.prio-field select {
  width: 110px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 12px;
  background: white;
}

.input-row button {
  padding: 8px 16px;
  background: #42B883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.stats {
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
  padding: 8px 12px;
  background: #e9f7f0;
  border-radius: 6px;
}

.empty {
  text-align: center;
  color: #aaa;
  font-style: italic;
  margin: 32px 0;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
  border: 1px solid #eee;
}

.task-list li .task-name {
  flex: 1;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #1B2A4A;
}

.prio-badge {
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 8px;
  border-radius: 999px;
}

.prio-low {
  background: #e0f2fe;
  color: #0369a1;
}

.prio-medium {
  background: #fef3c7;
  color: #b45309;
}

.prio-high {
  background: #fee2e2;
  color: #dc2626;
}

/* TODO: Apply this class to task names when task.done is true */
.done {
  text-decoration: line-through;
  color: #aaa;
}

.task-list li button {
  padding: 4px 10px;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}
</style>

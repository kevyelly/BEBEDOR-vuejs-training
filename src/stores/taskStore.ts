// =============================================================
//  DAY 3 — Pinia Task Store
//  Central source of truth for tasks, shared by HomeView,
//  TaskDetailView, and the router navigation guard.
// =============================================================
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, name: 'Hike',         done: false, dueDate: '2026-07-01', priority: 'Low' },
      { id: 2, name: 'Make Project', done: false, dueDate: '2026-07-02', priority: 'High' },
      { id: 3, name: 'Study 日本語',  done: false, dueDate: '2026-07-05', priority: 'Medium' },
    ],
  }),

  actions: {
    // Toggle a task's done state
    toggleDone(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    },

    // Remove a task by id
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
  },
})

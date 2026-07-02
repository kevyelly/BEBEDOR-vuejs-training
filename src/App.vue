<script setup lang="ts">
import { ref } from 'vue'
// Navigation lives in the router; this shell just renders the nav + active page.
const loginInput = ref('')
</script>

<template>
  <div class="app-shell">
    <nav class="day-nav">
      <RouterLink to="/day1" class="day-btn">Day 1</RouterLink>
      <RouterLink to="/day2" class="day-btn">Day 2</RouterLink>
      <RouterLink to="/home" class="day-btn">Day 3</RouterLink>
      <RouterLink to="/day4" class="day-btn">Day 4</RouterLink>
      <div class="login-area">
        <input v-model="loginInput" type="text" class="login-input" placeholder="Username..." />
        <button class="login-btn">Login</button>
      </div>
    </nav>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell { font-family: Arial, sans-serif; }
.day-nav {
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 16px;
  background: #1B2A4A;
}
.day-btn {
  padding: 8px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  transition: background 0.15s ease;
}
.day-btn:hover { background: rgba(255, 255, 255, 0.24); }
.router-link-active.day-btn { background: #42B883; color: #fff; }
.app-main { padding-top: 8px; }
.login-area { display: flex; gap: 8px; margin-left: auto; align-items: center; }
.login-input { padding: 6px 12px; border-radius: 6px; border: none; font-size: 14px; outline: none; }
.login-btn { padding: 6px 16px; border-radius: 6px; border: none; background: #42B883; color: #fff; font-weight: 600; cursor: pointer; }
.login-btn:hover { background: #36a472; }
</style>

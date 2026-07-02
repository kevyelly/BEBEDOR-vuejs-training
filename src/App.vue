<script setup lang="ts">
import { ref } from 'vue'
import {useUserStore} from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const loginInput = ref('')
const userStore = useUserStore()
const {currentUser, isLoggedIn} = storeToRefs(userStore)
const {loginUser, logoutUser} = userStore
</script>

<template>
  <div class="app-shell">
    <nav class="day-nav">
      <RouterLink to="/day1" class="day-btn">Day 1</RouterLink>
      <RouterLink to="/day2" class="day-btn">Day 2</RouterLink>
      <RouterLink to="/home" class="day-btn">Day 3</RouterLink>
      <RouterLink to="/day4" class="day-btn">Day 4</RouterLink>
      <div class="login-area">
        <template v-if="!isLoggedIn">
          <input v-model="loginInput" type="text" class="login-input" placeholder="Username..." />
          <button class="login-btn" @click="loginUser(loginInput)">Login</button>
        </template>
        <template v-else>
          <span class="user-greeting">👤 {{ currentUser }}</span>
          <button class="logout-btn" @click="logoutUser">Logout</button>
        </template>
      </div>
    </nav>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6fb; min-height: 100vh; }
.day-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 24px;
  height: 56px;
  background: linear-gradient(90deg, #1B2A4A 0%, #243660 100%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.day-btn {
  padding: 7px 18px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  color: rgba(255,255,255,0.75);
  background: transparent;
  transition: background 0.15s ease, color 0.15s ease;
  letter-spacing: 0.3px;
}
.day-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
.router-link-active.day-btn { background: #42B883; color: #fff; }
.app-main { padding: 0; }
.login-area { display: flex; gap: 8px; margin-left: auto; align-items: center; }
.login-input {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  font-size: 13px;
  color: #fff;
  outline: none;
  width: 148px;
  transition: border 0.15s;
}
.login-input::placeholder { color: rgba(255,255,255,0.4); }
.login-input:focus { border-color: #42B883; background: rgba(255,255,255,0.13); }
.login-btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: none;
  background: #42B883;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s;
}
.login-btn:hover { background: #36a472; }
.user-greeting { color: rgba(255,255,255,0.9); font-size: 13px; font-weight: 500; }
.logout-btn {
  padding: 5px 14px;
  border-radius: 20px;
  border: 1.5px solid rgba(255,255,255,0.3);
  background: transparent;
  color: rgba(255,255,255,0.8);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.logout-btn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.5); }
</style>

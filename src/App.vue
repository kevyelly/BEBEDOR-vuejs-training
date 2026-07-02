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
.login-input { padding: 6px 12px; border-radius: 6px; border: none; font-size: 14px; outline: none; width: 140px; }
.login-input:focus { outline: 2px solid #42B883; }
.login-btn { padding: 6px 16px; border-radius: 6px; border: none; background: #42B883; color: #fff; font-weight: 600; cursor: pointer; }
.login-btn:hover { background: #36a472; }
.user-greeting { color: #fff; font-size: 14px; font-weight: 500; }
.logout-btn { padding: 6px 14px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.4); background: transparent; color: #fff; font-size: 13px; font-weight: 500; cursor: pointer; }
.logout-btn:hover { background: rgba(255,255,255,0.12); }
</style>

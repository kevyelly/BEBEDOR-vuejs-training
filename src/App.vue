<script setup lang="ts">
// Navigation lives in the router; this shell just renders the nav + active page.
</script>

<template>
  <div class="app-shell">
    <nav class="day-nav">
      <RouterLink to="/day1" class="day-btn">Day 1</RouterLink>
      <RouterLink to="/day2" class="day-btn">Day 2</RouterLink>
      <RouterLink to="/home" class="day-btn">Day 3</RouterLink>
      <RouterLink to="/day4" class="day-btn">Day 4</RouterLink>
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
</style>

<!--
=============================================================
  DAY 3 ASSIGNMENT — AboutView.vue
  Static info page describing the task app
=============================================================
-->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/home')
}
</script>

<template>
  <div class="about-view">
    <button class="back-btn" @click="goHome">← Back to tasks</button>

    <h1>ℹ️ About</h1>

    <p class="lead">
      A small task-management app built while learning Vue 3 — component
      composition, Pinia state management, and client-side routing with Vue Router.
    </p>

    <div class="card">
      <h2>What you can do</h2>
      <ul class="feature-list">
        <li>Browse all your tasks on the home page</li>
        <li>Open any task to see its full details</li>
        <li>Get bounced back home if you visit a task that doesn't exist</li>
      </ul>
    </div>

    <div class="card">
      <h2>Built with</h2>
      <ul class="feature-list">
        <li>Vue 3 &mdash; Composition API (<code>&lt;script setup&gt;</code>)</li>
        <li>Vue Router 4 &mdash; dynamic routes &amp; navigation guards</li>
        <li>Pinia &mdash; shared task store</li>
      </ul>
    </div>

    <nav class="page-nav">
      <RouterLink to="/home">Home</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.about-view { max-width: 520px; margin: 40px auto; padding: 24px; font-family: Arial, sans-serif; }
.back-btn { background: none; border: 1px solid #ddd; border-radius: 6px; padding: 6px 14px; cursor: pointer; margin-bottom: 20px; }
.back-btn:hover { background: #f3f4f6; }
h1 { color: #1B2A4A; font-size: 24px; margin-bottom: 12px; }
h2 { color: #1B2A4A; font-size: 17px; margin: 0 0 10px; }
.lead { color: #4A5568; font-size: 15px; line-height: 1.6; margin-bottom: 20px; }
.card { background: white; border: 1px solid #eee; border-radius: 8px; padding: 16px 18px; margin-bottom: 12px; }
.feature-list { list-style: none; padding: 0; margin: 0; }
.feature-list li { color: #4A5568; font-size: 14px; padding: 6px 0 6px 20px; position: relative; }
.feature-list li::before { content: '✓'; color: #42B883; position: absolute; left: 0; font-weight: 700; }
code { background: #f3f4f6; border-radius: 4px; padding: 1px 5px; font-size: 13px; color: #1B2A4A; }
.page-nav { margin-top: 20px; }
.page-nav a { color: #42B883; text-decoration: none; font-weight: 600; }
.page-nav a:hover { text-decoration: underline; }
</style>

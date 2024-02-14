<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header class="h-14">
    <NavBar />
  </header>
  <RouterView />
</template>

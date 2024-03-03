<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import IconAngleLeft from './icons/IconAngleLeft.vue'

const route = useRoute()
</script>

<template>
  <nav
    class="bg-red fixed z-10 flex w-full scroll-m-1 items-center justify-center bg-black p-2 shadow-md"
  >
    <RouterLink
      v-if="route.path.includes('show')"
      class="absolute left-5 text-white"
      to="/"
      data-testid="back-to-main-link"
      aria-label="Back to main page"
      title="Back to main page"
    >
      <IconAngleLeft />
    </RouterLink>
    <RouterLink to="/">
      <h1 class="flex gap-2 font-lobster text-3xl text-white">
        Episode <img class="h-10" src="/logo_64x64.png" alt="" /> Guide
      </h1>
    </RouterLink>
  </nav>
</template>

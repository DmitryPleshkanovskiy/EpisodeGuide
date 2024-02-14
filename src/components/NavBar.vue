<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import IconAngleLeft from './icons/IconAngleLeft.vue'

const route = useRoute()
</script>

<template>
  <nav
    class="w-full flex justify-center items-center p-2 shadow-md fixed bg-black z-10 scroll-m-1 bg-red"
  >
    <RouterLink v-if="route.path.includes('show')" class="absolute text-white left-5" to="/">
      <IconAngleLeft />
    </RouterLink>
    <RouterLink to="/">
      <h1 class="flex gap-2 text-white text-3xl font-lobster">
        Episode <img class="h-10" src="/logo_64x64.png" alt="" /> Guide
      </h1>
    </RouterLink>
  </nav>
</template>

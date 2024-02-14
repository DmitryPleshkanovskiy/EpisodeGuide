<script setup lang="ts">
import { sortShowsByRating } from '@/utils/sortShowsByRating'
import type { Show } from '../types/show'
import TvShowPreview from './TvShowPreview.vue'

const {
  title,
  shows,
  isLoading = false
} = defineProps<{
  title: string
  shows: Show[]
  isLoading?: boolean
}>()
</script>

<template>
  <section class="w-full mt-5 flex flex-col" :aria-label="title">
    <div v-show="isLoading" class="skeleton-title skeleton"></div>
    <h2 class="px-5 text-xl font-bold uppercase" v-show="!isLoading">{{ title }}</h2>
    <ul class="h-[200px] flex-1 flex gap-4 px-5 overflow-x-auto">
      <li v-for="show in sortShowsByRating(shows)" :key="show.id">
        <TvShowPreview :show="show" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.skeleton-title {
  height: 1em;
  width: 10rem;
}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: 0.5rem;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsla(201, 20%, 80%, 0.214);
  }
  100% {
    background-color: hsla(204, 20%, 95%, 0.217);
  }
}
</style>

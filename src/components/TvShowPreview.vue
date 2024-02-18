<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Show } from '../types/show'

const { show } = defineProps<{
  show: Show
  isLoading?: boolean
}>()
</script>

<template>
  <article class="flex flex-col align-center">
    <RouterLink class="hover:shadow-md hover:shadow-gray-500" :to="`/show/${show.id}`">
      <div class="title">
        <h4 :aria-label="`${show.name}`">{{ show.name }}</h4>
      </div>
      <div class="w-[150px] h-[200px] bg-gray-300 m-0 p-0 flex">
        <img
          class="w-full cover"
          v-if="show.image"
          :src="show.image.medium"
          :alt="`Tv show poster`"
        />
        <div
          v-else
          class="flex items-center justify-center w-full h-full text-gray-500"
          aria-label="No tv show poster available"
        >
          No image
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped>
a {
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem 0;
}

/* a:hover {
  box-shadow: 0 0 1em #00000073;
  color: #000;
} */

.title {
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -50%;
  background: #000000ce;
  color: #fff;
  font-weight: bold;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

a:hover .title,
a:focus .title {
  bottom: 0%;
  transition:
    top,
    bottom 150ms;
}
</style>

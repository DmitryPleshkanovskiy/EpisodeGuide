<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Show } from '../types/show'

const { tvshow } = defineProps<{
  tvshow: Show
  isLoading?: boolean
}>()
</script>

<template>
  <article class="align-center flex flex-col">
    <RouterLink class="hover:shadow-md hover:shadow-gray-500" :to="`/show/${tvshow.id}`">
      <div class="title">
        <h3 :aria-label="`${tvshow.name}`">{{ tvshow.name }}</h3>
      </div>
      <div class="m-0 flex h-[200px] w-[150px] bg-gray-300 p-0">
        <img
          class="cover w-full"
          v-if="tvshow.image"
          :src="tvshow.image.medium"
          :alt="`Tv show poster`"
        />
        <div
          v-else
          class="flex h-full w-full items-center justify-center text-gray-500"
          aria-label="No tv show poster available"
          data-testid="no-image-text"
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

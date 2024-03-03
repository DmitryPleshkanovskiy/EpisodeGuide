<script setup lang="ts" generic="T extends { id: number }">
import { toRefs } from 'vue'

const props = defineProps<{
  title: string
  items: T[]
  isLoading?: boolean
}>()

const { title, items } = toRefs(props)
</script>

<template>
  <section class="mt-5 flex w-full flex-col" :aria-label="title">
    <div v-show="isLoading" class="skeleton-title skeleton"></div>
    <h2 class="px-5 text-xl font-bold uppercase" v-show="!isLoading">{{ title }}</h2>
    <div class="mx-5 text-gray-400" v-if="!items.length">No items to show</div>
    <ul class="flex h-[200px] flex-1 gap-4 overflow-x-auto px-5" v-if="items.length">
      <li v-for="item in items" :key="item.id">
        <slot name="item" v-bind="{ item }"></slot>
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

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Show } from '../types/show'

const { show } = defineProps<{
  show: Show
  isLoading?: boolean
}>()
</script>

<template>
  <article>
    <RouterLink :to="`/show/${show.id}`">
      <figure>
        <img class="w-full cover" v-if="show.image" :src="show.image.medium" alt="show.name" />
      </figure>
      <div class="title">
        <h4>{{ show.name }}</h4>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

figure {
  width: 150px;
  height: 200px;
  background: #0000003a;
  margin: 0;
  padding: 0;
  display: flex;
}

a {
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem 0;
}

a:hover {
  text-decoration: underline;
  box-shadow: 0 0 1em #00000073;
  color: #000;
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

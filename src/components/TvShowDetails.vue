<script setup lang="ts">
import { defineProps } from 'vue'
import type { Show } from '../types/show'

const props = defineProps<{
  tvshow: Show
}>()

const { tvshow } = props
</script>

<template>
  <article class="p-5">
    <div class="flex gap-5 flex-col sm:flex-row">
      <div class="flex sm:min-w-[250px] max-h-[350px] justify-center">
        <div class="text-gray-500" v-if="!tvshow.image">No image</div>
        <img
          v-if="tvshow.image"
          class="sm:w-full object-contain rounded-md shadow-lg shadow-black"
          :src="tvshow.image?.medium"
          :alt="tvshow.name"
        />
      </div>
      <div>
        <div class="flex justify-between items-center">
          <h3 class="text-3xl">{{ tvshow.name }}</h3>
          <span
            v-if="tvshow.rating?.average"
            class="w-10 h-10 flex items-center justify-center mt-3 bg-black rounded-[50%] text-xl text-white"
          >
            {{ tvshow.rating?.average }}
          </span>
        </div>
        <p class="mt-2 mb-3 text-sm text-gray-500">{{ tvshow.genres.join(', ') }}</p>
        <p><span class="font-bold">Language:</span> {{ tvshow.language }}</p>
        <p><span class="font-bold">Premiered:</span> {{ tvshow.premiered }}</p>
        <p><span class="font-bold">Status:</span> {{ tvshow.status }}</p>
        <!-- TODO: Sanitize: -->
        <p class="mt-3 text-justify" v-html="tvshow.summary" />
      </div>
    </div>
  </article>
</template>

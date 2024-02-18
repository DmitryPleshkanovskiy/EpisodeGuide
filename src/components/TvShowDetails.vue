<script setup lang="ts">
import type { Show } from '../types/show'

const { tvshow } = defineProps<{
  tvshow: Show
}>()

const tvShowGenres = tvshow.genres.join(', ')
</script>

<template>
  <article class="p-5" data-testid="show-details">
    <div class="flex gap-5 flex-col sm:flex-row">
      <div class="w-full sm:w-[250px] object-contain">
        <div v-if="tvshow.image" class="flex justify-center">
          <img
            class="w-[250px] max-w-[250px] sm:w-full rounded-md shadow-md shadow-gray-500"
            :src="tvshow.image?.original"
            :alt="`${tvshow.name} poster`"
          />
        </div>
        <div
          v-else
          class="w-[250px] min-h-[350px] text-gray-500 flex items-center justify-center bg-gray-300 rounded-md shadow-md shadow-gray-500"
          data-test="no-image-text"
        >
          No image
        </div>
      </div>
      <section class="flex-1">
        <div class="flex justify-between items-center">
          <h2 class="text-3xl">{{ tvshow.name }}</h2>
          <span
            v-if="tvshow.rating?.average"
            class="w-10 h-10 min-w-10 flex items-center justify-center mt-3 bg-black rounded-[50%] text-xl text-white"
            data-test="tv-show-rating"
            aria-label="Tv show rating"
          >
            {{ tvshow.rating?.average }}
          </span>
        </div>

        <p
          class="mt-2 mb-3 text-sm text-gray-500"
          :aria-label="`Tv show genres: ${tvShowGenres}`"
          data-test="tv-show-genres"
        >
          {{ tvShowGenres }}
        </p>
        <ul aria-label="Tv show additional information">
          <li data-test="tv-show-language">
            <span class="font-bold">Language:</span>
            {{ tvshow.language }}
          </li>
          <li data-test="tv-show-premiered">
            <span class="font-bold">Premiered:</span>
            {{ tvshow.premiered }}
          </li>
          <li data-test="tv-show-status">
            <span class="font-bold">Status:</span> {{ tvshow.status }}
          </li>
          <li class="mt-3 text-justify" data-test="tv-show-summary">
            <!-- TODO: Sanitize: tvshow.summary -->
            <p v-html="tvshow.summary" />
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

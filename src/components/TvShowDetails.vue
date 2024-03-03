<script setup lang="ts">
import type { Show } from '../types/show'

const { tvshow } = defineProps<{
  tvshow: Show
}>()

const tvShowGenres = tvshow.genres.join(', ')
</script>

<template>
  <article class="p-5" data-testid="show-details">
    <div class="flex flex-col gap-5 sm:flex-row">
      <div class="w-full object-contain sm:w-[250px]">
        <div v-if="tvshow.image" class="flex justify-center">
          <img
            class="w-[250px] max-w-[250px] rounded-md shadow-md shadow-gray-500 sm:w-full"
            :src="tvshow.image?.original"
            :alt="`${tvshow.name} poster`"
            loading="lazy"
          />
        </div>
        <div
          v-else
          class="flex min-h-[350px] w-[250px] items-center justify-center rounded-md bg-gray-300 text-gray-500 shadow-md shadow-gray-500"
          data-testid="no-image-text"
        >
          No image
        </div>
      </div>
      <section class="flex-1">
        <div class="flex items-center justify-between">
          <h2 class="text-3xl">{{ tvshow.name }}</h2>
          <span
            v-if="tvshow.rating?.average"
            class="mt-3 flex h-10 w-10 min-w-10 items-center justify-center rounded-[50%] bg-black text-xl text-white"
            data-testid="tv-show-rating"
            aria-label="Tv show rating"
          >
            {{ tvshow.rating?.average }}
          </span>
        </div>

        <p
          class="mb-3 mt-2 text-sm text-gray-500"
          :aria-label="`Tv show genres: ${tvShowGenres}`"
          data-testid="tv-show-genres"
        >
          {{ tvShowGenres }}
        </p>
        <ul aria-label="Tv show additional information">
          <li data-testid="tv-show-language">
            <span class="font-bold">Language:</span>
            {{ tvshow.language }}
          </li>
          <li data-testid="tv-show-premiered">
            <span class="font-bold">Premiered:</span>
            {{ tvshow.premiered }}
          </li>
          <li data-testid="tv-show-status">
            <span class="font-bold">Status:</span> {{ tvshow.status }}
          </li>
          <li class="mt-3 text-justify" data-testid="tv-show-summary">
            <!-- TODO: Sanitize: tvshow.summary -->
            <p v-html="tvshow.summary" />
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

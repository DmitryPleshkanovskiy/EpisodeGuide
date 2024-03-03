<script setup lang="ts">
import TvShowPreview from './TvShowPreview.vue'
import type { SearchResult } from '@/types/searchResult'

const { searchResults } = defineProps<{
  searchResults: SearchResult[]
}>()
</script>

<template>
  <section
    v-if="searchResults.length"
    class="flex flex-wrap justify-center gap-3 p-5"
    aria-label="Search results"
    data-testid="search-results"
  >
    <div v-for="result in searchResults" :key="result.show.id">
      <TvShowPreview :tvshow="result.show" />
    </div>
  </section>
  <section v-else class="flex items-center justify-center p-5" aria-label="No tv shows found">
    No tv shows found
  </section>
</template>

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
    class="flex flex-wrap gap-3 p-5 justify-center"
    aria-label="Search results"
    data-testid="search-results"
  >
    <div v-for="result in searchResults" :key="result.show.id">
      <TvShowPreview :show="result.show" />
    </div>
  </section>
  <section v-else class="p-5 flex items-center justify-center" aria-label="No tv shows found">
    No tv shows found
  </section>
</template>

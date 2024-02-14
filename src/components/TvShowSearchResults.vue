<script setup lang="ts">
import TvShowPreview from './TvShowPreview.vue'
import type { SearchResult } from '@/types/searchResult'

const { searchResults } = defineProps<{
  searchResults: SearchResult[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-3 p-5 justify-center">
    <div v-for="result in searchResults" :key="result.show.id">
      <TvShowPreview :show="result.show" />
    </div>
  </div>
</template>

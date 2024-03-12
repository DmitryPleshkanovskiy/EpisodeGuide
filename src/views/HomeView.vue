<script setup lang="ts">
import { computed, ref } from 'vue'

import { useFetch } from '../composables/useFetch'
import { groupShowsByGenre } from '../utils/groupShowsByGenre'

import TvShowListHorizontal from '@/components/TvShowListHorizontal.vue'
import TvShowSearch from '@/components/TvShowSearch.vue'
import TvShowSearchResults from '@/components/TvShowSearchResults.vue'

import type { Show } from '../types/show'
import type { SearchResult } from '@/types/searchResult'
import ErrorMessage from '@/components/ErrorMessage.vue'

import { genresFromTvShows } from '../utils/genresFromTvShows'

const query = ref('')
const searchUrl = computed(() => `/search/shows?q=${query.value}`)

const { data: showsList, isLoading: showsLoading, error: showsError } = useFetch<Show[]>(`/shows`)
const {
  data: searchResults,
  isLoading: isSearchResultsLoading,
  error: searchError
} = useFetch<SearchResult[]>(searchUrl, { skip: computed(() => query.value == '') })

// Genres to show on the home page
// const genres = ['Drama', 'Comedy', 'Mystery', 'Action', 'Sports']
const genres = computed(() => genresFromTvShows(showsList.value))

const showsGroupedByGenre = computed(() => groupShowsByGenre(showsList.value, genres.value))

const showSearchResults = computed<boolean>(
  () => query.value !== '' && !isSearchResultsLoading.value
)

const showGroups = computed<boolean>(
  () => !query.value && !showsLoading.value && !showSearchResults.value
)

const handleSearch = (searchTerm: string) => {
  query.value = searchTerm
}

const handleSearchClear = () => {
  query.value = ''
}
</script>

<template>
  <main>
    <ErrorMessage class="m-5" :errors="[showsError, searchError]" />
    <TvShowSearch class="mt-5" @on-search="handleSearch" @on-clear="handleSearchClear" />
    <TvShowSearchResults v-if="showSearchResults" :search-results="searchResults || []" />
    <div v-show="showGroups">
      <TvShowListHorizontal
        v-for="group in showsGroupedByGenre"
        :key="group.title"
        :title="group.title"
        :shows="group.shows"
      />
    </div>
  </main>
</template>

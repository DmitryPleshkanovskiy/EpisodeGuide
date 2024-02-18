<script setup lang="ts">
import { useRoute } from 'vue-router'

import TvShowDetails from '@/components/TvShowDetails.vue'

import type { Show } from '../types/show'
import { useFetch } from '@/composables/useFetch'
import ErrorMessage from '@/components/ErrorMessage.vue'

const route = useRoute()
const { data: tvshow, isLoading, error } = useFetch<Show>(`/shows/${route.params.id}`)
</script>

<template>
  <ErrorMessage class="m-5" :errors="[error]" />
  <TvShowDetails v-if="tvshow && !isLoading" :tvshow="tvshow" />
  <!-- TODO: Replace with a loading sceleton: -->
  <div v-else-if="isLoading">
    <p>TV show is loading...</p>
  </div>
</template>

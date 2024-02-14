<script setup lang="ts">
import { useRoute } from 'vue-router'

import TvShowDetails from '@/components/TvShowDetails.vue'

import type { Show } from '../types/show'
import { useFetch } from '@/composables/useFetch'

const route = useRoute()
const { data: tvshow, isLoading, error } = useFetch<Show>(`/shows/${route.params.id}`)
</script>

<template>
  <!-- TODO: Replace with loader -->
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <!-- TODO: Replace with alert component -->
  <div v-if="error">
    <p>There was an error:</p>
    <pre>{{ error }}</pre>
  </div>
  <TvShowDetails v-if="tvshow" :tvshow="tvshow" />
</template>

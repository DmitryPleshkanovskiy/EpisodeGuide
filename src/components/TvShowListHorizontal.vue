<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { Show } from '../types/show'

import { sortShowsByRating } from '@/utils/sortShowsByRating'

import TvShowPreview from './TvShowPreview.vue'
import ItemsListHorizontal from './ItemsListHorizontal.vue'

const props = defineProps<{
  title: string
  shows: Show[]
  isLoading?: boolean
}>()

const { title, shows } = toRefs(props)

const sortedByRatingShows = computed(() => sortShowsByRating(shows.value))
</script>

<template>
  <ItemsListHorizontal :title="title" :items="sortedByRatingShows" :isLoading="isLoading">
    <template #item="{ item: show }">
      <TvShowPreview :tvshow="show" />
    </template>
  </ItemsListHorizontal>
</template>

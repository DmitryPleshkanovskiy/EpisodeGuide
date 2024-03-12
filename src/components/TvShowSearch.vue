<script setup lang="ts">
import { watch } from 'vue'
import { useDebouncedRef } from '@/composables/useDebounceRef'

import IconClose from './icons/IconClose.vue'

const emit = defineEmits<{
  (e: 'onSearch', newSearchTerm: string): void
  (e: 'onClear'): void
}>()

const [searchTerm, searchDirectState] = useDebouncedRef('', 500)

watch(searchTerm, (newSearchTerm) => {
  emit('onSearch', newSearchTerm)
})

const handleClearInput = () => {
  searchDirectState.value = ''
  emit('onClear')
}
</script>

<template>
  <form class="flex w-full justify-center px-5" @submit.prevent>
    <div class="relative flex">
      <input
        class="w-80 rounded-md border-2 border-black p-1"
        type="text"
        name="search"
        placeholder="Search for tv show..."
        v-model="searchTerm"
        aria-label="Search input"
      />
      <button
        v-show="searchTerm.length"
        class="color-black absolute right-0 h-9 w-9"
        @click="handleClearInput"
        aria-label="Clear search input"
        data-testid="clear-search-input"
      >
        <IconClose />
      </button>
    </div>
  </form>
</template>

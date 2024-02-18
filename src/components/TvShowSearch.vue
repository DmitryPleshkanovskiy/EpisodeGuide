<script setup lang="ts">
import { watch } from 'vue'
import { useDebouncedRef } from '@/composables/useDebounceRef'

import IconClose from './icons/IconClose.vue'

const emit = defineEmits(['onSearch', 'onClear'])
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
  <form class="px-5 flex w-full justify-center" @submit.prevent>
    <div class="flex relative">
      <input
        class="w-80 p-1 rounded-md border-2 border-black"
        type="text"
        placeholder="Search for tv show..."
        v-model="searchTerm"
        aria-label="Search input"
      />
      <button
        v-show="searchTerm.length"
        class="w-9 h-9 color-black absolute right-0"
        @click="handleClearInput"
        aria-label="Clear search input"
      >
        <IconClose />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { FetchError } from '@/types/fetchError'

const { errors } = defineProps<{
  errors: (FetchError | null)[]
}>()
</script>

<template>
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col gap-5"
    role="alert"
    v-if="errors.filter((error) => !!error).length > 0"
    data-testid="error-message"
  >
    <p class="font-bold">Error:</p>
    <ul v-for="(error, index) in errors" :key="index">
      <li v-if="error">
        <p>{{ error.title }}</p>
        <pre class="text-sm mt-2">{{ error.message }}</pre>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from '@/types/fetchError'

const { errors } = defineProps<{
  errors: (FetchError | null)[]
}>()
</script>

<template>
  <div
    class="relative flex flex-col gap-5 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
    role="alert"
    v-if="errors.filter((error) => !!error).length > 0"
    data-testid="error-message"
  >
    <p class="font-bold">Error:</p>
    <ul v-for="(error, index) in errors" :key="index">
      <li v-if="error">
        <p>{{ error.title }}</p>
        <pre class="mt-2 text-sm">{{ error.message }}</pre>
      </li>
    </ul>
  </div>
</template>

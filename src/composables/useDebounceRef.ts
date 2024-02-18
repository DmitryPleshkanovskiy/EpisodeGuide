import { debounce } from '@/utils/debounce'
import { customRef, ref } from 'vue'

export const useDebouncedRef = (initialValue: string, delay: number) => {
  const state = ref(initialValue)
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track()
      return state.value
    },
    set: debounce((value: string) => {
      state.value = value
      trigger()
    }, delay)
  }))
  return [debouncedRef, state] as const
}

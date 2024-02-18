import type { FetchError } from '@/types/fetchError'
import { ref, toValue, watchEffect, type MaybeRefOrGetter, type ComputedRef } from 'vue'

export function useFetch<T>(
  url: MaybeRefOrGetter<string> | ComputedRef<string>,
  options: { skip?: MaybeRefOrGetter<boolean> | ComputedRef<boolean> } = { skip: false }
) {
  const { skip } = options

  const data = ref<T>()
  const isLoading = ref<boolean>(false)
  const error = ref<FetchError | null>(null)

  const fetchData = () => {
    data.value = undefined
    error.value = null
    isLoading.value = true

    fetch(`${import.meta.env.VITE_APP_API_URL}${toValue(url)}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((json) => {
        data.value = json
        isLoading.value = false
      })
      .catch((err) => {
        error.value = { title: toValue(url), message: err }
        isLoading.value = false
      })
  }

  watchEffect(() => {
    if (!toValue(skip)) {
      fetchData()
    }
  })

  return { data, isLoading, error }
}

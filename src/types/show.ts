export type Show = {
  id: number
  name: string
  image: {
    medium: string
    original: string
  } | null
  rating: {
    average: number
  } | null
  language: string
  premiered: string
  status: string
  summary: string
  genres: string[]
}

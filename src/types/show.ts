export type Show = {
  id: number
  name: string
  image: {
    medium: string
    original: string
  }
  rating: {
    average: number
  } | null
  language: string
  premiered: string
  status: string
  summary: string
  genres: string[]
}

import type { Show } from '@/types/show'

export const genresFromTvShows = (shows: Show[] = []): string[] => {
  const genres = shows.reduce((acc, show) => {
    show.genres.forEach((genre) => {
      acc.add(genre)
    })
    return acc
  }, new Set<string>())

  return Array.from(genres)
}

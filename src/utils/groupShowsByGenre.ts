import type { Show } from '../types/show'

export const groupShowsByGenre = (showsList: Show[] = [], genres: string[]) =>
  showsList.reduce<{ title: string; shows: Show[] }[]>(
    (grouped, currShow) => {
      currShow.genres.forEach((genre: any) => {
        if (genres.map((g) => g.toLocaleLowerCase()).includes(genre.toLocaleLowerCase())) {
          const groupIndex = grouped.findIndex((group) => group.title === genre)
          if (groupIndex > -1) {
            grouped[groupIndex].shows.push(currShow)
          } else {
            grouped.push({ title: genre, shows: [currShow] })
          }
        }
      })
      return grouped
    },
    genres.map((genre) => ({ title: genre, shows: [] }))
  )

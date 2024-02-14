import type { Show } from '../types/show'

export const sortShowsByRating = (showsList: Show[]) => {
  return showsList
    ? showsList.sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
    : []
}

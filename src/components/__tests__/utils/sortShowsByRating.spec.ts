import { describe, it, expect } from 'vitest'
import { sortShowsByRating } from '@/utils/sortShowsByRating'
import type { Show } from '@/types/show'

describe('sortShowsByRating', () => {
  it('sorts shows by rating in descending order', () => {
    const showsList = [
      { id: 1, rating: { average: 5 } },
      { id: 2, rating: { average: 8 } },
      { id: 3, rating: { average: 7 } }
    ]

    const sortedShows = sortShowsByRating(showsList as Show[])

    expect(sortedShows).toEqual([
      { id: 2, rating: { average: 8 } },
      { id: 3, rating: { average: 7 } },
      { id: 1, rating: { average: 5 } }
    ])
  })

  it('handles shows with no rating', () => {
    const showsList = [
      { id: 1, rating: { average: null } },
      { id: 2, rating: { average: 8 } },
      { id: 3, rating: { average: 7 } }
    ]

    const sortedShows = sortShowsByRating(showsList as Show[])

    expect(sortedShows).toEqual([
      { id: 2, rating: { average: 8 } },
      { id: 3, rating: { average: 7 } },
      { id: 1, rating: { average: null } }
    ])
  })
})

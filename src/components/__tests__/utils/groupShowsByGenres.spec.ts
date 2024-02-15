import { describe, it, expect } from 'vitest'
import { groupShowsByGenre } from '@/utils/groupShowsByGenre'
import type { Show } from '@/types/show'

describe('groupShowsByGenre', () => {
  it('groups shows by genre', () => {
    const showsList = [
      { id: 1, genres: ['Drama', 'Fantasy'] },
      { id: 2, genres: ['Drama'] },
      { id: 3, genres: ['Sci-Fi'] }
    ]
    const genres = ['Drama', 'Fantasy', 'Sci-Fi']

    const groupedShows = groupShowsByGenre(showsList as Show[], genres)

    expect(groupedShows).toEqual([
      {
        title: 'Drama',
        shows: [
          { id: 1, genres: ['Drama', 'Fantasy'] },
          { id: 2, genres: ['Drama'] }
        ]
      },
      { title: 'Fantasy', shows: [{ id: 1, genres: ['Drama', 'Fantasy'] }] },
      { title: 'Sci-Fi', shows: [{ id: 3, genres: ['Sci-Fi'] }] }
    ])
  })

  it('returns an empty array when input is empty', () => {
    const groupedShows = groupShowsByGenre([], [])

    expect(groupedShows).toEqual([])
  })
})

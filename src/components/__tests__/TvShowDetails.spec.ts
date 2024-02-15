import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TvShowDetails from '../TvShowDetails.vue'
import type { Show } from '@/types/show'

const mockShow: Show = {
  id: 166,
  name: 'Battlestar Galactica',
  language: 'English',
  genres: ['Drama', 'Science-Fiction', 'War'],
  status: 'Ended',
  premiered: '2003-12-08',
  rating: { average: 8.8 },

  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2313.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/0/2313.jpg'
  },
  summary:
    "<p>The world ended with no warning, and all that was left… was hope.</p><p>A truce between the humans of the Twelve Colonies and the Cylons—intelligent robots designed by humankind—lasts for 40 tense and silent years. <b>Battlestar Galactica</b> picks up just as the Cylons commit mass genocide against humanity. Only the Battlestar Galactica (an old warship about to be decommissioned and turned into a museum) and those souls fortunate enough to be aboard other starships were able to survive the attack. In the aftermath, the Galactica's commanding officer, William Adama, finds himself responsible for safeguarding the last remnants of the human race—fewer than 50,000 desperate survivors. Meanwhile, the annihilation of the Colonial government results in the succession of the Secretary of Education, Laura Roslin, to the presidency. Driven by prophetic visions and political necessity, the Galactica travels through uncharted space in hopes of finding the mythical, lost 13th colony—Earth.</p>"
}

describe('TvShowDetails', () => {
  it('renders tvshow data', async () => {
    const wrapper = mount(TvShowDetails, {
      props: {
        tvshow: mockShow
      }
    })

    const tvshowName = wrapper.find('h3')
    const tvshowRating = wrapper.find('[data-test="tv-show-rating"]')
    const tvshowImage = wrapper.find('img')
    const tvshowGenres = wrapper.find('[data-test="tv-show-genres"]')
    const tvshowLanguage = wrapper.find('[data-test="tv-show-language"]')
    const tvshowPremiered = wrapper.find('[data-test="tv-show-premiered"]')
    const tvshowStatus = wrapper.find('[data-test="tv-show-status"]')
    const tvshowSummary = wrapper.find('[data-test="tv-show-summary"]')

    expect(tvshowName.text()).toEqual(mockShow.name)
    expect(tvshowRating.text()).toContain(mockShow.rating?.average)
    expect(tvshowImage.attributes('src')).toEqual(mockShow.image?.medium)
    expect(tvshowGenres.text()).toEqual(mockShow.genres.join(', '))
    expect(tvshowLanguage.text()).toContain(mockShow.language)
    expect(tvshowPremiered.text()).toContain(mockShow.premiered)
    expect(tvshowStatus.text()).toContain(mockShow.status)
    expect(tvshowSummary.text()).toContain(mockShow.summary?.replace(/<[^>]+>/g, ''))
  })

  it('show no image text, when image is not available', () => {
    const wrapper = mount(TvShowDetails, {
      props: {
        tvshow: {
          ...mockShow,
          image: null
        }
      }
    })

    const tvshowImage = wrapper.find('img')
    const noImageText = wrapper.find('[data-test="no-image-text"]')
    expect(tvshowImage.exists()).toBe(false)
    expect(noImageText.text()).toEqual('No image')
  })

  it('hide rating value, when rating is not available', () => {
    const wrapper = mount(TvShowDetails, {
      props: {
        tvshow: {
          ...mockShow,
          rating: null
        }
      }
    })

    const tvshowRating = wrapper.find('[data-test="tv-show-rating"]')
    expect(tvshowRating.exists()).toBe(false)
  })
})

// FILEPATH: /Users/dmitry/Work/Netherlands/ABN_AMRO/abn-assignment/EpisodeGuide/tests/unit/TvShowPreview.spec.ts
import { mount } from '@vue/test-utils'
import TvShowPreview from '@/components/TvShowPreview.vue'
import { beforeEach, describe, expect, it } from 'vitest'
import type { Show } from '@/types/show'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { routes } from '@/router'

let router: Router

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes
  })
})

describe('TvShowPreview', () => {
  const tvshow: Show = {
    id: 1,
    name: 'Test Show',
    image: {
      medium: 'test-image.jpg',
      original: 'test-image.jpg'
    },
    genres: ['test-genre'],
    rating: {
      average: 9
    },
    summary: 'Test summary',
    language: 'test-language',
    premiered: 'test-premiered',
    status: 'test-status'
  }

  it('renders show name when passed', () => {
    const wrapper = mount(TvShowPreview, {
      props: {
        tvshow
      },
      global: {
        plugins: [router]
      }
    })
    const title = wrapper.find('h3')
    expect(title.text()).toContain(tvshow.name)
  })

  it('renders show image when passed', () => {
    const wrapper = mount(TvShowPreview, {
      props: {
        tvshow
      },
      global: {
        plugins: [router]
      }
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(tvshow.image?.medium)
  })

  it('renders link with correct href prop', () => {
    const wrapper = mount(TvShowPreview, {
      props: {
        tvshow
      },
      global: {
        plugins: [router]
      }
    })
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe(`/show/${tvshow.id}`)
  })

  it('show no image text, when image is not available', () => {
    const wrapper = mount(TvShowPreview, {
      props: {
        tvshow: {
          ...tvshow,
          image: null
        }
      },
      global: {
        plugins: [router]
      }
    })
    const img = wrapper.find('img')
    const noImageText = wrapper.find('[data-testid="no-image-text"]')
    expect(img.exists()).toBe(false)
    expect(noImageText.text()).toBe('No image')
  })
})

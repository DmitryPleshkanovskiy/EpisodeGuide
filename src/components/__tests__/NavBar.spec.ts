import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'
import { routes } from '@/router'
import { createRouter, createWebHistory, type Router } from 'vue-router'

let router: Router

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes
  })
})

describe('NavBar', () => {
  it('renders properly', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    })
    await router.isReady()
    const title = wrapper.find('h1')
    expect(title.text().split(/\s+/).join(' ')).toContain('Episode Guide')
  })

  it('navigates to the home page', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    })
    await router.isReady()
    const homeLink = wrapper.find('a')
    await homeLink.trigger('click')
    expect(router.currentRoute.value.path).toBe('/')
  })

  it('should not contain "go back" link, when on /', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    })
    await router.isReady()
    const backToMainLink = wrapper.find('[data-test="back-to-main-link"]')
    expect(backToMainLink.exists()).toBe(false)
  })

  it('should contain "go back" link, when on /show/:id', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    })
    await router.isReady()

    await router.push('/show/1')

    const backToMainLink = wrapper.find('[data-test="back-to-main-link"]')
    expect(backToMainLink.exists()).toBe(true)
  })
})

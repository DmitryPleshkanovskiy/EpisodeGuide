import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'
import router from '@/router'

describe('MainNav', () => {
  it('renders properly', () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    })
    const title = wrapper.find('h1')
    expect(title.text().split(/\s+/).join(' ')).toContain('Episode Guide')
  })
})

import { mount } from '@vue/test-utils'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { describe, expect, it } from 'vitest'
import type { FetchError } from '@/types/fetchError'

describe('ErrorMessage.vue', () => {
  it('renders single error message when passed', () => {
    const errorMsg: FetchError = {
      title: 'Test Error Message',
      message: 'This is a test error message'
    }
    const wrapper = mount(ErrorMessage, {
      props: {
        errors: [errorMsg]
      }
    })
    expect(wrapper.text()).toContain('Error:')
    expect(wrapper.text()).toContain(errorMsg.title)
    expect(wrapper.text()).toContain(errorMsg.message)
  })

  it('renders multiple error messages when passed', () => {
    const errorMsg1: FetchError = {
      title: 'Test Error Message 1',
      message: 'This is a test error message 1'
    }
    const errorMsg2: FetchError = {
      title: 'Test Error Message 2',
      message: 'This is a test error message 2'
    }
    const wrapper = mount(ErrorMessage, {
      props: {
        errors: [errorMsg1, errorMsg2]
      }
    })
    expect(wrapper.text()).toContain('Error:')
    expect(wrapper.text()).toContain(errorMsg1.title)
    expect(wrapper.text()).toContain(errorMsg1.message)
    expect(wrapper.text()).toContain(errorMsg2.title)
    expect(wrapper.text()).toContain(errorMsg2.message)
  })

  it('does not render when errors are empty', () => {
    const wrapper = mount(ErrorMessage, { props: { errors: [] } })
    expect(wrapper.find("[data-testid='error-message']").exists()).toBe(false)
  })

  it('does not render when errors are null', () => {
    const wrapper = mount(ErrorMessage, { props: { errors: [null, null] } })
    expect(wrapper.find("[data-testid='error-message']").exists()).toBe(false)
  })
})

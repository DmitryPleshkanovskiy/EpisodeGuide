import { debounce } from '@/utils/debounce'
import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest'

describe('debounce', () => {
  let func: Mock
  let debouncedFunc: Function

  beforeEach(() => {
    func = vi.fn()
    debouncedFunc = debounce(func, 500)
    vi.useFakeTimers()
  })

  it('execute just once', () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc()
    }

    vi.runAllTimers()

    expect(func).toHaveBeenCalledTimes(1)
  })

  it('execute just once after cool down', () => {
    debouncedFunc()

    vi.runAllTimers()

    debouncedFunc()

    vi.runAllTimers()

    expect(func).toHaveBeenCalledTimes(2)
  })

  it('not execute if cool down period is not over', () => {
    debouncedFunc()

    vi.advanceTimersByTime(499)

    expect(func).not.toHaveBeenCalled()
  })

  it('execute if cool down is over', () => {
    debouncedFunc()

    vi.advanceTimersByTime(500)

    expect(func).toHaveBeenCalled()
  })
})

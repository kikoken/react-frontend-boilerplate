import { renderHook, act } from '@testing-library/react-hooks'

import usePasswordValidation from './usePasswordValidation'

describe('usePasswordValidation', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  test('should invalid password', () => {
    const { result } = renderHook(() => usePasswordValidation())

    act(() => {
      result.current.verifiedPassword('')
      jest.advanceTimersByTime(510)
    })

    expect(result.current.validPassword).toBeFalsy()
  })

  test('should valid password', () => {
    const { result } = renderHook(() => usePasswordValidation())

    act(() => {
      result.current.verifiedPassword('R1o2o3t4')
      jest.advanceTimersByTime(510)
    })

    expect(result.current.validPassword).toBeTruthy()
  })
})

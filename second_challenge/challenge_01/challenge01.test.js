import {describe, it, expect } from '@jest/globals'
import { oneAndFiveBills }  from './challenge01.js'

describe('Compute the number of five and one bills', () => {
  it('should return 8 fives and 3 ones when given 43', () => {
    const amount = 43

    const result = oneAndFiveBills(amount)

    expect(result.fives).toEqual(8)
    expect(result.ones).toEqual(3)
  })

  it('should return 13 fives and 2 ones when given 67', () => {
    const amount = 67

    const result = oneAndFiveBills(amount)

    expect(result.fives).toEqual(13)
    expect(result.ones).toEqual(2)
  })

  it('should return 0 fives and 3 ones when given 3', () => {
    const amount = 3

    const result = oneAndFiveBills(amount)

    expect(result.fives).toEqual(0)
    expect(result.ones).toEqual(3)
  })
})

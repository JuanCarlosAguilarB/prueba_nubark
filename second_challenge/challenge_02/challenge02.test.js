import {describe, it, expect } from '@jest/globals'
import { isPalindrome }  from './challenge02.js'

describe('Determine if a given word is a palindrome', () => {
  it('should return true when given the word kayak', () => {
    const word = 'kayak'

    const result = isPalindrome(word)

    expect(result).toEqual(true)
  })

  it('should return false when given the word house', () => {
    const word = 'house'

    const result = isPalindrome(word)

    expect(result).toEqual(false)
  })

  it('should return false when given the word house', () => {
    const word = 'madam'

    const result = isPalindrome(word)

    expect(result).toEqual(true)
  })
})

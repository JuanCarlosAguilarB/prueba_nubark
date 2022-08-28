import {describe, it, expect } from '@jest/globals'
import { extract }  from './challenge03.js'

describe('Determine if a given word is a palindrome', () => {
  const input = [
    { name: "Michael", age: 21, city: "Tokyo" },
    { name: "Steven", age: 28, city: "Moscow" },
    { name: "Peter", age: 30, city: "Bogota" },
    { name: "Robert", age: 26, city: "Paris" },
    { name: "Mary", age: 19, city: "Madrid" },
  ]

  it('should return a list of names when given the name key', () => {
    const key = 'name'

    const result = extract(input, key)

    expect(result).toEqual([ 'Michael', 'Steven', 'Peter', 'Robert', 'Mary' ])
  })

  it('should return a list of ages when given the age key', () => {
    const key = 'age'

    const result = extract(input, key)

    expect(result).toEqual([
      21, 28, 30, 26, 19
    ])
  })

  it('should return null if the key does not exist', () => {
    const key = 'country'

    const result = extract(input, key)

    expect(result).toEqual([
      null, null, null, null, null
    ])
  })

  it('should throw an error if the provided input is not an array', () => {
    const input = 'NOT_AN_ARRAY'
    const key = 'country'

    expect(() => extract(input, key)).toThrow(
      'Please provide an Array as input.')
  })
})

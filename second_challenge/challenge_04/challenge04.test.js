import {describe, it, expect } from '@jest/globals'
import { likes }  from './challenge04.js'

describe('Create and test a pagination helper', () => {
  it('should return the correct text given a people list', () => {
    expect(likes([])).toEqual(
      'no one likes this')
    expect(likes(['Peter'])).toEqual(
      'Peter likes this')
    expect(likes(['Jacob', 'Alex'])).toEqual(
      'Jacob and Alex like this')
    expect(likes(['Max', 'John', 'Mark'])).toEqual(
      'Max, John and Mark like this')
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
      'Alex, Jacob and 2 others like this')
  })
})

import {describe, it, expect } from '@jest/globals'
import { PaginationHelper }  from './challenge05.js'

describe('Create and test a pagination helper', () => {
  /* Please write your test suite here.
   * In this challenge you will test and implement a pagination helper class.
   * The PaginationHelper will take an array of values and an integer value
   * indicating the number of items allowed per each page. It MUST implement
   * the following methods: 'pageCount()', 'itemCount()',
   * 'pageItemCount(page)', and 'pageIndex(index)'
   *
   * An example of its usage is:
   *
   * const helper = new PaginationHelper(['a','b','c','d','e','f'], 4)
   *
   * helper.pageCount() // should == 2
   * helper.itemCount() // should == 6
   * helper.pageItemCount(0) // should == 4
   * helper.pageItemCount(1) // last page. should == 2
   * helper.pageItemCount(2) // should == -1 since the page is invalid
   *
   * helper.pageIndex(5) // should == 1 (zero based index)
   * helper.pageIndex(2) // should == 0
   * helper.pageIndex(20) // should == -1
   * helper.pageIndex(-10) // should == -1
   *
  */

  
 const  helper = new PaginationHelper(['a','b','c','d','e','f'], 4)
  it('should return number of pages', () => {
    expect(helper.pageCount()).toEqual(2)
  })

  it('should return number of items', () => {
    expect(helper.itemCount()).toEqual(6)
  })

  it('should return number of items of first page', () => {
    expect(helper.pageItemCount(0)).toEqual(4)
  })
  it('should return number of items of last page', () => {
    expect(helper.pageItemCount(1)).toEqual(2)
  })
  it('should return -1 when the number of page is invalid', () => {
    expect(helper.pageItemCount(2)).toEqual(-1)
  })
})

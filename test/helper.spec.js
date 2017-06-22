import {expect} from 'chai'

import {random, width, height, qsort} from '../src/helper'

import {randomTest} from './helper'


describe('helper', function () {

  it('random', function () {
    let i = 0;
    while (i < 1000) {
      i++
      let min = random(randomTest(100) + 100)
      let max = random(randomTest(100000) + 100000)
      if (min >= max) continue

      let num = random(max, min)
      expect(num).to.at.least(min)
      expect(num).to.at.most(max)
    }
  })

  it('width', function () {
    expect(typeof width).to.be.equal('number')
  })

  it('height', function () {
    expect(typeof height).to.be.equal('number')
  })

})
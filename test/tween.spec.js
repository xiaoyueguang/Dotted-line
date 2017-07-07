import {expect} from 'chai'

import tween, {addBezier} from '../src/tween'

describe('tween', function () {
  it('查看默认方法: ', function () {
    expect(tween.linear).to.be.a('function')
    expect(tween.ease).to.be.a('function')
  })

  it('linear ', function () {
    const random = Math.random()
    expect(tween.linear(random)).to.be.equal(random / 100)
  })

  it('ease ', function () {
    expect(tween.ease(50)).to.be.equal(0.5)
    expect(tween.ease(10) + tween.ease(90)).to.be.equal(1)
  })

  it('addBezier', function () {
    addBezier('test', [.42, 0, .58, 1])
    expect(tween.test(50)).to.be.equal(0.5)
    expect(tween.test(10) + tween.test(90)).to.be.equal(1)
  })
})
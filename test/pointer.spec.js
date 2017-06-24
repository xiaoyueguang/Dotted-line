import {expect} from 'chai'

import Pointer from '../src/pointer'

import {randomTest, sleep} from './helper'

describe('Pointer', function () {
  it('实例化: 静态属性检查', function () {
    let i = 0;
    while (i < 1000) {
      i++
      let width = randomTest(1000, 0)
      let height = randomTest(1000, 0)
      let r = randomTest(50) + 1
      let pointer = new Pointer(width, height, r)
      expect(pointer.width).to.equal(width)
      expect(pointer.height).to.equal(height)
      expect(pointer.r).to.not.be.below(1)
      expect(pointer.r).to.not.be.above(r)
    }
  })

  it('实例化: 生成点', function () {
    let i = 0;
    while (i < 1000) {
      i++
      let width = randomTest(1000, 1)
      let height = randomTest(1000, 1)
      let r = randomTest(50) + 1
      let pointer = new Pointer(width, height, r)

      pointer.targetInit()
      // 不低于0
      expect(pointer.targetX).to.at.least(0)
      // 不高于最大的宽
      expect(pointer.targetX).to.at.most(width)

      expect(pointer.targetY).to.at.least(0)
      expect(pointer.targetY).to.at.most(height)
    }
  })

  it('原型方法: 移动', function () {
    let i = 0;
    while (i < 1000) {
      i++
      let pointer = randomTest(1000)
      let targetPointer = randomTest(1000)

      const move = Pointer.prototype.move

      const moved = move(pointer, targetPointer)

      if (pointer > targetPointer) {
        expect(moved).to.at.least(targetPointer)
        expect(moved).to.at.most(pointer)
      } else if (targetPointer > pointer) {
        expect(moved).to.at.least(pointer)
        expect(moved).to.at.most(targetPointer)
      } else {
        expect(moved).to.be.equal(targetPointer)
        expect(moved).to.be.equal(pointer)
      }
    }

  })

  it('实例化: 运行', function () {

  })

})

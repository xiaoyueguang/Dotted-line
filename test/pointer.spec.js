import {expect} from 'chai'

import Pointer from '../src/pointer'

import {randomTest, sleep, getTime} from './helper'

describe('Pointer', function () {
  this.timeout(100000)

  it('实例化: 静态属性检查', function () {
    let i = 0;
    while (i < 100) {
      i++
      let width = randomTest(1000, 0)
      let height = randomTest(1000, 0)
      let r = randomTest(50) + 1
      let pointer = new Pointer(width, height, r)
      expect(pointer.width).to.equal(width)
      expect(pointer.height).to.equal(height)
      expect(pointer.r).to.not.be.below(1)
      expect(pointer.r).to.not.be.above(r)
      expect(pointer.color).to.be.equal('#f3f3f3')
    }
  })

  it('实例化: 生成点', function () {
    let i = 0;
    while (i < 100) {
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
  // 检测移动距离 以及 时间百分比
  it('实例化: 移动', function () {
    let start = getTime()
    let pointer = new Pointer(1000, 1000, 5, 0.1)
    let length = Math.abs(pointer.origin.x - pointer.targetX)

    var timer = setInterval(() => {
      let end = getTime()
      pointer.run()

      let distance = Math.floor(Math.abs(
        Math.abs(pointer.origin.x - pointer.x) / length
      ))
      expect(distance).to.at.most(Math.floor(pointer.getPercent()))
      if (pointer.x === pointer.targetX) {
        clearInterval(timer)
      }
    })

  })

  it('实例化: 时间测试', function (done) {
    let start = getTime()

    var pointer = new Pointer(1000, 1000, 5, 0.1)
    var timer = setInterval(() => {
      pointer.run()
      if (pointer.x === pointer.targetX) {
        let end = getTime()
        clearInterval(timer)

        setTimeout(() => {
          expect(end - start).to.at.most(2200)
          done()
        }, 200)
      }
    })
  })

  // it('实例化: 运行', function () {

  // })

})

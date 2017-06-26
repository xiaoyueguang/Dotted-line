import {random, getTime} from './helper.js'

import {expect} from 'chai'

import Canvas from '../src/stage'
import Pointer from '../src/pointer'

describe('stage', function () {
  this.timeout(3000)
  let app
  beforeEach(function () {
    document.body.innerHTML = '<canvas id="canvas" />'
    app = new Canvas({
      el: document.getElementById('canvas'),
      limit: 10,
      pointerWidth: 15,
      width: 500,
      height: 500,
      time: 2
    })
  })

  it('实例化 静态属性测试', function (done) {
    expect(app.el).to.be.equal(document.getElementById('canvas'))
    expect(app.pointers.length).to.equal(10)
    app.pointers.map(pointer => {
      expect(pointer instanceof Pointer).to.be.true
    })

    let start = getTime()
    // 表明 点都运动完毕
    setTimeout(() => {
      app.pointers.map(({x, targetX}) => {
        expect(x).to.be.equal(targetX)
      })
      done()
    }, 2100)
  })

  
})
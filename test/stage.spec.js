import {random} from './helper.js'

import {expect} from 'chai'

import Canvas from '../src/stage'
import Pointer from '../src/pointer'

describe('stage', function () {
  let app
  beforeEach(function () {
    document.body.innerHTML = '<canvas id="canvas" />'
    app = new Canvas({
      el: document.getElementById('canvas'),
      limit: 10,
      pointerWidth: 15,
      width: 500,
      height: 500
    })
  })

  it('实例化 静态属性测试', function () {
    expect(app.el).to.be.equal(document.getElementById('canvas'))
    expect(app.pointers.length).to.equal(10)
    app.pointers.map(pointer => {
      expect(pointer instanceof Pointer).to.be.true
      // TODO
    })
  })

  
})
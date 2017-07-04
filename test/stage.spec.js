import {random, getTime} from './helper.js'

import {expect} from 'chai'

import Canvas from '../src/app.js'
import Pointer from '../src/pointer'

describe('stage', function () {
  this.timeout(3000)
  let app
  beforeEach(function () {
    document.body.innerHTML = '<canvas id="canvas" />'
    app = new Canvas({
      el: document.getElementById('canvas'),
      limit: 10,
      radius: 15,
      width: 500,
      height: 500,
      time: 1,
      color: [
        '#EEEDF2',
        '#B3B8C4',
        '#DCEDF7',
        '#4FB6F5',
        '#B9E2FB',
        '#F0BCBC',
        '#FBDFE2',
        '#DBD7D1',
        '#D4C86D',
        '#FA6D5D'
      ]
    })
  })

  it('实例化 静态属性测试', function (done) {
    expect(app.el).to.be.equal(document.getElementById('canvas'))
    expect(app.pointers.length).to.equal(10)
    app.pointers.map(pointer => {
      // expect(pointer instanceof Pointer).to.be.true
      expect(pointer).to.be.instanceOf(Pointer)
    })

    let start = getTime()
    // 表明 点都运动完毕
    setTimeout(() => {
      app.pointers.map(({color, x, targetX}) => {
        expect(x).to.be.equal(targetX)
      })
      done()
    }, 1500)
  })

  it('设置点限制', function () {
    app.setLimit(40)
    expect(app.pointers.length).to.be.equal(40)
  })

  it('添加点', function () {
    const count = app.pointers.length
    app.addPointer()
    expect(count).to.be.equal(app.pointers.length - 1)
  })

  it('删除点', function () {
    const count = app.pointers.length
    app.delPointer()
    expect(count).to.be.equal(app.pointers.length + 1)
  })

  it('设置半径', function () {
    app.setRadius(100)
    app.pointers.map(({r}) => {
      expect(r).to.at.least(1)
      expect(r).to.at.most(100)
    })
  })

  it('设置颜色', function () {
    const colors = ['red', 'yellow']
    app.setColors(colors)

    app.pointers.map(({color}) => {
      expect(colors).to.include(color)
    })
  })
})
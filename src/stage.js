/**
 * 舞台
 */
import Pointer from './pointer.js'
import {width, height} from './helper'

class Canvas {
  constructor ({
    el,
    limit = 10,
    pointerWidth = 15,
    width = width,
    height = height,
  }) {
    // 防止创建多次
    this.isInited = false;
    // 限制点数量
    this.pointerLimit = limit;
    // 点的宽度
    this.pointerWidth = pointerWidth;
    // 点集合
    this.pointers = [];
    // 上下文
    this.ctx = null;
    // 元素
    this.el = null;

    this.init(el, width, height)

    this.render()
  }

  init ($el, width, height) {
    if (this.isInited) return

    this.isInited = true
    this.el = $el
    this.el.width = width;
    this.el.height = height;

    this.ctx = this.el.getContext('2d')

    // 画点
    for (let i = 0; i < this.pointerLimit; i++) {
      this.pointerInit()
    }

  }

  // 生成点
  pointerInit () {
    let pointer = new Pointer(width, height, this.pointerWidth)
    this.pointers.push(pointer)
    this.pointerRender(pointer)
  }

  // 画点
  pointerRender (pointer) {
    this.ctx.beginPath()
    this.ctx.arc(
      pointer.x,
      pointer.y,
      pointer.r,
      0,
      2 * Math.PI,
      true
    )
    this.ctx.fill()
  }

  // 点跑起来
  pointerRun () {
    this.pointers.forEach((pointer) => {
      pointer.run()
      this.pointerRender(pointer)
    })
  }

  // 画线
  lineRun () {
    let pointer = this.pointers
    let length = pointer.length
    let ctx = this.ctx
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (i !== j) {
          ctx.beginPath()
          ctx.moveTo(pointer[i].x, pointer[i].y)
          ctx.lineTo(pointer[j].x, pointer[j].y)
          ctx.stroke()
        }
      }
    }
  }

  // 画
  render () {
    this.ctx.clearRect(0, 0, width, height)
    this.ctx.fillStyle = '#f3f3f3'
    this.ctx.strokeStyle = '#f3f3f3'
    this.pointerRun()
    this.lineRun()

    requestAnimationFrame(this.render.bind(this))
  }
}

export default Canvas;
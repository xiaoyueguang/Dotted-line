/**
 * 舞台
 */
import Pointer from './pointer.js'
import {width, height} from './helper'

// 画布
const $canvas = document.getElementById('canvas')


$canvas.width = width;
$canvas.height = height;

const canvas = {
  isCreated: false,
  pointerLimit: 10,
  pointerWidth: 15,
  pointer: [],
  ctx: null,
  el: null,

  created () {
    if (this.isCreated) return

    this.isCreated = true
    this.el = $canvas;
    this.ctx = this.el.getContext('2d')

    // 画点
    for (let i = 0; i < this.pointerLimit; i++) {
      this.pointerInit()
    }
  },
  // 生成 点
  pointerInit () {
    let pointer = new Pointer(width, height, this.pointerWidth)
    this.pointer.push(pointer)
    this.pointerRender(pointer)
  },
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
  },
  // 点跑起来
  pointerRun () {
    this.pointer.forEach((pointer) => {
      pointer.run()
      this.pointerRender(pointer)
    })
  },
  // 画线
  lineRun () {
    let pointer = this.pointer
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
  },
  // 画
  render: function render () {
    this.created()
    this.ctx.clearRect(0, 0, width, height)
    this.ctx.fillStyle = '#f3f3f3'
    this.ctx.strokeStyle = '#f3f3f3'
    this.pointerRun()
    this.lineRun()

    requestAnimationFrame(render.bind(this))
  }
}

export default canvas;
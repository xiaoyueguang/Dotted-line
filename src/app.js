/**
 * 舞台
 */
import Pointer from './pointer.js'
import {width, height, random} from './helper.js'
import {addBezier} from './tween'

const DEFAULT_COLOR = '#f3f3f3'

class Canvas {
  constructor ({
    el,
    limit = 10,
    radius = 15,
    width = width,
    height = height,
    time = 5,
    color = [DEFAULT_COLOR],
    isSameRadius = false,
    bezier = 'linear'
  }) {
    // 防止创建多次
    this.isInited = false;
    // 限制点数量
    this.limit = limit;
    // 点的宽度
    this.radius = radius;
    // 点集合
    this.pointers = [];
    // 上下文
    this.ctx = null;
    // 元素
    this.el = null;
    // 时间
    this.time = time
    // 颜色
    this.color = color
    // 贝塞尔曲线
    this.bezier = bezier
    // 是否相同半径
    this.isSameRadius = isSameRadius

    this.init(el, width, height)

    this.render()
  }
  // 初始化
  init ($el, width, height) {
    // 防止初始化两次
    if (this.isInited) return
    this.isInited = true
    // 保存 长宽
    this.width = width;
    this.height = height;
    // 保存原本元素
    this.el = $el
    this.el.width = width;
    this.el.height = height;
    // 获取上下文
    this.ctx = this.el.getContext('2d')

    // 画点
    for (let i = 0; i < this.limit; i++) {
      this.pointerInit()
    }

  }

  // 生成点
  pointerInit () {
    const colorLength = this.color.length
    const radius = this.isSameRadius ? this.radius : random(this.radius, 1)
    let pointer = new Pointer(
      this.width,
      this.height,
      radius,
      this.time,
      this.color[random(colorLength) - 1],
      this.bezier
    )

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
    this.ctx.fillStyle = pointer.color
    this.ctx.fill()
  }
  /**
   * 设置点数限制
   * @param {number} limit
   */
  setLimit (limit) {
    if (limit < 0) limit = 0
    let _limit = this.pointers.length
    if (limit > _limit) {
      for(let i = 0; i < limit - _limit; i++) {
        this.pointerInit()
      }
    } else {
      for(let i = 0; i < _limit - limit; i++) {
        this.pointers.shift()
      }
    }
  }
  /**
   * 添加点
   */
  addPointer () {
    this.setLimit(this.pointers.length + 1)
  }
  /**
   * 删除点
   */
  delPointer () {
    this.setLimit(this.pointers.length - 1)
  }
  /**
   * 设置颜色
   * @param {array} color 颜色集合
   */
  setColors (colors = [DEFAULT_COLOR]) {
    this.color = colors
    const colorLength = colors.length
    this.pointers.forEach(pointer => {
      pointer.color = colors[random(colorLength) - 1]
    })
  }
  /**
   * 设置点的半径
   * @param {number} radius 半径
   */
  setRadius (radius) {
    this.radius = radius
    this.pointers.forEach(pointer => {
      pointer.r = this.isSameRadius ? this.radius : random(this.radius, 1)
    })
  }
  // 点跑起来
  pointerRun () {
    this.pointers.forEach((pointer) => {
      pointer.run()
      this.pointerRender(pointer)
    })
  }

  /**
   * 添加贝塞尔曲线
   * @param {string} name 贝塞尔曲线名称
   * @param {array} coefficient 贝塞尔曲线系数
   */
  addBezier (name, coefficient) {
    addBezier(name, coefficient)
  }

  // 画线
  lineRun () {
    let pointer = this.pointers
    let length = pointer.length
    let ctx = this.ctx
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (i !== j) {
          let pointer1 = pointer[i]
          let pointer2 = pointer[j]
          let gradient = ctx.createLinearGradient(pointer1.x, pointer1.y, pointer2.x, pointer2.y)
          gradient.addColorStop(0, pointer1.color)
          gradient.addColorStop(1, pointer2.color)

          ctx.beginPath()
          ctx.moveTo(pointer[i].x, pointer[i].y)
          ctx.lineTo(pointer[j].x, pointer[j].y)

          ctx.strokeStyle = gradient
          ctx.stroke()
        }
      }
    }
  }

  // 画
  render () {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = DEFAULT_COLOR
    this.ctx.strokeStyle = DEFAULT_COLOR
    this.pointerRun()
    this.lineRun()

    requestAnimationFrame(this.render.bind(this))
  }
}

export default Canvas
window.DottedLine = Canvas

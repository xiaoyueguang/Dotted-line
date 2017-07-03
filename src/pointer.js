import {random} from './helper.js'

// 点 对象
export default class Pointer {
  constructor (width, height, r, time = 5, color = '#f3f3f3') {
    this.width = width
    this.height = height
    let x = random(width)
    let y = random(height)
    this.x = x
    this.y = y
    this.origin = {x, y}

    this.color = color
    // 最小为 10
    this.r = random(r, 1)
    this.time = time * 1000
    this.targetInit()
    this.isStart = true
  }
  // 设置开始时间
  setStart () {
    this.startTime = new Date().getTime()
    this.endTime = this.startTime + this.time
  }

  // 生成目标点
  targetInit () {
    // 当已经开始时, 需要设置原先的点
    if (this.isStart) {
      this.origin = {
        x: this.targetX,
        y: this.targetY
      }
    }
    this.targetX = random(this.width)
    this.targetY = random(this.height)
    this.setStart()
  }
  // 获取当前进度百分比
  getPercent () {
    let now = new Date().getTime()
    let percent = Math.floor((now - this.startTime) / this.time * 10000) / 100
    return percent > 100 ? 100 : percent
  }

  move (pointer, targetPointer) {
    let tween = this.getPercent()
    return targetPointer > pointer ?
      pointer + Math.abs(targetPointer - pointer) * tween / 100 :
      pointer - Math.abs(targetPointer - pointer) * tween / 100
  }

  run () {
    this.x = this.move(this.origin.x, this.targetX)
    this.y = this.move(this.origin.y, this.targetY)
  }
}
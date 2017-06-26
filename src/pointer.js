import {random} from './helper.js'

var a;

// 点 对象
export default class Pointer {
  constructor (width, height, r, time = 5) {
    this.width = width
    this.height = height
    let x = random(width)
    let y = random(height)
    this.x = x
    this.y = y
    this.origin = {x, y}

    // 最小为 10
    this.r = random(r, 1)
    this.time = time * 1000
    this.targetInit()
  }
  // 设置开始时间
  setStart () {
    this.startTime = new Date().getTime()
    this.endTime = this.startTime + this.time
  }

  // 生成目标点
  targetInit () {
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
    let outDo = targetPointer > pointer
    // let tween = random(300, 400)
    // tween = 20
    let tween = this.getPercent()
    // console.log(this.getPercent())
    // if (!a) {
    //   a = this
    // }
    // if (a === this && tween < 101) {
    //   console.log(pointer, targetPointer, tween)
    // }
    return targetPointer > pointer ?
      pointer + Math.abs(targetPointer - pointer) * tween / 100 :
      pointer - Math.abs(targetPointer - pointer) * tween / 100
    // return outDo ?
    //   pointer + Math.abs(targetPointer - pointer) / tween :
    //   pointer - Math.abs(targetPointer - pointer) / tween
  }

  run () {
    // this.x = randomCalc(this.x, random())
    // this.y = randomCalc(this.y, random())
    this.x = this.move(this.origin.x, this.targetX)
    this.y = this.move(this.origin.y, this.targetY)
  }
}
import {random} from './helper.js'
// 点 对象
export default class Pointer {
  constructor (width, height, r) {
    this.width = width
    this.height = height
    this.x = random(width)
    this.y = random(height)
    // 最小为 10
    this.r = random(r, 1)

    this.targetInit()
  }

  // 生成目标点
  targetInit () {
    this.targetX = random(this.width)
    this.targetY = random(this.height)
  }

  move (pointer, targetPointer) {
    let outDo = targetPointer > pointer
    let tween = random(300, 400)
    // tween = 20
    return outDo ?
      pointer + Math.abs(targetPointer - pointer) / tween :
      pointer - Math.abs(targetPointer - pointer) / tween
  }

  run () {
    // this.x = randomCalc(this.x, random())
    // this.y = randomCalc(this.y, random())
    this.x = this.move(this.x, this.targetX)
    this.y = this.move(this.y, this.targetY)
  }
}
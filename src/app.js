import Canvas from './stage.js'
import {random} from './helper'
import tween from './tween.js'

for (let i = 0; i < 4; i++) {
  window[`canvas${i}`] = new Canvas({
    el: document.getElementById(`canvas${i}`),
    width: 400,
    height: 400,
    limit: 15
  })
}

setInterval(() => {
  let canvas = window[`canvas${random(3)}`]
  random(2) > 1 ? canvas.addPointer() : canvas.delPointer()
}, 1000)

// window.canvas = new Canvas({
//   el: document.getElementById('canvas0'),
//   width: 400,
//   height: 400,
//   limit: 1
// })
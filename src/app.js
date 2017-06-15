import Canvas from './stage.js'
import {random} from './helper'

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
}, 100)
import Canvas from './stage.js'
import {width, height} from './helper'

// 画布
const $canvas = document.getElementById('canvas')

const canvas = new Canvas({
  el: $canvas,
  limit: 33
})


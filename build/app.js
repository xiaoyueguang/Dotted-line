import DottedLine from '../src/app.js'

var canvas = document.createElement('canvas')
DottedLine.prototype.addBezier('test', [1, 1, 1, 1])

const stage = new DottedLine({
  el: canvas,
  width: 800,
  height: 800,
  limit: 15,
  radius: 15,
  time: 4,
  color: ['#f3f3f3'],
  isSameRadius: false
})

stage.addPointer()
stage.delPointer()

stage.setColors(['#f3f3f3'])

stage.setRadius(15)
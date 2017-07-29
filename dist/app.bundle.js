/**
 * Dotted-line
 * Author: linjilei
 * Released under this MIT License.
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var BezierEasing = _interopDefault(require('bezier-easing'));

/**
 * 生成一个随机数
 * @param {number} max 随机数上限
 * @param {number} min 随机数下限
 */
function random (max = 2, min = 1) {
  return Math.round(Math.random() * (max - min)) + (min)
}

// 获取屏幕宽高
let {width: bodyWidth, height: bodyHeight} = getComputedStyle(document.body);

const formula = {
  linear: BezierEasing(0, 0, 1, 1),
  ease: BezierEasing(.42, 0, .58, 1)
};

const tween = {};

for (let key in formula) {
  tween[key] = percent => formula[key](percent / 100);
}

const addBezier = (name, coefficient) => {
  if (formula[name]) throw new Error('addBezier error. Duplicate Key')
  formula[name] = BezierEasing(...coefficient);
  tween[name] = percent => formula[name](percent / 100);
};

// 点 对象
class Pointer {
  constructor (width$$1, height$$1, r, time = 5, color = '#f3f3f3', bezier = 'linear') {
    this.width = width$$1;
    this.height = height$$1;
    let x = random(width$$1);
    let y = random(height$$1);
    this.x = x;
    this.y = y;
    this.origin = {x, y};
    this.bezier = bezier;
    this.color = color;
    // 最小为 10
    this.r = r;
    this.time = time * 1000;
    this.targetInit();
    this.isStart = true;
  }
  // 设置开始时间
  setStart () {
    this.startTime = new Date().getTime();
    this.endTime = this.startTime + this.time;
  }

  // 生成目标点
  targetInit () {
    // 当已经开始时, 需要设置原先的点
    if (this.isStart) {
      this.origin = {
        x: this.targetX,
        y: this.targetY
      };
    }
    this.targetX = random(this.width);
    this.targetY = random(this.height);
    this.setStart();
  }
  // 获取当前进度百分比
  getPercent () {
    let now = new Date().getTime();
    let percent = Math.floor((now - this.startTime) / this.time * 10000) / 100;
    return percent > 100 ? 100 : percent
  }

  move (pointer, targetPointer) {
    let percent = this.getPercent();

    return targetPointer > pointer ?
      pointer + Math.abs(targetPointer - pointer) * tween[this.bezier](percent) :
      pointer - Math.abs(targetPointer - pointer) * tween[this.bezier](percent)
  }

  run () {
    this.x = this.move(this.origin.x, this.targetX);
    this.y = this.move(this.origin.y, this.targetY);
  }
}

/**
 * 舞台
 */
const DEFAULT_COLOR = '#f3f3f3';

class Canvas {
  constructor ({
    el,
    limit = 10,
    radius = 15,
    width: width$$1 = width$$1,
    height: height$$1 = height$$1,
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
    this.time = time;
    // 颜色
    this.color = color;
    // 贝塞尔曲线
    this.bezier = bezier;
    // 是否相同半径
    this.isSameRadius = isSameRadius;

    this.init(el, width$$1, height$$1);

    this.render();
  }
  // 初始化
  init ($el, width$$1, height$$1) {
    // 防止初始化两次
    if (this.isInited) return
    this.isInited = true;
    // 保存 长宽
    this.width = width$$1;
    this.height = height$$1;
    // 保存原本元素
    this.el = $el;
    this.el.width = width$$1;
    this.el.height = height$$1;
    // 获取上下文
    this.ctx = this.el.getContext('2d');

    // 画点
    for (let i = 0; i < this.limit; i++) {
      this.pointerInit();
    }

  }

  // 生成点
  pointerInit () {
    const colorLength = this.color.length;
    const radius = this.isSameRadius ? this.radius : random(this.radius, 1);
    let pointer = new Pointer(
      this.width,
      this.height,
      radius,
      this.time,
      this.color[random(colorLength) - 1],
      this.bezier
    );

    this.pointers.push(pointer);
    this.pointerRender(pointer);
  }

  // 画点
  pointerRender (pointer) {
    this.ctx.beginPath();
    this.ctx.arc(
      pointer.x,
      pointer.y,
      pointer.r,
      0,
      2 * Math.PI,
      true
    );
    this.ctx.fillStyle = pointer.color;
    this.ctx.fill();
  }
  /**
   * 设置点数限制
   * @param {number} limit
   */
  setLimit (limit) {
    if (limit < 0) limit = 0;
    let _limit = this.pointers.length;
    if (limit > _limit) {
      for(let i = 0; i < limit - _limit; i++) {
        this.pointerInit();
      }
    } else {
      for(let i = 0; i < _limit - limit; i++) {
        this.pointers.shift();
      }
    }
  }
  /**
   * 添加点
   */
  addPointer () {
    this.setLimit(this.pointers.length + 1);
  }
  /**
   * 删除点
   */
  delPointer () {
    this.setLimit(this.pointers.length - 1);
  }
  /**
   * 设置颜色
   * @param {array} color 颜色集合
   */
  setColors (colors = [DEFAULT_COLOR]) {
    this.color = colors;
    const colorLength = colors.length;
    this.pointers.forEach(pointer => {
      pointer.color = colors[random(colorLength) - 1];
    });
  }
  /**
   * 设置点的半径
   * @param {number} radius 半径
   */
  setRadius (radius) {
    this.radius = radius;
    this.pointers.forEach(pointer => {
      pointer.r = this.isSameRadius ? this.radius : random(this.radius, 1);
    });
  }
  // 点跑起来
  pointerRun () {
    this.pointers.forEach((pointer) => {
      pointer.run();
      this.pointerRender(pointer);
    });
  }

  /**
   * 添加贝塞尔曲线
   * @param {string} name 贝塞尔曲线名称
   * @param {array} coefficient 贝塞尔曲线系数
   */
  addBezier (name, coefficient) {
    addBezier(name, coefficient);
  }

  // 画线
  lineRun () {
    let pointer = this.pointers;
    let length = pointer.length;
    let ctx = this.ctx;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (i !== j) {
          let pointer1 = pointer[i];
          let pointer2 = pointer[j];
          let gradient = ctx.createLinearGradient(pointer1.x, pointer1.y, pointer2.x, pointer2.y);
          gradient.addColorStop(0, pointer1.color);
          gradient.addColorStop(1, pointer2.color);

          ctx.beginPath();
          ctx.moveTo(pointer[i].x, pointer[i].y);
          ctx.lineTo(pointer[j].x, pointer[j].y);

          ctx.strokeStyle = gradient;
          ctx.stroke();
        }
      }
    }
  }

  // 画
  render () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = DEFAULT_COLOR;
    this.ctx.strokeStyle = DEFAULT_COLOR;
    this.pointerRun();
    this.lineRun();

    requestAnimationFrame(this.render.bind(this));
  }
}

window.DottedLine = Canvas;

module.exports = Canvas;

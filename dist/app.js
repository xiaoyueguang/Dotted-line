/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = random;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return height; });
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

let width = parseInt(bodyWidth, 10)
let height = parseInt(bodyHeight, 10)


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(0);
/**
 * 舞台
 */



class Canvas {
  constructor ({
    el,
    limit = 10,
    pointerWidth = 15,
    width = __WEBPACK_IMPORTED_MODULE_1__helper__["a" /* width */],
    height = __WEBPACK_IMPORTED_MODULE_1__helper__["b" /* height */],
    time = 5,
    color = ['#f3f3f3']
  }) {
    // 防止创建多次
    this.isInited = false;
    // 限制点数量
    this.pointerLimit = limit;
    // 点的宽度
    this.pointerWidth = pointerWidth;
    // 点集合
    this.pointers = [];
    // 上下文
    this.ctx = null;
    // 元素
    this.el = null;
    // 时间
    this.time = time
    this.color = color

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
    for (let i = 0; i < this.pointerLimit; i++) {
      this.pointerInit()
    }

  }

  // 生成点
  pointerInit () {
    let colorLength = this.color.length
    let pointer = new __WEBPACK_IMPORTED_MODULE_0__pointer_js__["a" /* default */](
      this.width,
      this.height,
      this.pointerWidth,
      this.time,
      this.color[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper__["c" /* random */])(colorLength)]
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


  // 点跑起来
  pointerRun () {
    this.pointers.forEach((pointer) => {
      pointer.run()
      this.pointerRender(pointer)
    })
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
    this.ctx.fillStyle = '#f3f3f3'
    this.ctx.strokeStyle = '#f3f3f3'
    this.pointerRun()
    this.lineRun()

    requestAnimationFrame(this.render.bind(this))
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Canvas);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 补间动画
 * 返回的方法.
 * 初始化 传入 一个 起点和终点.
 * 根据 贝塞尔曲线. 返回一个 方法,
 * 该方法接受一个 0 - 100 的数字
 * 返回在某个点时 应该所在的数字.
 * 
 * 具体实现: 待调整
 * linear 比例大概是 每次 都是为1
 * ease 为
 */

/**
 * linear
 * @param {number} start 起点
 * @param {number} end 终点
 * @param {number} percent 百分比数字 0-100
 * @return {number} 返回某个百分比下的位置
 */
const linear = (...rest) => calc(1, ...rest)

/**
 * ease
 * TODO: 错误
 * @param {number} start 起点
 * @param {number} end 终点
 * @param {number} percent 百分比数字 0-100
 * @return {number} 返回某个百分比下的位置
 * (x-50)(x-50) = y + 2400
 */
const ease = (...rest) => {
  const [start, end, percent] = rest
  return calc(Math.sqrt(percent + 2400) + 50, ...rest)
}
/**
 * 计算
 * @param {number} bezier 贝塞尔系数
 * @param {number} start 起点
 * @param {number} end 终点
 * @param {number} percent 百分比数字 0-100
 * @return {number} 返回某个百分比下的位置
 */
const calc = (bezier, start, end, percent) => {
  let distance = Math.abs(start - end) * percent / 100 * bezier
  return start > end ?
    start - distance : start + distance
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  ease, linear
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stage_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween_js__ = __webpack_require__(2);




for (let i = 0; i < 1; i++) {
  window[`canvas${i}`] = new __WEBPACK_IMPORTED_MODULE_0__stage_js__["a" /* default */]({
    el: document.getElementById(`canvas${i}`),
    width: 400,
    height: 400,
    limit: 15,
    time: 60
  })
}

setInterval(() => {
  // let canvas = window[`canvas${random(1)}`]
  // let canvas = window.canvas0
  // random(2) > 1 ? canvas.addPointer() : canvas.delPointer()
}, 1000)

setInterval(() => {
  let canvas = window.canvas0
  canvas.pointers.forEach(pointer => {
    pointer.targetInit()
  })
}, 60000)

// window.canvas = new Canvas({
//   el: document.getElementById('canvas0'),
//   width: 400,
//   height: 400,
//   limit: 1
// })

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_js__ = __webpack_require__(0);


// 点 对象
class Pointer {
  constructor (width, height, r, time = 5, color = '#f3f3f3') {
    this.width = width
    this.height = height
    let x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_js__["c" /* random */])(width)
    let y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_js__["c" /* random */])(height)
    this.x = x
    this.y = y
    this.origin = {x, y}

    this.color = color
    // 最小为 10
    this.r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_js__["c" /* random */])(r, 1)
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
    this.targetX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_js__["c" /* random */])(this.width)
    this.targetY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_js__["c" /* random */])(this.height)
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Pointer;


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
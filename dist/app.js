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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointer_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(2);
/**
 * 舞台
 */



// 画布
const $canvas = document.getElementById('canvas')


$canvas.width = __WEBPACK_IMPORTED_MODULE_1__helper__["a" /* width */];
$canvas.height = __WEBPACK_IMPORTED_MODULE_1__helper__["b" /* height */];

const canvas = {
  isCreated: false,
  pointerLimit: 10,
  pointerWidth: 15,
  pointer: [],
  ctx: null,
  el: null,

  created () {
    if (this.isCreated) return

    this.isCreated = true
    this.el = $canvas;
    this.ctx = this.el.getContext('2d')

    // 画点
    for (let i = 0; i < this.pointerLimit; i++) {
      this.pointerInit()
    }
  },
  // 生成 点
  pointerInit () {
    let pointer = new __WEBPACK_IMPORTED_MODULE_0__pointer_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__helper__["a" /* width */], __WEBPACK_IMPORTED_MODULE_1__helper__["b" /* height */], this.pointerWidth)
    this.pointer.push(pointer)
    this.pointerRender(pointer)
  },
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
    this.ctx.fill()
  },
  // 点跑起来
  pointerRun () {
    this.pointer.forEach((pointer) => {
      pointer.run()
      this.pointerRender(pointer)
    })
  },
  // 画线
  lineRun () {
    let pointer = this.pointer
    let length = pointer.length
    let ctx = this.ctx
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (i !== j) {
          ctx.beginPath()
          ctx.moveTo(pointer[i].x, pointer[i].y)
          ctx.lineTo(pointer[j].x, pointer[j].y)
          ctx.stroke()
        }
      }
    }
  },
  // 画
  render: function render () {
    this.created()
    this.ctx.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_1__helper__["a" /* width */], __WEBPACK_IMPORTED_MODULE_1__helper__["b" /* height */])
    this.ctx.fillStyle = '#f3f3f3'
    this.ctx.strokeStyle = '#f3f3f3'
    this.pointerRun()
    this.lineRun()

    requestAnimationFrame(render.bind(this))
  }
}

/* harmony default export */ __webpack_exports__["a"] = (canvas);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stage_js__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_0__stage_js__["a" /* default */].render();

/***/ }),
/* 2 */
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
  return Math.floor(Math.random() * max) + (min)
}

// 获取屏幕宽高
let {width: bodyWidth, height: bodyHeight} = getComputedStyle(document.body);

let width = parseInt(bodyWidth, 10)
let height = parseInt(bodyHeight, 10)


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(2);

// 点 对象
class Pointer {
  constructor (width, height, r) {
    this.x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* random */])(width)
    this.y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* random */])(height)
    // 最小为 10
    this.r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* random */])(r, 1)

    this.targetInit()
  }

  // 生成目标点
  targetInit () {
    this.targetX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* random */])(__WEBPACK_IMPORTED_MODULE_0__helper__["a" /* width */])
    this.targetY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* random */])(__WEBPACK_IMPORTED_MODULE_0__helper__["b" /* height */])
  }

  move (pointer, targetPointer) {
    let outDo = targetPointer > pointer
    let tween = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* random */])(300, 400)
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Pointer;


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
/**
 * 生成一个随机数
 * @param {number} max 随机数上限
 * @param {number} min 随机数下限
 */
function random() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return Math.round(Math.random() * (max - min)) + min;
}

// 获取屏幕宽高

var _getComputedStyle = getComputedStyle(document.body),
    bodyWidth = _getComputedStyle.width,
    bodyHeight = _getComputedStyle.height;

var width = exports.width = parseInt(bodyWidth, 10);
var height = exports.height = parseInt(bodyHeight, 10);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 点 对象
var Pointer = function () {
  function Pointer(width, height, r) {
    var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#f3f3f3';

    _classCallCheck(this, Pointer);

    this.width = width;
    this.height = height;
    var x = (0, _helper.random)(width);
    var y = (0, _helper.random)(height);
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };

    this.color = color;
    // 最小为 10
    this.r = r;
    this.time = time * 1000;
    this.targetInit();
    this.isStart = true;
  }
  // 设置开始时间


  _createClass(Pointer, [{
    key: 'setStart',
    value: function setStart() {
      this.startTime = new Date().getTime();
      this.endTime = this.startTime + this.time;
    }

    // 生成目标点

  }, {
    key: 'targetInit',
    value: function targetInit() {
      // 当已经开始时, 需要设置原先的点
      if (this.isStart) {
        this.origin = {
          x: this.targetX,
          y: this.targetY
        };
      }
      this.targetX = (0, _helper.random)(this.width);
      this.targetY = (0, _helper.random)(this.height);
      this.setStart();
    }
    // 获取当前进度百分比

  }, {
    key: 'getPercent',
    value: function getPercent() {
      var now = new Date().getTime();
      var percent = Math.floor((now - this.startTime) / this.time * 10000) / 100;
      return percent > 100 ? 100 : percent;
    }
  }, {
    key: 'move',
    value: function move(pointer, targetPointer) {
      var tween = this.getPercent();
      return targetPointer > pointer ? pointer + Math.abs(targetPointer - pointer) * tween / 100 : pointer - Math.abs(targetPointer - pointer) * tween / 100;
    }
  }, {
    key: 'run',
    value: function run() {
      this.x = this.move(this.origin.x, this.targetX);
      this.y = this.move(this.origin.y, this.targetY);
    }
  }]);

  return Pointer;
}();

exports.default = Pointer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 舞台
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _pointer = __webpack_require__(1);

var _pointer2 = _interopRequireDefault(_pointer);

var _helper = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_COLOR = '#f3f3f3';

var Canvas = function () {
  function Canvas(_ref) {
    var el = _ref.el,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 10 : _ref$limit,
        _ref$radius = _ref.radius,
        radius = _ref$radius === undefined ? 15 : _ref$radius,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? width : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? height : _ref$height,
        _ref$time = _ref.time,
        time = _ref$time === undefined ? 5 : _ref$time,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? [DEFAULT_COLOR] : _ref$color,
        _ref$isSameRadius = _ref.isSameRadius,
        isSameRadius = _ref$isSameRadius === undefined ? false : _ref$isSameRadius;

    _classCallCheck(this, Canvas);

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
    this.color = color;
    // 是否相同半径
    this.isSameRadius = isSameRadius;

    this.init(el, width, height);

    this.render();
  }
  // 初始化


  _createClass(Canvas, [{
    key: 'init',
    value: function init($el, width, height) {
      // 防止初始化两次
      if (this.isInited) return;
      this.isInited = true;
      // 保存 长宽
      this.width = width;
      this.height = height;
      // 保存原本元素
      this.el = $el;
      this.el.width = width;
      this.el.height = height;
      // 获取上下文
      this.ctx = this.el.getContext('2d');

      // 画点
      for (var i = 0; i < this.limit; i++) {
        this.pointerInit();
      }
    }

    // 生成点

  }, {
    key: 'pointerInit',
    value: function pointerInit() {
      var colorLength = this.color.length;
      var radius = this.isSameRadius ? this.radius : (0, _helper.random)(this.radius, 1);
      var pointer = new _pointer2.default(this.width, this.height, radius, this.time, this.color[(0, _helper.random)(colorLength) - 1]);

      this.pointers.push(pointer);
      this.pointerRender(pointer);
    }

    // 画点

  }, {
    key: 'pointerRender',
    value: function pointerRender(pointer) {
      this.ctx.beginPath();
      this.ctx.arc(pointer.x, pointer.y, pointer.r, 0, 2 * Math.PI, true);
      this.ctx.fillStyle = pointer.color;
      this.ctx.fill();
    }
    /**
     * 设置点数限制
     * @param {number} limit
     */

  }, {
    key: 'setLimit',
    value: function setLimit(limit) {
      if (limit < 0) limit = 0;
      var _limit = this.pointers.length;
      if (limit > _limit) {
        for (var i = 0; i < limit - _limit; i++) {
          this.pointerInit();
        }
      } else {
        for (var _i = 0; _i < _limit - limit; _i++) {
          this.pointers.shift();
        }
      }
    }
    /**
     * 添加点
     */

  }, {
    key: 'addPointer',
    value: function addPointer() {
      this.setLimit(this.pointers.length + 1);
    }
    /**
     * 删除点
     */

  }, {
    key: 'delPointer',
    value: function delPointer() {
      this.setLimit(this.pointers.length - 1);
    }
    /**
     * 设置颜色
     * @param {array} color 颜色集合
     */

  }, {
    key: 'setColors',
    value: function setColors() {
      var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [DEFAULT_COLOR];

      this.color = colors;
      var colorLength = colors.length;
      this.pointers.forEach(function (pointer) {
        pointer.color = colors[(0, _helper.random)(colorLength) - 1];
      });
    }
    /**
     * 设置点的半径
     * @param {number} radius 半径
     */

  }, {
    key: 'setRadius',
    value: function setRadius(radius) {
      var _this = this;

      this.radius = radius;
      this.pointers.forEach(function (pointer) {
        pointer.r = _this.isSameRadius ? _this.radius : (0, _helper.random)(_this.radius, 1);
      });
    }
    // 点跑起来

  }, {
    key: 'pointerRun',
    value: function pointerRun() {
      var _this2 = this;

      this.pointers.forEach(function (pointer) {
        pointer.run();
        _this2.pointerRender(pointer);
      });
    }

    // 画线

  }, {
    key: 'lineRun',
    value: function lineRun() {
      var pointer = this.pointers;
      var length = pointer.length;
      var ctx = this.ctx;
      for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
          if (i !== j) {
            var pointer1 = pointer[i];
            var pointer2 = pointer[j];
            var gradient = ctx.createLinearGradient(pointer1.x, pointer1.y, pointer2.x, pointer2.y);
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

  }, {
    key: 'render',
    value: function render() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = DEFAULT_COLOR;
      this.ctx.strokeStyle = DEFAULT_COLOR;
      this.pointerRun();
      this.lineRun();

      requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQ1MGM3MGNhM2QwYzM1YzNmOGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbInJhbmRvbSIsIm1heCIsIm1pbiIsIk1hdGgiLCJyb3VuZCIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJib2R5V2lkdGgiLCJ3aWR0aCIsImJvZHlIZWlnaHQiLCJoZWlnaHQiLCJwYXJzZUludCIsIlBvaW50ZXIiLCJyIiwidGltZSIsImNvbG9yIiwieCIsInkiLCJvcmlnaW4iLCJ0YXJnZXRJbml0IiwiaXNTdGFydCIsInN0YXJ0VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZW5kVGltZSIsInRhcmdldFgiLCJ0YXJnZXRZIiwic2V0U3RhcnQiLCJub3ciLCJwZXJjZW50IiwiZmxvb3IiLCJwb2ludGVyIiwidGFyZ2V0UG9pbnRlciIsInR3ZWVuIiwiZ2V0UGVyY2VudCIsImFicyIsIm1vdmUiLCJERUZBVUxUX0NPTE9SIiwiQ2FudmFzIiwiZWwiLCJsaW1pdCIsInJhZGl1cyIsImlzU2FtZVJhZGl1cyIsImlzSW5pdGVkIiwicG9pbnRlcnMiLCJjdHgiLCJpbml0IiwicmVuZGVyIiwiJGVsIiwiZ2V0Q29udGV4dCIsImkiLCJwb2ludGVySW5pdCIsImNvbG9yTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsInBvaW50ZXJSZW5kZXIiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJfbGltaXQiLCJzaGlmdCIsInNldExpbWl0IiwiY29sb3JzIiwiZm9yRWFjaCIsInJ1biIsImoiLCJwb2ludGVyMSIsInBvaW50ZXIyIiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2xlYXJSZWN0IiwicG9pbnRlclJ1biIsImxpbmVSdW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7UUMzRGdCQSxNLEdBQUFBLE07QUFMaEI7Ozs7O0FBS08sU0FBU0EsTUFBVCxHQUFtQztBQUFBLE1BQWxCQyxHQUFrQix1RUFBWixDQUFZO0FBQUEsTUFBVEMsR0FBUyx1RUFBSCxDQUFHOztBQUN4QyxTQUFPQyxLQUFLQyxLQUFMLENBQVdELEtBQUtILE1BQUwsTUFBaUJDLE1BQU1DLEdBQXZCLENBQVgsSUFBMkNBLEdBQWxEO0FBQ0Q7O0FBRUQ7O3dCQUM2Q0csaUJBQWlCQyxTQUFTQyxJQUExQixDO0lBQWpDQyxTLHFCQUFQQyxLO0lBQTBCQyxVLHFCQUFSQyxNOztBQUVoQixJQUFJRix3QkFBUUcsU0FBU0osU0FBVCxFQUFvQixFQUFwQixDQUFaO0FBQ0EsSUFBSUcsMEJBQVNDLFNBQVNGLFVBQVQsRUFBcUIsRUFBckIsQ0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7QUNiUDs7OztBQUVBO0lBQ3FCRyxPO0FBQ25CLG1CQUFhSixLQUFiLEVBQW9CRSxNQUFwQixFQUE0QkcsQ0FBNUIsRUFBNEQ7QUFBQSxRQUE3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S0MsT0FBTDs7QUFFQUMsNEJBQXNCLEtBQUtqQyxNQUFMLENBQVlrQyxJQUFaLENBQWlCLElBQWpCLENBQXRCO0FBQ0Q7Ozs7OztrQkFHWTNDLE0iLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZDUwYzcwY2EzZDBjMzVjM2Y4YSIsIi8qKlxuICog55Sf5oiQ5LiA5Liq6ZqP5py65pWwXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IOmaj+acuuaVsOS4iumZkFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiDpmo/mnLrmlbDkuIvpmZBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbSAobWF4ID0gMiwgbWluID0gMSkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgKG1pbilcbn1cblxuLy8g6I635Y+W5bGP5bmV5a696auYXG5sZXQge3dpZHRoOiBib2R5V2lkdGgsIGhlaWdodDogYm9keUhlaWdodH0gPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuXG5leHBvcnQgbGV0IHdpZHRoID0gcGFyc2VJbnQoYm9keVdpZHRoLCAxMClcbmV4cG9ydCBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQoYm9keUhlaWdodCwgMTApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVyLmpzIiwiaW1wb3J0IHtyYW5kb219IGZyb20gJy4vaGVscGVyLmpzJ1xuXG4vLyDngrkg5a+56LGhXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludGVyIHtcbiAgY29uc3RydWN0b3IgKHdpZHRoLCBoZWlnaHQsIHIsIHRpbWUgPSA1LCBjb2xvciA9ICcjZjNmM2YzJykge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgbGV0IHggPSByYW5kb20od2lkdGgpXG4gICAgbGV0IHkgPSByYW5kb20oaGVpZ2h0KVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5vcmlnaW4gPSB7eCwgeX1cblxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIC8vIOacgOWwj+S4uiAxMFxuICAgIHRoaXMuciA9IHJcbiAgICB0aGlzLnRpbWUgPSB0aW1lICogMTAwMFxuICAgIHRoaXMudGFyZ2V0SW5pdCgpXG4gICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZVxuICB9XG4gIC8vIOiuvue9ruW8gOWni+aXtumXtFxuICBzZXRTdGFydCAoKSB7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuc3RhcnRUaW1lICsgdGhpcy50aW1lXG4gIH1cblxuICAvLyDnlJ/miJDnm67moIfngrlcbiAgdGFyZ2V0SW5pdCAoKSB7XG4gICAgLy8g5b2T5bey57uP5byA5aeL5pe2LCDpnIDopoHorr7nva7ljp/lhYjnmoTngrlcbiAgICBpZiAodGhpcy5pc1N0YXJ0KSB7XG4gICAgICB0aGlzLm9yaWdpbiA9IHtcbiAgICAgICAgeDogdGhpcy50YXJnZXRYLFxuICAgICAgICB5OiB0aGlzLnRhcmdldFlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50YXJnZXRYID0gcmFuZG9tKHRoaXMud2lkdGgpXG4gICAgdGhpcy50YXJnZXRZID0gcmFuZG9tKHRoaXMuaGVpZ2h0KVxuICAgIHRoaXMuc2V0U3RhcnQoKVxuICB9XG4gIC8vIOiOt+WPluW9k+WJjei/m+W6pueZvuWIhuavlFxuICBnZXRQZXJjZW50ICgpIHtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICBsZXQgcGVyY2VudCA9IE1hdGguZmxvb3IoKG5vdyAtIHRoaXMuc3RhcnRUaW1lKSAvIHRoaXMudGltZSAqIDEwMDAwKSAvIDEwMFxuICAgIHJldHVybiBwZXJjZW50ID4gMTAwID8gMTAwIDogcGVyY2VudFxuICB9XG5cbiAgbW92ZSAocG9pbnRlciwgdGFyZ2V0UG9pbnRlcikge1xuICAgIGxldCB0d2VlbiA9IHRoaXMuZ2V0UGVyY2VudCgpXG4gICAgcmV0dXJuIHRhcmdldFBvaW50ZXIgPiBwb2ludGVyID9cbiAgICAgIHBvaW50ZXIgKyBNYXRoLmFicyh0YXJnZXRQb2ludGVyIC0gcG9pbnRlcikgKiB0d2VlbiAvIDEwMCA6XG4gICAgICBwb2ludGVyIC0gTWF0aC5hYnModGFyZ2V0UG9pbnRlciAtIHBvaW50ZXIpICogdHdlZW4gLyAxMDBcbiAgfVxuXG4gIHJ1biAoKSB7XG4gICAgdGhpcy54ID0gdGhpcy5tb3ZlKHRoaXMub3JpZ2luLngsIHRoaXMudGFyZ2V0WClcbiAgICB0aGlzLnkgPSB0aGlzLm1vdmUodGhpcy5vcmlnaW4ueSwgdGhpcy50YXJnZXRZKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvaW50ZXIuanMiLCIvKipcbiAqIOiInuWPsFxuICovXG5pbXBvcnQgUG9pbnRlciBmcm9tICcuL3BvaW50ZXIuanMnXG5pbXBvcnQge3dpZHRoLCBoZWlnaHQsIHJhbmRvbX0gZnJvbSAnLi9oZWxwZXIuanMnXG5cbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnI2YzZjNmMydcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IgKHtcbiAgICBlbCxcbiAgICBsaW1pdCA9IDEwLFxuICAgIHJhZGl1cyA9IDE1LFxuICAgIHdpZHRoID0gd2lkdGgsXG4gICAgaGVpZ2h0ID0gaGVpZ2h0LFxuICAgIHRpbWUgPSA1LFxuICAgIGNvbG9yID0gW0RFRkFVTFRfQ09MT1JdLFxuICAgIGlzU2FtZVJhZGl1cyA9IGZhbHNlXG4gIH0pIHtcbiAgICAvLyDpmLLmraLliJvlu7rlpJrmrKFcbiAgICB0aGlzLmlzSW5pdGVkID0gZmFsc2U7XG4gICAgLy8g6ZmQ5Yi254K55pWw6YePXG4gICAgdGhpcy5saW1pdCA9IGxpbWl0O1xuICAgIC8vIOeCueeahOWuveW6plxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIC8vIOeCuembhuWQiFxuICAgIHRoaXMucG9pbnRlcnMgPSBbXTtcbiAgICAvLyDkuIrkuIvmlodcbiAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgLy8g5YWD57SgXG4gICAgdGhpcy5lbCA9IG51bGw7XG4gICAgLy8g5pe26Ze0XG4gICAgdGhpcy50aW1lID0gdGltZVxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIC8vIOaYr+WQpuebuOWQjOWNiuW+hFxuICAgIHRoaXMuaXNTYW1lUmFkaXVzID0gaXNTYW1lUmFkaXVzXG5cbiAgICB0aGlzLmluaXQoZWwsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cbiAgLy8g5Yid5aeL5YyWXG4gIGluaXQgKCRlbCwgd2lkdGgsIGhlaWdodCkge1xuICAgIC8vIOmYsuatouWIneWni+WMluS4pOasoVxuICAgIGlmICh0aGlzLmlzSW5pdGVkKSByZXR1cm5cbiAgICB0aGlzLmlzSW5pdGVkID0gdHJ1ZVxuICAgIC8vIOS/neWtmCDplb/lrr1cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgLy8g5L+d5a2Y5Y6f5pys5YWD57SgXG4gICAgdGhpcy5lbCA9ICRlbFxuICAgIHRoaXMuZWwud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmVsLmhlaWdodCA9IGhlaWdodDtcbiAgICAvLyDojrflj5bkuIrkuIvmlodcbiAgICB0aGlzLmN0eCA9IHRoaXMuZWwuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgLy8g55S754K5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbWl0OyBpKyspIHtcbiAgICAgIHRoaXMucG9pbnRlckluaXQoKVxuICAgIH1cblxuICB9XG5cbiAgLy8g55Sf5oiQ54K5XG4gIHBvaW50ZXJJbml0ICgpIHtcbiAgICBjb25zdCBjb2xvckxlbmd0aCA9IHRoaXMuY29sb3IubGVuZ3RoXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5pc1NhbWVSYWRpdXMgPyB0aGlzLnJhZGl1cyA6IHJhbmRvbSh0aGlzLnJhZGl1cywgMSlcbiAgICBsZXQgcG9pbnRlciA9IG5ldyBQb2ludGVyKFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgcmFkaXVzLFxuICAgICAgdGhpcy50aW1lLFxuICAgICAgdGhpcy5jb2xvcltyYW5kb20oY29sb3JMZW5ndGgpIC0gMV1cbiAgICApXG5cbiAgICB0aGlzLnBvaW50ZXJzLnB1c2gocG9pbnRlcilcbiAgICB0aGlzLnBvaW50ZXJSZW5kZXIocG9pbnRlcilcbiAgfVxuXG4gIC8vIOeUu+eCuVxuICBwb2ludGVyUmVuZGVyIChwb2ludGVyKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICB0aGlzLmN0eC5hcmMoXG4gICAgICBwb2ludGVyLngsXG4gICAgICBwb2ludGVyLnksXG4gICAgICBwb2ludGVyLnIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUEksXG4gICAgICB0cnVlXG4gICAgKVxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHBvaW50ZXIuY29sb3JcbiAgICB0aGlzLmN0eC5maWxsKClcbiAgfVxuICAvKipcbiAgICog6K6+572u54K55pWw6ZmQ5Yi2XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdFxuICAgKi9cbiAgc2V0TGltaXQgKGxpbWl0KSB7XG4gICAgaWYgKGxpbWl0IDwgMCkgbGltaXQgPSAwXG4gICAgbGV0IF9saW1pdCA9IHRoaXMucG9pbnRlcnMubGVuZ3RoXG4gICAgaWYgKGxpbWl0ID4gX2xpbWl0KSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGltaXQgLSBfbGltaXQ7IGkrKykge1xuICAgICAgICB0aGlzLnBvaW50ZXJJbml0KClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IF9saW1pdCAtIGxpbWl0OyBpKyspIHtcbiAgICAgICAgdGhpcy5wb2ludGVycy5zaGlmdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDmt7vliqDngrlcbiAgICovXG4gIGFkZFBvaW50ZXIgKCkge1xuICAgIHRoaXMuc2V0TGltaXQodGhpcy5wb2ludGVycy5sZW5ndGggKyAxKVxuICB9XG4gIC8qKlxuICAgKiDliKDpmaTngrlcbiAgICovXG4gIGRlbFBvaW50ZXIgKCkge1xuICAgIHRoaXMuc2V0TGltaXQodGhpcy5wb2ludGVycy5sZW5ndGggLSAxKVxuICB9XG4gIC8qKlxuICAgKiDorr7nva7popzoibJcbiAgICogQHBhcmFtIHthcnJheX0gY29sb3Ig6aKc6Imy6ZuG5ZCIXG4gICAqL1xuICBzZXRDb2xvcnMgKGNvbG9ycyA9IFtERUZBVUxUX0NPTE9SXSkge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcnNcbiAgICBjb25zdCBjb2xvckxlbmd0aCA9IGNvbG9ycy5sZW5ndGhcbiAgICB0aGlzLnBvaW50ZXJzLmZvckVhY2gocG9pbnRlciA9PiB7XG4gICAgICBwb2ludGVyLmNvbG9yID0gY29sb3JzW3JhbmRvbShjb2xvckxlbmd0aCkgLSAxXVxuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIOiuvue9rueCueeahOWNiuW+hFxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIOWNiuW+hFxuICAgKi9cbiAgc2V0UmFkaXVzIChyYWRpdXMpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMucG9pbnRlcnMuZm9yRWFjaChwb2ludGVyID0+IHtcbiAgICAgIHBvaW50ZXIuciA9IHRoaXMuaXNTYW1lUmFkaXVzID8gdGhpcy5yYWRpdXMgOiByYW5kb20odGhpcy5yYWRpdXMsIDEpXG4gICAgfSlcbiAgfVxuICAvLyDngrnot5HotbfmnaVcbiAgcG9pbnRlclJ1biAoKSB7XG4gICAgdGhpcy5wb2ludGVycy5mb3JFYWNoKChwb2ludGVyKSA9PiB7XG4gICAgICBwb2ludGVyLnJ1bigpXG4gICAgICB0aGlzLnBvaW50ZXJSZW5kZXIocG9pbnRlcilcbiAgICB9KVxuICB9XG5cbiAgLy8g55S757q/XG4gIGxpbmVSdW4gKCkge1xuICAgIGxldCBwb2ludGVyID0gdGhpcy5wb2ludGVyc1xuICAgIGxldCBsZW5ndGggPSBwb2ludGVyLmxlbmd0aFxuICAgIGxldCBjdHggPSB0aGlzLmN0eFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGkgIT09IGopIHtcbiAgICAgICAgICBsZXQgcG9pbnRlcjEgPSBwb2ludGVyW2ldXG4gICAgICAgICAgbGV0IHBvaW50ZXIyID0gcG9pbnRlcltqXVxuICAgICAgICAgIGxldCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudChwb2ludGVyMS54LCBwb2ludGVyMS55LCBwb2ludGVyMi54LCBwb2ludGVyMi55KVxuICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBwb2ludGVyMS5jb2xvcilcbiAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgcG9pbnRlcjIuY29sb3IpXG5cbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgICBjdHgubW92ZVRvKHBvaW50ZXJbaV0ueCwgcG9pbnRlcltpXS55KVxuICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRlcltqXS54LCBwb2ludGVyW2pdLnkpXG5cbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmFkaWVudFxuICAgICAgICAgIGN0eC5zdHJva2UoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g55S7XG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRfQ09MT1JcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRfQ09MT1JcbiAgICB0aGlzLnBvaW50ZXJSdW4oKVxuICAgIHRoaXMubGluZVJ1bigpXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
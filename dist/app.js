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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
function random() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return Math.round(Math.random() * (max - min)) + min;
}

var _getComputedStyle = getComputedStyle(document.body),
    bodyWidth = _getComputedStyle.width,
    bodyHeight = _getComputedStyle.height;

var width = exports.width = parseInt(bodyWidth, 10);
var height = exports.height = parseInt(bodyHeight, 10);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(11);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(19)
  , toPrimitive    = __webpack_require__(21)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pointer = function () {
  function Pointer(width, height, r) {
    var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#f3f3f3';
    (0, _classCallCheck3.default)(this, Pointer);

    this.width = width;
    this.height = height;
    var x = (0, _helper.random)(width);
    var y = (0, _helper.random)(height);
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };

    this.color = color;

    this.r = r;
    this.time = time * 1000;
    this.targetInit();
    this.isStart = true;
  }

  (0, _createClass3.default)(Pointer, [{
    key: 'setStart',
    value: function setStart() {
      this.startTime = new Date().getTime();
      this.endTime = this.startTime + this.time;
    }
  }, {
    key: 'targetInit',
    value: function targetInit() {
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _pointer = __webpack_require__(9);

var _pointer2 = _interopRequireDefault(_pointer);

var _helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _classCallCheck3.default)(this, Canvas);

    this.isInited = false;

    this.limit = limit;

    this.radius = radius;

    this.pointers = [];

    this.ctx = null;

    this.el = null;

    this.time = time;
    this.color = color;

    this.isSameRadius = isSameRadius;

    this.init(el, width, height);

    this.render();
  }

  (0, _createClass3.default)(Canvas, [{
    key: 'init',
    value: function init($el, width, height) {
      if (this.isInited) return;
      this.isInited = true;

      this.width = width;
      this.height = height;

      this.el = $el;
      this.el.width = width;
      this.el.height = height;

      this.ctx = this.el.getContext('2d');

      for (var i = 0; i < this.limit; i++) {
        this.pointerInit();
      }
    }
  }, {
    key: 'pointerInit',
    value: function pointerInit() {
      var colorLength = this.color.length;
      var radius = this.isSameRadius ? this.radius : (0, _helper.random)(this.radius, 1);
      var pointer = new _pointer2.default(this.width, this.height, radius, this.time, this.color[(0, _helper.random)(colorLength) - 1]);

      this.pointers.push(pointer);
      this.pointerRender(pointer);
    }
  }, {
    key: 'pointerRender',
    value: function pointerRender(pointer) {
      this.ctx.beginPath();
      this.ctx.arc(pointer.x, pointer.y, pointer.r, 0, 2 * Math.PI, true);
      this.ctx.fillStyle = pointer.color;
      this.ctx.fill();
    }
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
  }, {
    key: 'addPointer',
    value: function addPointer() {
      this.setLimit(this.pointers.length + 1);
    }
  }, {
    key: 'delPointer',
    value: function delPointer() {
      this.setLimit(this.pointers.length - 1);
    }
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
  }, {
    key: 'setRadius',
    value: function setRadius(radius) {
      var _this = this;

      this.radius = radius;
      this.pointers.forEach(function (pointer) {
        pointer.r = _this.isSameRadius ? _this.radius : (0, _helper.random)(_this.radius, 1);
      });
    }
  }, {
    key: 'pointerRun',
    value: function pointerRun() {
      var _this2 = this;

      this.pointers.forEach(function (pointer) {
        pointer.run();
        _this2.pointerRender(pointer);
      });
    }
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(13);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1)
  , document = __webpack_require__(7).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(7)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(15)
  , hide      = __webpack_require__(18)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(8)
  , createDesc = __webpack_require__(20);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(6)(function(){
  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjkwNWIyNWEwZjU0NzkxYTBiZjciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL3NyYy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiXSwibmFtZXMiOlsicmFuZG9tIiwibWF4IiwibWluIiwiTWF0aCIsInJvdW5kIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiYm9keSIsImJvZHlXaWR0aCIsIndpZHRoIiwiYm9keUhlaWdodCIsImhlaWdodCIsInBhcnNlSW50IiwiUG9pbnRlciIsInIiLCJ0aW1lIiwiY29sb3IiLCJ4IiwieSIsIm9yaWdpbiIsInRhcmdldEluaXQiLCJpc1N0YXJ0Iiwic3RhcnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJlbmRUaW1lIiwidGFyZ2V0WCIsInRhcmdldFkiLCJzZXRTdGFydCIsIm5vdyIsInBlcmNlbnQiLCJmbG9vciIsInBvaW50ZXIiLCJ0YXJnZXRQb2ludGVyIiwidHdlZW4iLCJnZXRQZXJjZW50IiwiYWJzIiwibW92ZSIsIkRFRkFVTFRfQ09MT1IiLCJDYW52YXMiLCJlbCIsImxpbWl0IiwicmFkaXVzIiwiaXNTYW1lUmFkaXVzIiwiaXNJbml0ZWQiLCJwb2ludGVycyIsImN0eCIsImluaXQiLCJyZW5kZXIiLCIkZWwiLCJnZXRDb250ZXh0IiwiaSIsInBvaW50ZXJJbml0IiwiY29sb3JMZW5ndGgiLCJsZW5ndGgiLCJwdXNoIiwicG9pbnRlclJlbmRlciIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsIl9saW1pdCIsInNoaWZ0Iiwic2V0TGltaXQiLCJjb2xvcnMiLCJmb3JFYWNoIiwicnVuIiwiaiIsInBvaW50ZXIxIiwicG9pbnRlcjIiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbGVhclJlY3QiLCJwb2ludGVyUnVuIiwibGluZVJ1biIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxDQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7UUNHZ0JBLE0sR0FBQUEsTTtBQUFULFNBQVNBLE1BQVQsR0FBbUM7QUFBQSxNQUFsQkMsR0FBa0IsdUVBQVosQ0FBWTtBQUFBLE1BQVRDLEdBQVMsdUVBQUgsQ0FBRzs7QUFDeEMsU0FBT0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLSCxNQUFMLE1BQWlCQyxN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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLHlCOzs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEU7Ozs7OztBQ1BBO0FBQ0EscUVBQXNFLGdCQUFnQixVQUFVLEdBQUc7QUFDbkcsQ0FBQyxFOzs7Ozs7QUNGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNYQTtBQUNBO0FBQ0Esb0VBQXVFLHlDQUEwQyxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI5MDViMjVhMGY1NDc5MWEwYmY3IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDnlJ/miJDkuIDkuKrpmo/mnLrmlbBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXgg6ZqP5py65pWw5LiK6ZmQXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIOmaj+acuuaVsOS4i+mZkFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tIChtYXggPSAyLCBtaW4gPSAxKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyAobWluKVxufVxuXG4vLyDojrflj5blsY/luZXlrr3pq5hcbmxldCB7d2lkdGg6IGJvZHlXaWR0aCwgaGVpZ2h0OiBib2R5SGVpZ2h0fSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG5cbmV4cG9ydCBsZXQgd2lkdGggPSBwYXJzZUludChib2R5V2lkdGgsIDEwKVxuZXhwb3J0IGxldCBoZWlnaHQgPSBwYXJzZUludChib2R5SGVpZ2h0LCAxMClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3JhbmRvbX0gZnJvbSAnLi9oZWxwZXIuanMnXG5cbi8vIOeCuSDlr7nosaFcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50ZXIge1xuICBjb25zdHJ1Y3RvciAod2lkdGgsIGhlaWdodCwgciwgdGltZSA9IDUsIGNvbG9yID0gJyNmM2YzZjMnKSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICBsZXQgeCA9IHJhbmRvbSh3aWR0aClcbiAgICBsZXQgeSA9IHJhbmRvbShoZWlnaHQpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLm9yaWdpbiA9IHt4LCB5fVxuXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgLy8g5pyA5bCP5Li6IDEwXG4gICAgdGhpcy5yID0gclxuICAgIHRoaXMudGltZSA9IHRpbWUgKiAxMDAwXG4gICAgdGhpcy50YXJnZXRJbml0KClcbiAgICB0aGlzLmlzU3RhcnQgPSB0cnVlXG4gIH1cbiAgLy8g6K6+572u5byA5aeL5pe26Ze0XG4gIHNldFN0YXJ0ICgpIHtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgdGhpcy5lbmRUaW1lID0gdGhpcy5zdGFydFRpbWUgKyB0aGlzLnRpbWVcbiAgfVxuXG4gIC8vIOeUn+aIkOebruagh+eCuVxuICB0YXJnZXRJbml0ICgpIHtcbiAgICAvLyDlvZPlt7Lnu4/lvIDlp4vml7YsIOmcgOimgeiuvue9ruWOn+WFiOeahOeCuVxuICAgIGlmICh0aGlzLmlzU3RhcnQpIHtcbiAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICB4OiB0aGlzLnRhcmdldFgsXG4gICAgICAgIHk6IHRoaXMudGFyZ2V0WVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRhcmdldFggPSByYW5kb20odGhpcy53aWR0aClcbiAgICB0aGlzLnRhcmdldFkgPSByYW5kb20odGhpcy5oZWlnaHQpXG4gICAgdGhpcy5zZXRTdGFydCgpXG4gIH1cbiAgLy8g6I635Y+W5b2T5YmN6L+b5bqm55m+5YiG5q+UXG4gIGdldFBlcmNlbnQgKCkge1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIGxldCBwZXJjZW50ID0gTWF0aC5mbG9vcigobm93IC0gdGhpcy5zdGFydFRpbWUpIC8gdGhpcy50aW1lICogMTAwMDApIC8gMTAwXG4gICAgcmV0dXJuIHBlcmNlbnQgPiAxMDAgPyAxMDAgOiBwZXJjZW50XG4gIH1cblxuICBtb3ZlIChwb2ludGVyLCB0YXJnZXRQb2ludGVyKSB7XG4gICAgbGV0IHR3ZWVuID0gdGhpcy5nZXRQZXJjZW50KClcbiAgICByZXR1cm4gdGFyZ2V0UG9pbnRlciA+IHBvaW50ZXIgP1xuICAgICAgcG9pbnRlciArIE1hdGguYWJzKHRhcmdldFBvaW50ZXIgLSBwb2ludGVyKSAqIHR3ZWVuIC8gMTAwIDpcbiAgICAgIHBvaW50ZXIgLSBNYXRoLmFicyh0YXJnZXRQb2ludGVyIC0gcG9pbnRlcikgKiB0d2VlbiAvIDEwMFxuICB9XG5cbiAgcnVuICgpIHtcbiAgICB0aGlzLnggPSB0aGlzLm1vdmUodGhpcy5vcmlnaW4ueCwgdGhpcy50YXJnZXRYKVxuICAgIHRoaXMueSA9IHRoaXMubW92ZSh0aGlzLm9yaWdpbi55LCB0aGlzLnRhcmdldFkpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9pbnRlci5qcyIsIi8qKlxuICog6Iie5Y+wXG4gKi9cbmltcG9ydCBQb2ludGVyIGZyb20gJy4vcG9pbnRlci5qcydcbmltcG9ydCB7d2lkdGgsIGhlaWdodCwgcmFuZG9tfSBmcm9tICcuL2hlbHBlci5qcydcblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjZjNmM2YzJ1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvciAoe1xuICAgIGVsLFxuICAgIGxpbWl0ID0gMTAsXG4gICAgcmFkaXVzID0gMTUsXG4gICAgd2lkdGggPSB3aWR0aCxcbiAgICBoZWlnaHQgPSBoZWlnaHQsXG4gICAgdGltZSA9IDUsXG4gICAgY29sb3IgPSBbREVGQVVMVF9DT0xPUl0sXG4gICAgaXNTYW1lUmFkaXVzID0gZmFsc2VcbiAgfSkge1xuICAgIC8vIOmYsuatouWIm+W7uuWkmuasoVxuICAgIHRoaXMuaXNJbml0ZWQgPSBmYWxzZTtcbiAgICAvLyDpmZDliLbngrnmlbDph49cbiAgICB0aGlzLmxpbWl0ID0gbGltaXQ7XG4gICAgLy8g54K555qE5a695bqmXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgLy8g54K56ZuG5ZCIXG4gICAgdGhpcy5wb2ludGVycyA9IFtdO1xuICAgIC8vIOS4iuS4i+aWh1xuICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICAvLyDlhYPntKBcbiAgICB0aGlzLmVsID0gbnVsbDtcbiAgICAvLyDml7bpl7RcbiAgICB0aGlzLnRpbWUgPSB0aW1lXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgLy8g5piv5ZCm55u45ZCM5Y2K5b6EXG4gICAgdGhpcy5pc1NhbWVSYWRpdXMgPSBpc1NhbWVSYWRpdXNcblxuICAgIHRoaXMuaW5pdChlbCwgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuICAvLyDliJ3lp4vljJZcbiAgaW5pdCAoJGVsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgLy8g6Ziy5q2i5Yid5aeL5YyW5Lik5qyhXG4gICAgaWYgKHRoaXMuaXNJbml0ZWQpIHJldHVyblxuICAgIHRoaXMuaXNJbml0ZWQgPSB0cnVlXG4gICAgLy8g5L+d5a2YIOmVv+WuvVxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAvLyDkv53lrZjljp/mnKzlhYPntKBcbiAgICB0aGlzLmVsID0gJGVsXG4gICAgdGhpcy5lbC53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZWwuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIC8vIOiOt+WPluS4iuS4i+aWh1xuICAgIHRoaXMuY3R4ID0gdGhpcy5lbC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAvLyDnlLvngrlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGltaXQ7IGkrKykge1xuICAgICAgdGhpcy5wb2ludGVySW5pdCgpXG4gICAgfVxuXG4gIH1cblxuICAvLyDnlJ/miJDngrlcbiAgcG9pbnRlckluaXQgKCkge1xuICAgIGNvbnN0IGNvbG9yTGVuZ3RoID0gdGhpcy5jb2xvci5sZW5ndGhcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLmlzU2FtZVJhZGl1cyA/IHRoaXMucmFkaXVzIDogcmFuZG9tKHRoaXMucmFkaXVzLCAxKVxuICAgIGxldCBwb2ludGVyID0gbmV3IFBvaW50ZXIoXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICByYWRpdXMsXG4gICAgICB0aGlzLnRpbWUsXG4gICAgICB0aGlzLmNvbG9yW3JhbmRvbShjb2xvckxlbmd0aCkgLSAxXVxuICAgIClcblxuICAgIHRoaXMucG9pbnRlcnMucHVzaChwb2ludGVyKVxuICAgIHRoaXMucG9pbnRlclJlbmRlcihwb2ludGVyKVxuICB9XG5cbiAgLy8g55S754K5XG4gIHBvaW50ZXJSZW5kZXIgKHBvaW50ZXIpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgIHRoaXMuY3R4LmFyYyhcbiAgICAgIHBvaW50ZXIueCxcbiAgICAgIHBvaW50ZXIueSxcbiAgICAgIHBvaW50ZXIucixcbiAgICAgIDAsXG4gICAgICAyICogTWF0aC5QSSxcbiAgICAgIHRydWVcbiAgICApXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gcG9pbnRlci5jb2xvclxuICAgIHRoaXMuY3R4LmZpbGwoKVxuICB9XG4gIC8qKlxuICAgKiDorr7nva7ngrnmlbDpmZDliLZcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0XG4gICAqL1xuICBzZXRMaW1pdCAobGltaXQpIHtcbiAgICBpZiAobGltaXQgPCAwKSBsaW1pdCA9IDBcbiAgICBsZXQgX2xpbWl0ID0gdGhpcy5wb2ludGVycy5sZW5ndGhcbiAgICBpZiAobGltaXQgPiBfbGltaXQpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW1pdCAtIF9saW1pdDsgaSsrKSB7XG4gICAgICAgIHRoaXMucG9pbnRlckluaXQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgX2xpbWl0IC0gbGltaXQ7IGkrKykge1xuICAgICAgICB0aGlzLnBvaW50ZXJzLnNoaWZ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOa3u+WKoOeCuVxuICAgKi9cbiAgYWRkUG9pbnRlciAoKSB7XG4gICAgdGhpcy5zZXRMaW1pdCh0aGlzLnBvaW50ZXJzLmxlbmd0aCArIDEpXG4gIH1cbiAgLyoqXG4gICAqIOWIoOmZpOeCuVxuICAgKi9cbiAgZGVsUG9pbnRlciAoKSB7XG4gICAgdGhpcy5zZXRMaW1pdCh0aGlzLnBvaW50ZXJzLmxlbmd0aCAtIDEpXG4gIH1cbiAgLyoqXG4gICAqIOiuvue9ruminOiJslxuICAgKiBAcGFyYW0ge2FycmF5fSBjb2xvciDpopzoibLpm4blkIhcbiAgICovXG4gIHNldENvbG9ycyAoY29sb3JzID0gW0RFRkFVTFRfQ09MT1JdKSB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yc1xuICAgIGNvbnN0IGNvbG9yTGVuZ3RoID0gY29sb3JzLmxlbmd0aFxuICAgIHRoaXMucG9pbnRlcnMuZm9yRWFjaChwb2ludGVyID0+IHtcbiAgICAgIHBvaW50ZXIuY29sb3IgPSBjb2xvcnNbcmFuZG9tKGNvbG9yTGVuZ3RoKSAtIDFdXG4gICAgfSlcbiAgfVxuICAvKipcbiAgICog6K6+572u54K555qE5Y2K5b6EXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMg5Y2K5b6EXG4gICAqL1xuICBzZXRSYWRpdXMgKHJhZGl1cykge1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gICAgdGhpcy5wb2ludGVycy5mb3JFYWNoKHBvaW50ZXIgPT4ge1xuICAgICAgcG9pbnRlci5yID0gdGhpcy5pc1NhbWVSYWRpdXMgPyB0aGlzLnJhZGl1cyA6IHJhbmRvbSh0aGlzLnJhZGl1cywgMSlcbiAgICB9KVxuICB9XG4gIC8vIOeCuei3kei1t+adpVxuICBwb2ludGVyUnVuICgpIHtcbiAgICB0aGlzLnBvaW50ZXJzLmZvckVhY2goKHBvaW50ZXIpID0+IHtcbiAgICAgIHBvaW50ZXIucnVuKClcbiAgICAgIHRoaXMucG9pbnRlclJlbmRlcihwb2ludGVyKVxuICAgIH0pXG4gIH1cblxuICAvLyDnlLvnur9cbiAgbGluZVJ1biAoKSB7XG4gICAgbGV0IHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzXG4gICAgbGV0IGxlbmd0aCA9IHBvaW50ZXIubGVuZ3RoXG4gICAgbGV0IGN0eCA9IHRoaXMuY3R4XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgIGxldCBwb2ludGVyMSA9IHBvaW50ZXJbaV1cbiAgICAgICAgICBsZXQgcG9pbnRlcjIgPSBwb2ludGVyW2pdXG4gICAgICAgICAgbGV0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHBvaW50ZXIxLngsIHBvaW50ZXIxLnksIHBvaW50ZXIyLngsIHBvaW50ZXIyLnkpXG4gICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHBvaW50ZXIxLmNvbG9yKVxuICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBwb2ludGVyMi5jb2xvcilcblxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRlcltpXS54LCBwb2ludGVyW2ldLnkpXG4gICAgICAgICAgY3R4LmxpbmVUbyhwb2ludGVyW2pdLngsIHBvaW50ZXJbal0ueSlcblxuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGdyYWRpZW50XG4gICAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDnlLtcbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gREVGQVVMVF9DT0xPUlxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVF9DT0xPUlxuICAgIHRoaXMucG9pbnRlclJ1bigpXG4gICAgdGhpcy5saW5lUnVuKClcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
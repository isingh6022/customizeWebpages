/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Personalization.ts":
/*!****************************************!*\
  !*** ./src/scripts/Personalization.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Personalization": () => (/* binding */ Personalization)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var begStr = '.'.repeat(40) + '\n';
var endStr = '='.repeat(40) + '\n\n';
var Personalization = /*#__PURE__*/function () {
  function Personalization(name, regex, options) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Personalization);
    this.name = name;
    this.regex = regex;
    this.options = options;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Personalization, [{
    key: "addCss",
    value: function addCss() {
      if (this.options.css) {
        var styleSheet = document.createElement('style');
        styleSheet.innerText = this.options.css;
        document.head.appendChild(styleSheet);
        console.log("custom css added to ".concat(this.name, "..."));
      }
      return this;
    }
  }, {
    key: "executeScript",
    value: function executeScript() {
      if (this.options.callback) {
        this.options.callback();
        console.log("script executed for ".concat(this.name, "..."));
      }
      return this;
    }
  }, {
    key: "personalize",
    value: function personalize(url) {
      if (!url || !url.match(this.regex)) {
        return;
      }
      console.log(begStr);
      console.log('Personalizing...');
      this.addCss().executeScript();
      console.log("Personalized ".concat(this.name, "."));
      console.log(endStr);
    }
  }]);
  return Personalization;
}();

/***/ }),

/***/ "./src/scripts/registerAndExecute.ts":
/*!*******************************************!*\
  !*** ./src/scripts/registerAndExecute.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "personalize": () => (/* binding */ personalize),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
var PERSONALIZATIONS = [];
var register = function register(personalization) {
  PERSONALIZATIONS.push(personalization);
};
var personalize = function personalize(url) {
  for (var _i = 0, _PERSONALIZATIONS = PERSONALIZATIONS; _i < _PERSONALIZATIONS.length; _i++) {
    var personalization = _PERSONALIZATIONS[_i];
    personalization && personalization.personalize && personalization.personalize(url);
  }
};

/***/ }),

/***/ "./src/scripts/speedUpVideos/SpeedUpVideos.ts":
/*!****************************************************!*\
  !*** ./src/scripts/speedUpVideos/SpeedUpVideos.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeedUpVideos": () => (/* binding */ SpeedUpVideos)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var CHECK_ID = 'invisible-speed-ext-element-for-check';
var SpeedUpVideos = /*#__PURE__*/function () {
  // ms.

  function SpeedUpVideos(_vidEl, config) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SpeedUpVideos);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_isActive", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_controlBoxDiv", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_deltaT", 3);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_fullScr", false);
    this._vidEl = _vidEl;
    this.config = config;
    if (!this.vidEl) {
      console.log('Video not received...');
    }
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SpeedUpVideos, [{
    key: "vidEl",
    get: function get() {
      return this._vidEl;
    }
  }, {
    key: "updateVidEl",
    value: function updateVidEl(el) {
      this._vidEl = el;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this._isActive = !this._isActive;
      if (this._isActive) {
        console.log('Controls REACTIVATED');
        this._controlBoxDiv.style.display = 'block';
      } else {
        console.log('Controls DEACTIVATED');
        this._controlBoxDiv.style.display = 'none';
      }
    }
  }, {
    key: "activate",
    value: function activate() {
      if (this._isAdded()) {
        console.error('The extension is already active...');
        return;
      } else if (!this._vidEl) {
        var vid = this.config.fetchVidEl && this.config.fetchVidEl();
        if (vid) {
          this._vidEl = vid;
        } else {
          console.error('Video element not received.');
          return;
        }
      }
      this._addCheckEl();
      this._addListeners();
      this._createControlBoxDiv();
      this._updateControlBoxDiv();
      this.toggle();
    }
  }, {
    key: "_isAdded",
    value: function _isAdded() {
      if (document.getElementById(CHECK_ID)) {
        console.log('video control extension was already active.');
        return true;
      }
      return false;
    }
  }, {
    key: "_addCheckEl",
    value: function _addCheckEl() {
      // Just an invisible element to check if the extension is already active.
      var checkEl = document.createElement('div');
      checkEl.id = CHECK_ID;
      checkEl.style.display = 'none';
      document.body.appendChild(checkEl);
    }
  }, {
    key: "_createControlBoxDiv",
    value: function _createControlBoxDiv() {
      if (this._controlBoxDiv) {
        return this._controlBoxDiv;
      }
      var box = document.createElement('div');
      box.style.zIndex = '100000000';
      box.style.position = 'fixed';
      box.style.bottom = '0';
      box.style.right = '0';
      box.style.backgroundColor = 'black';
      box.style.color = 'white';
      box.style.fontSize = '1.5em';
      box.style.border = '1px solid white';
      document.body.insertBefore(box, document.body.firstChild);
      this._controlBoxDiv = box;
      return box;
    }
  }, {
    key: "controlBoxDiv",
    get: function get() {
      return this._controlBoxDiv;
    }
  }, {
    key: "_updateControlBoxDiv",
    value: function _updateControlBoxDiv() {
      var n = Math.round(this._vidEl.playbackRate * 10) / 10;
      var rate = n % 1 ? String(n) : String(n) + '.0';
      this._controlBoxDiv.textContent = rate + ' | ' + this._deltaT;
    }
  }, {
    key: "_addListeners",
    value: function _addListeners() {
      var _this = this;
      window.addEventListener('keydown', function (e) {
        if (e.altKey) {
          e.preventDefault();
          if (e.key == 's') {
            _this.toggle();
          } else if (e.key == 'v') {
            console.log(document.getElementsByTagName('video'));
            console.log(_this._vidEl);
          } else if (_this._isActive) {
            var n = parseInt(e.key);
            if (isNaN(n) || !e.altKey) {
              return;
            }
            _this.updateVidEl(document.getElementsByTagName('video')[n - 1]);
            console.log('New Element', _this._vidEl);
          }
        } else if (!_this._isActive) {
          return;
        }
        switch (e.code) {
          case 'KeyF':
            if (_this._fullScr) {
              _this._fullScr = false;
              document.exitFullscreen();
            } else {
              _this._fullScr = true;
              _this._vidEl.requestFullscreen();
            }
            break;
          case 'KeyA':
          case 'KeyJ':
            _this._vidEl.currentTime -= _this._deltaT;
            break;
          case 'KeyD':
          case 'KeyL':
            _this._vidEl.currentTime += _this._deltaT;
            break;
          case 'ArrowLeft':
            !_this.config.disableArrows && (_this._vidEl.currentTime -= 10);
            break;
          case 'ArrowRight':
            !_this.config.disableArrows && (_this._vidEl.currentTime += 10);
            break;
          case 'KeyE':
          case 'KeyO':
            _this._vidEl.playbackRate += 0.2;
            _this._updateControlBoxDiv();
            break;
          case 'KeyQ':
          case 'KeyU':
            _this._vidEl.playbackRate -= 0.2;
            _this._updateControlBoxDiv();
            break;
          case 'KeyW':
          case 'KeyI':
            _this._vidEl.playbackRate = 1.0;
            _this._updateControlBoxDiv();
            break;
          case 'KeyZ':
          case 'KeyN':
            _this._deltaT -= 1.0;
            _this._updateControlBoxDiv();
            break;
          case 'KeyX':
          case 'KeyM':
            _this._deltaT += 1.0;
            _this._updateControlBoxDiv();
            break;
        }
      });
    }
  }]);
  return SpeedUpVideos;
}();

/***/ }),

/***/ "./src/sites/allSites.ts":
/*!*******************************!*\
  !*** ./src/sites/allSites.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allSites": () => (/* binding */ allSites)
/* harmony export */ });
/* harmony import */ var _wall_alphacoders_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall.alphacoders.com */ "./src/sites/wall.alphacoders.com.ts");
/* harmony import */ var _youtube_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube.com */ "./src/sites/youtube.com.ts");


var allSites = [_wall_alphacoders_com__WEBPACK_IMPORTED_MODULE_0__.alphacoders, _youtube_com__WEBPACK_IMPORTED_MODULE_1__.youtube];


/***/ }),

/***/ "./src/sites/wall.alphacoders.com.ts":
/*!*******************************************!*\
  !*** ./src/sites/wall.alphacoders.com.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alphacoders": () => (/* binding */ alphacoders)
/* harmony export */ });
/* harmony import */ var _scripts_Personalization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scripts/Personalization */ "./src/scripts/Personalization.ts");

var alphacoders = new _scripts_Personalization__WEBPACK_IMPORTED_MODULE_0__.Personalization('alphacoders', /wall\.alphacoders\.com/i, {
  css: "\n    .thumb-container-big {\n      width: 24% !important;\n      border: none !important;\n    }\n    img.thumb-desktop {\n      height: auto !important;\n    }\n    ins.adsbygoogle.adsbygoogle-noablate {\n      display: none !important;\n    }\n  "
});

/***/ }),

/***/ "./src/sites/youtube.com.ts":
/*!**********************************!*\
  !*** ./src/sites/youtube.com.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "youtube": () => (/* binding */ youtube)
/* harmony export */ });
/* harmony import */ var _scripts_Personalization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scripts/Personalization */ "./src/scripts/Personalization.ts");
/* harmony import */ var _scripts_speedUpVideos_SpeedUpVideos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scripts/speedUpVideos/SpeedUpVideos */ "./src/scripts/speedUpVideos/SpeedUpVideos.ts");


var youtube = new _scripts_Personalization__WEBPACK_IMPORTED_MODULE_0__.Personalization('youtube', /^https:\/\/www\.youtube\.com/i, {
  callback: function callback() {
    setTimeout(function () {
      var speedVid = new _scripts_speedUpVideos_SpeedUpVideos__WEBPACK_IMPORTED_MODULE_1__.SpeedUpVideos(document.getElementsByTagName('video')[0], {
        disableArrows: true,
        fetchVidEl: function fetchVidEl() {
          return document.getElementsByTagName('video')[0];
        }
      });
      console.log('working', speedVid);
      speedVid.activate();
    }, 500);
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sites_allSites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sites/allSites */ "./src/sites/allSites.ts");
/* harmony import */ var _scripts_registerAndExecute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scripts/registerAndExecute */ "./src/scripts/registerAndExecute.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var _iterator = _createForOfIteratorHelper(_sites_allSites__WEBPACK_IMPORTED_MODULE_0__.allSites),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var site = _step.value;
    (0,_scripts_registerAndExecute__WEBPACK_IMPORTED_MODULE_1__.register)(site);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
(0,_scripts_registerAndExecute__WEBPACK_IMPORTED_MODULE_1__.personalize)(window.location.href);
})();

/******/ })()
;
//# sourceMappingURL=personalize.js.map
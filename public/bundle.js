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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/playground/redux101.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/playground/redux101.js":
/*!************************************!*\
  !*** ./src/playground/redux101.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'redux'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar store = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'redux'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    count: 0\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"INCREMENT\":\n      var incrementBy = typeof action.incrementBy === \"number\" ? action.incrementBy : 1;\n      return {\n        count: state.count + incrementBy\n      };\n\n    case \"DECREMENT\":\n      var decrementBy = typeof action.decrementBy === \"number\" ? action.decrementBy : 1;\n      return {\n        count: state.count - decrementBy\n      };\n\n    case \"SET\":\n      return {\n        count: action.count\n      };\n\n    case \"RESET\":\n      return {\n        count: 0\n      };\n\n    default:\n      return state;\n  }\n});\nvar unsubscribe = store.subscribe(function () {\n  console.log(\"store :\", store.getState());\n});\nstore.dispatch({\n  type: \"INCREMENT\",\n  incrementBy: 5\n});\nstore.dispatch({\n  type: \"INCREMENT\"\n});\nstore.dispatch({\n  type: \"RESET\"\n});\nstore.dispatch({\n  type: \"DECREMENT\"\n});\nstore.dispatch({\n  type: \"DECREMENT\"\n});\nstore.dispatch({\n  type: \"DECREMENT\",\n  decrementBy: 10\n});\nstore.dispatch({\n  type: \"SET\",\n  count: 101\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWdyb3VuZC9yZWR1eDEwMS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbGF5Z3JvdW5kL3JlZHV4MTAxLmpzPzcyNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoKHN0YXRlID0geyBjb3VudDogMCB9LCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiSU5DUkVNRU5UXCI6XHJcbiAgICAgIGNvbnN0IGluY3JlbWVudEJ5ID1cclxuICAgICAgICB0eXBlb2YgYWN0aW9uLmluY3JlbWVudEJ5ID09PSBcIm51bWJlclwiID8gYWN0aW9uLmluY3JlbWVudEJ5IDogMTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyBpbmNyZW1lbnRCeVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkRFQ1JFTUVOVFwiOlxyXG4gICAgICBjb25zdCBkZWNyZW1lbnRCeSA9XHJcbiAgICAgICAgdHlwZW9mIGFjdGlvbi5kZWNyZW1lbnRCeSA9PT0gXCJudW1iZXJcIiA/IGFjdGlvbi5kZWNyZW1lbnRCeSA6IDE7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gZGVjcmVtZW50QnlcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJTRVRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudDogYWN0aW9uLmNvdW50XHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiUkVTRVRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudDogMFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJzdG9yZSA6XCIsIHN0b3JlLmdldFN0YXRlKCkpO1xyXG59KTtcclxuXHJcbnN0b3JlLmRpc3BhdGNoKHtcclxuICB0eXBlOiBcIklOQ1JFTUVOVFwiLFxyXG4gIGluY3JlbWVudEJ5OiA1XHJcbn0pO1xyXG5cclxuc3RvcmUuZGlzcGF0Y2goe1xyXG4gIHR5cGU6IFwiSU5DUkVNRU5UXCJcclxufSk7XHJcblxyXG5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgdHlwZTogXCJSRVNFVFwiXHJcbn0pO1xyXG5cclxuc3RvcmUuZGlzcGF0Y2goe1xyXG4gIHR5cGU6IFwiREVDUkVNRU5UXCJcclxufSk7XHJcblxyXG5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgdHlwZTogXCJERUNSRU1FTlRcIlxyXG59KTtcclxuXHJcbnN0b3JlLmRpc3BhdGNoKHtcclxuICB0eXBlOiBcIkRFQ1JFTUVOVFwiLFxyXG4gIGRlY3JlbWVudEJ5OiAxMFxyXG59KTtcclxuXHJcbnN0b3JlLmRpc3BhdGNoKHtcclxuICB0eXBlOiBcIlNFVFwiLFxyXG4gIGNvdW50OiAxMDFcclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUF0QkE7QUF3QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/playground/redux101.js\n");

/***/ })

/******/ });
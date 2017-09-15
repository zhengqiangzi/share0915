/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 297);
/******/ })
/************************************************************************/
/******/ ({

/***/ 297:
/***/ function(module, exports) {

var MAD_PLATFORM_ADDRESS = "http://onemad/platform";

function fun1(x) {
	console.log('fun start  fun1 *****^^^^^******');
	var a = 1;
	var b = a + 1;

	function _fun() {
		console.log('fun start  _fun *****^^^^^******');

		var a = 3333;
		console.log(a);
		console.log('fun end _fun  *****^^^^^****** ');
	}

	return _fun;
	console.log('fun end fun1  *****^^^^^****** ');
}

function fun2(x) {
	console.log('fun start  fun2 *****^^^^^******');
	var a = 2;
	console.log('fun end fun2  *****^^^^^****** ');
}

function fun3(x) {
	console.log('fun start  fun3 *****^^^^^******');
	var a = 3;
	console.log('fun end fun3  *****^^^^^****** ');
}

fun1(1)();
fun2(1);
fun3(1);

console.log(MAD_PLATFORM_ADDRESS);

console.dir("aaaa");

/***/ }

/******/ });
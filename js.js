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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// 01: inicializar con evento ready
$(function () {

  $('a').click(function (event) {
    if ($(this).attr('href') == '#') {
      event.preventDefault(); // prevenir evento de los logos vacíos
    };
  });

  // 02: Añadir/eliminar la clase .boardTwits__heart--liked al hacer click sobre .boardTwits__heart
  $(".twiteos").on('click', '.twit__heart', function (event) {
    event.preventDefault(); // prevenir evento

    $(this).addClass('twit__heart--liked');

    var counter = $(this).next(),
        // obtengo el elemento con el número de likes
    newCounter = parseInt(counter.text()) + 1; // obtengo el string, se convierte a number y se suma 1

    counter.text(newCounter); // se actualiza el string

    // ESTE DEBERÍA SER LO CORRECTO: NO LIKES INFINITOS >:(
    // if (!$(this).hasClass('boardTuits__heart--liked')) {
    //   newCounter = parseInt(counter.text()) + 1;
    //
    //   $(this).addClass('boardTuits__heart--liked');
    // } else {
    //   newCounter = parseInt(counter.text()) - 1;
    //
    //   $(this).removeClass('boardTuits__heart--liked');
    // }
    // counter.text(newCounter);
  });

  // 03: Eliminar el div .boardTuits__tuit al hacer click sobre .boardTuits__trash
  $(".twiteos").on('click', '.twit__trash', function (event) {
    event.preventDefault();

    var twit = $(this).parents('.twit');

    twit.fadeOut(500); // linda desaparición
    setTimeout(function () {
      tuit.remove(); // remover el elemento del DOM luego de 0.5 seg
    }, 500);
  });

  

  // 05: Obtener data del form y crear tuit
  $('form').submit(function (event) {
    event.preventDefault(); // prevenir evento

    var data = $(this).serializeArray(),
        // obtener data
    image = data[0].value,
        quote = data[1].value;

    

    var twit = '<article class="twit">        <img class="twit__image" src="images/' + image + '" alt="author" />\n        <div class="tuit__border">          <div class="tuit__quote">            ' + quote + '          </div>\n          <div class="tuit__features">            <div class="tuit__item tuit__heart"><a href=\'#\'><i class="fas fa-heart"></i></a></div>            <div class="tuit__item">0</div>            <div class="tuit__item tuit__trash"><a href=\'#\'><i class="far fa-trash-alt"></i></a></div>          </div>\n        </div>      </article>';

    $(twit).prependTo('.twiteos').hide().fadeIn(500); // agregar twit

    $(this)[0].reset(); // limpiar form

    $(this).children(":first-child").attr('src', 'images/vader_profile.jpeg');
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
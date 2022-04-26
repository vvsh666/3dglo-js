/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 april 2022')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_validate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst calc = () => {\n    const calcItems = document.querySelectorAll('.calc-item')\n    for (let i = 1; i < calcItems.length; i++) {\n        calcItems[i].addEventListener('input', (event) => {\n            event.target.value = event.target.value.replace(/\\D+/, '')\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menu = document.querySelector('menu')\r\n    const scrollUp = document.querySelector('main>a[href=\"#service-block\"]')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    const scrollSmoothToAnchor = (link, event) => {\r\n        event.preventDefault()\r\n        let element = document.getElementById(link.getAttribute('href').substring(1))\r\n        element.scrollIntoView({ behavior: 'smooth' })\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n\r\n        if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {\r\n            handleMenu()\r\n        }\r\n        if (e.target.closest('.menu')) {\r\n            handleMenu()\r\n        }\r\n        if (e.target.classList.contains('close-btn')) {\r\n            e.preventDefault()\r\n            handleMenu()\r\n        }\r\n        if (e.target.matches('ul>li>a')) {\r\n            scrollSmoothToAnchor(e.target, e)\r\n            handleMenu()\r\n        }\r\n        if (e.target.closest('main>a[href=\"#service-block\"]')) {\r\n            scrollSmoothToAnchor(e.target.closest('main>a[href=\"#service-block\"]'), e)\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (document.documentElement.clientWidth >= 768) {\r\n                let idAnimation\r\n                let count = 0\r\n                modal.style.opacity = 0\r\n                modal.style.display = 'block'\r\n                const modalAnimation = () => {\r\n                    count++\r\n                    idAnimation = requestAnimationFrame(modalAnimation)\r\n                    if (count <= 50) {\r\n                        modal.style.opacity = count * 0.02\r\n                    } else {\r\n                        cancelAnimationFrame(idAnimation)\r\n                    }\r\n\r\n                }\r\n                modalAnimation()\r\n            } else {\r\n                modal.style.display = 'block'\r\n            }\r\n\r\n        })\r\n    })\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content')\r\n    const slides = document.querySelectorAll('.portfolio-item')\r\n    const dots = document.querySelectorAll('.dot')\r\n    const timeInterval = 2000\r\n\r\n    let currentSlide = 0\r\n    let interval\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    }\r\n\r\n    const startSlide = (time = 1500) => {\r\n        interval = setInterval(autoSlide, time)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide()\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header')\n    const tabs = document.querySelectorAll('.service-header-tab')\n    const tabContent = document.querySelectorAll('.service-tab')\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab')\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active')\n                    tabContent[index].classList.remove('d-none')\n                } else {\n                    tab.classList.remove('active')\n                    tabContent[index].classList.add('d-none')\n                }\n            })\n        }\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-seconds')\n\n    let idInterval\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let hours = Math.floor(timeRemaining / 3600)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        if (timeRemaining <= 0) {\n            timeRemaining = 0\n            hours = 0\n            minutes = 0\n            seconds = 0\n        }\n\n        return { timeRemaining, hours, minutes, seconds }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining()\n        timerHours.textContent = (getTime.hours < 10) ? '0' + getTime.hours : getTime.hours\n        timerMinutes.textContent = (getTime.minutes < 10) ? '0' + getTime.minutes : getTime.minutes\n        timerSeconds.textContent = (getTime.seconds < 10) ? '0' + getTime.seconds : getTime.seconds\n\n        if (getTime.timeRemaining <= 0) {\n            clearInterval(idInterval)\n        }\n    }\n\n    idInterval = setInterval(updateClock, 1000)\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst validate = () => {\n    const userNameInputs = document.querySelectorAll('input[name=user_name]')\n    const userPhoneInputs = document.querySelectorAll('input[name=user_phone]')\n    const userEmailInputs = document.querySelectorAll('input[name=user_email]')\n    const userMessageInput = document.querySelector('input[name=user_message]')\n\n    const delSpaceHyphen = (e) => {\n        e.target.value = e.target.value.replace(/\\s{2,}/g, ' ')\n        e.target.value = e.target.value.replace(/-{2,}/g, '-')\n        e.target.value = e.target.value.replace(/^[\\s-]+|[\\s-]+$/g, '')\n    }\n\n    const changeLetters = (e) => {\n        if (e.target.value != '') {\n            const arr = e.target.value.split(' ')\n            let resArr = arr.map(item => {\n                return item = item[0].toUpperCase() + item.slice(1).toLowerCase()\n            })\n            e.target.value = resArr.join(' ')\n        }\n    }\n\n\n    userNameInputs.forEach((input) => {\n        input.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^А-Яа-яё -]+/, '')\n        })\n        input.addEventListener('blur', (e) => {\n            delSpaceHyphen(e)\n            changeLetters(e)\n        })\n    })\n    userPhoneInputs.forEach((input) => {\n        input.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)-]+/, '')\n        })\n        input.addEventListener('blur', (e) => {\n            delSpaceHyphen(e)\n        })\n    })\n    userEmailInputs.forEach((input) => {\n        input.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^\\w@\\-\\_\\.\\!\\~\\*\\']+|\\^\\\\/, '')\n        })\n        input.addEventListener('blur', (e) => {\n            delSpaceHyphen(e)\n        })\n    })\n    userMessageInput.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^А-Яа-яё -]+/, '')\n    })\n    userMessageInput.addEventListener('blur', (e) => {\n        delSpaceHyphen(e)\n        changeLetters(e)\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./modules/validate.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
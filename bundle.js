/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/main.js":
/*!********************************!*\
  !*** ./src/javascript/main.js ***!
  \********************************/
/***/ (() => {

eval("{//Select DOM Items \n\nvar menuBtn = document.querySelector('.menu-btn');\nvar menu = document.querySelector('.menu');\nvar menuNav = document.querySelector('.menu-nav');\nvar menuBranding = document.querySelector('.menu-branding');\nvar navItems = document.querySelectorAll('.nav-item');\nvar showMenu = false;\nmenuBtn.addEventListener('click', toggleMenu);\nfunction toggleMenu() {\n  showMenu ? menuBtn.classList.remove(\"close\") : menuBtn.classList.add(\"close\");\n  showMenu ? menu.classList.remove('show') : menu.classList.add('show');\n  showMenu ? menuNav.classList.remove('show') : menuNav.classList.add('show');\n  showMenu ? menuBranding.classList.remove('show') : menuBranding.classList.add('show');\n  showMenu ? navItems.forEach(function (item) {\n    return item.classList.remove('show');\n  }) : navItems.forEach(function (item) {\n    return item.classList.add('show');\n  });\n  showMenu = !showMenu;\n}\n\n//# sourceURL=webpack://modern_portfolio/./src/javascript/main.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/main.js"]();
/******/ 	
/******/ })()
;
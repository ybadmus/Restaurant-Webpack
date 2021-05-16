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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".content {\\r\\n    font-family: 'Lobster Two', cursive;\\r\\n    font: normal 16px/20px;\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.app {\\r\\n    min-height: 90vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    padding: 3rem 0;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    display: flex;\\r\\n    justify-content: flex-end;\\r\\n    background: #000;\\r\\n    color: floralwhite;\\r\\n}\\r\\n\\r\\n.footer ul {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    list-style: none;\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.footer li {\\r\\n    display: flex;\\r\\n    font-weight: 600;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.card-horizontal {\\r\\n    display: flex;\\r\\n    flex: 1 1 auto;\\r\\n}\\r\\n\\r\\n.card-horizontal img {\\r\\n    width: 300px;\\r\\n}\\r\\n\\r\\n.list-group {\\r\\n    width: 300px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.about {\\r\\n    margin-top: 2rem;\\r\\n    padding: 30px;\\r\\n    border: 1px solid silver;\\r\\n}\\r\\n\\r\\n.row {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.list-group-item.active {\\r\\n    z-index: 2;\\r\\n    color: #fff;\\r\\n    background-color: #020b1a;\\r\\n    border-color: #0e1117;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n    cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Ghana_Waakye.jpg":
/*!******************************!*\
  !*** ./src/Ghana_Waakye.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2e47998247efcbf597c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/Ghana_Waakye.jpg?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about() {\n  const app = document.createElement('div');\n  const classes = ['app', 'container'];\n  app.classList.add(...classes);\n\n  const title = document.createElement('h1');\n  title.textContent = 'About Us';\n\n  app.appendChild(title);\n\n  const about = document.createElement('div');\n  about.className = 'about';\n\n  const aboutText = [\n    'We provide our customers with luxurious dining and an overall unforgettable experience',\n    'Steakhouse is currently situated in over 15 cities worldwide',\n    'Book a reservation today',\n  ];\n\n  for (let i = 0; i < aboutText.length; i += 1) {\n    const paragraph = document.createElement('p');\n    paragraph.textContent = aboutText[i];\n    about.appendChild(paragraph);\n  }\n\n  app.appendChild(about);\n\n  return app;\n}\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  const app = document.createElement('div');\n  const classes = ['app', 'container'];\n  app.classList.add(...classes);\n\n  const title = document.createElement('h2');\n  title.textContent = 'Contact Us';\n  title.className = 'mb-5';\n\n  app.appendChild(title);\n\n  const support = document.createElement('p');\n  support.textContent = 'For reservations or enquiries';\n\n  app.appendChild(support);\n\n  const email = document.createElement('p');\n  email.textContent = 'E-mail: villaescudero@example.com';\n\n  app.appendChild(email);\n\n  const phone = document.createElement('p');\n  phone.textContent = 'Phone: +(01)055-098-1101';\n\n  app.appendChild(phone);\n\n  return app;\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n  const faCopyright = ['fa', 'fa-copyright', 'p-1'];\n  const copyrightYear = ` ${new Date().getFullYear()}`;\n\n  const footer = document.createElement('footer');\n  footer.className = 'footer mt-4';\n\n  const ul = document.createElement('ul');\n\n  const footerList = [copyrightYear, 'Milkyway Inc'];\n\n  for (let i = 0; i < footerList.length; i += 1) {\n    const li = document.createElement('li');\n    const p = document.createElement('p');\n    p.textContent = footerList[i];\n\n    if (i === 0) {\n      const itag = document.createElement('i');\n      itag.classList.add(...faCopyright);\n      li.appendChild(itag);\n    }\n\n    li.appendChild(p);\n    ul.appendChild(li);\n  }\n\n  footer.appendChild(ul);\n\n  return footer;\n}\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/ghana_jollof.jpg":
/*!******************************!*\
  !*** ./src/ghana_jollof.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d8330dfa96afcfc5f88.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/ghana_jollof.jpg?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header() {\n  const navbarClass = ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'];\n  const navbarCollapse = ['collapse', 'navbar-collapse'];\n\n  const nav = document.createElement('nav');\n  nav.classList.add(...navbarClass);\n\n  const containerFluid = document.createElement('div');\n  containerFluid.classList.add('container-fluid');\n\n  const anchor = document.createElement('a');\n  anchor.classList.add('navbar-brand');\n  anchor.attributes.href = '#';\n  anchor.textContent = 'Villa Escudero';\n\n  containerFluid.appendChild(anchor);\n\n  const button = document.createElement('button');\n  button.classList = 'navbar-toggler';\n  button.attributes.type = 'button';\n\n  const span = document.createElement('span');\n  span.classList.add('navbar-toggler-icon');\n  button.appendChild(span);\n\n  containerFluid.appendChild(button);\n\n  const collapse = document.createElement('div');\n  collapse.classList.add(...navbarCollapse);\n  collapse.id = 'navbarNavAltMarkup';\n\n  const navbarNav = document.createElement('div');\n  navbarNav.classList.add('navbar-nav');\n\n  const links = [{ name: 'Home', href: '#', active: true }, { name: 'Menu', href: '#', active: false }, { name: 'Contact', href: '#', active: false }, { name: 'About', href: '#', active: false }];\n\n  for (let i = 0; i < links.length; i += 1) {\n    const navLink = document.createElement('a');\n    navLink.classList.add('nav-link');\n    navLink.id = links[i].name.toLowerCase();\n    if (links[i].active) navLink.classList.add('active');\n    navLink.attributes.href = links[i].href;\n    navLink.textContent = links[i].name;\n\n    navbarNav.appendChild(navLink);\n  }\n\n  collapse.appendChild(navbarNav);\n  containerFluid.appendChild(collapse);\n  nav.appendChild(containerFluid);\n\n  return nav;\n}\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n  const app = document.createElement('div');\n  const classes = ['app', 'container'];\n  app.classList.add(...classes);\n\n  const restaurantName = document.createElement('h2');\n  restaurantName.className = 'mb-3';\n  restaurantName.textContent = 'Villa Escudero';\n\n  app.appendChild(restaurantName);\n\n  const title = document.createElement('h5');\n  title.className = 'mb-3';\n  title.textContent = 'Dinner at Villa Escudero means enjoying a meal while seated at the foot of a waterfall!';\n\n  app.appendChild(title);\n\n  const listOfActions = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];\n\n  const listGroup = document.createElement('div');\n  const listGroupClasses = ['list-group', 'my-5'];\n  listGroup.classList.add(...listGroupClasses);\n\n  const buttonActive = document.createElement('button');\n  const classesActive = ['list-group-item', 'list-group-item-action', 'active'];\n  buttonActive.classList.add(...classesActive);\n  buttonActive.textContent = 'OPENING HOURS';\n\n  listGroup.appendChild(buttonActive);\n\n  for (let i = 0; i < listOfActions.length; i += 1) {\n    const button = document.createElement('button');\n    const classes = ['list-group-item', 'list-group-item-action'];\n    button.classList.add(...classes);\n    button.textContent = listOfActions[i];\n    listGroup.appendChild(button);\n  }\n\n  app.appendChild(listGroup);\n\n  const location = document.createElement('h6');\n  location.textContent = 'Location - Dansoman, Accra';\n\n  app.appendChild(location);\n\n  return app;\n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/images_Banku_And_Okro_Soup.jpg":
/*!********************************************!*\
  !*** ./src/images_Banku_And_Okro_Soup.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f191ac9217596baea558.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images_Banku_And_Okro_Soup.jpg?");

/***/ }),

/***/ "./src/img_3021ghanas-shito.jpg":
/*!**************************************!*\
  !*** ./src/img_3021ghanas-shito.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"37f83385622104c44bf6.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img_3021ghanas-shito.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\nconst render = (item) => {\n  document.getElementById('content').innerHTML = '';\n\n  const content = document.querySelector('#content');\n  content.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__.default)());\n\n  switch (item) {\n    case 'home':\n      content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.default)());\n      break;\n    case 'menu':\n      content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_5__.default)());\n      break;\n    case 'about':\n      content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_3__.default)());\n      break;\n    case 'contact':\n      content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.default)());\n      break;\n    default:\n      content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.default)());\n  }\n\n  content.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.default)());\n  return content;\n};\n\nrender();\n\ndocument.addEventListener('click', (event) => {\n  if (event.target.className === 'nav-link') {\n    render(event.target.id);\n\n    const navLinks = document.querySelectorAll('.nav-link');\n    navLinks.forEach((navlink) => {\n      navlink.className = 'nav-link';\n      return navlink;\n    });\n\n    const navLink = document.querySelector(`#${event.target.id}`);\n    navLink.classList.add('active');\n  }\n});\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _Ghana_Waakye_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ghana_Waakye.jpg */ \"./src/Ghana_Waakye.jpg\");\n/* harmony import */ var _ghana_jollof_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ghana_jollof.jpg */ \"./src/ghana_jollof.jpg\");\n/* harmony import */ var _images_Banku_And_Okro_Soup_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images_Banku_And_Okro_Soup.jpg */ \"./src/images_Banku_And_Okro_Soup.jpg\");\n/* harmony import */ var _img_3021ghanas_shito_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img_3021ghanas-shito.jpg */ \"./src/img_3021ghanas-shito.jpg\");\n\n\n\n\n\nfunction menu() {\n  const app = document.createElement('div');\n  const classes = ['app', 'container'];\n  app.classList.add(...classes);\n\n  const title = document.createElement('h1');\n  title.textContent = 'Menu';\n  title.className = 'mb-2';\n\n  app.appendChild(title);\n\n  const menus = [{ name: 'Banku & Okro Stew', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s', image: _images_Banku_And_Okro_Soup_jpg__WEBPACK_IMPORTED_MODULE_2__ }, { name: 'Garden egg stew with boiled yam and plantain', description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', image: _img_3021ghanas_shito_jpg__WEBPACK_IMPORTED_MODULE_3__ }, { name: 'Ghana Jollof', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable', image: _ghana_jollof_jpg__WEBPACK_IMPORTED_MODULE_1__ }, { name: 'Waakye', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: _Ghana_Waakye_jpg__WEBPACK_IMPORTED_MODULE_0__ }];\n\n  for (let i = 0; i < menus.length; i += 1) {\n    const row = document.createElement('div');\n    row.className = 'row';\n\n    const col12 = document.createElement('div');\n    const classesCol12 = ['col-12', 'mt-3', 'mx-2'];\n    col12.classList.add(...classesCol12);\n\n    const card = document.createElement('div');\n    card.className = 'card';\n\n    const cardHorizontal = document.createElement('div');\n    cardHorizontal.className = 'card-horizontal';\n\n    const imgWrapper = document.createElement('div');\n    imgWrapper.className = 'col-12 col-sm-3';\n\n    const cardImg = document.createElement('img');\n    cardImg.src = menus[i].image;\n    cardImg.alt = 'Card image cap';\n\n    imgWrapper.appendChild(cardImg);\n\n    const cardBody = document.createElement('div');\n    cardBody.className = 'card-body col-12 col-sm-9';\n\n    const cardTitle = document.createElement('h4');\n    cardTitle.className = 'card-title';\n    cardTitle.textContent = menus[i].name;\n\n    const cardText = document.createElement('p4');\n    cardText.className = 'card-text';\n    cardText.textContent = menus[i].description;\n\n    const btnDiv = document.createElement('div');\n    const orderBtn = document.createElement('button');\n    orderBtn.className = 'btn btn-success btn-md mt-2';\n    orderBtn.textContent = 'Order Now';\n\n    btnDiv.appendChild(orderBtn);\n\n    cardBody.appendChild(cardTitle);\n    cardBody.appendChild(cardText);\n    cardBody.appendChild(btnDiv);\n\n    cardHorizontal.appendChild(imgWrapper);\n    cardHorizontal.appendChild(cardBody);\n\n    card.appendChild(cardHorizontal);\n    col12.appendChild(card);\n    row.appendChild(col12);\n    app.appendChild(row);\n  }\n\n  return app;\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
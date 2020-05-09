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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: \"AGaramondProItalic\";\n  src: url(" + __webpack_require__(6) + "); }\n\nbody {\n  margin: 0px; }\n\n#site {\n  font-family: \"helveticaNeue\";\n  font-size: 18px; }\n\n.max-width-wrapper {\n  max-width: 1392px;\n  margin: 0px auto; }\n\n.content-wrapper {\n  margin: 0px 169px; }\n\n.content-section {\n  margin: 0px -169px;\n  padding-left: 169px;\n  padding-right: 169px; }\n\nh1 {\n  font-size: 60px;\n  font-weight: bold;\n  font-style: normal;\n  font-family: HelveticaNeue;\n  text-transform: uppercase; }\n\nh2 {\n  font-family: \"AGaramondProItalic\";\n  font-style: italic;\n  font-weight: lighter;\n  font-size: 30px;\n  margin-top: 0px; }\n\nh3 {\n  font-size: 34px;\n  font-weight: bold;\n  font-style: normal;\n  font-family: HelveticaNeue;\n  text-transform: uppercase; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\np {\n  font-style: HelveticaNeue;\n  font-weight: lighter; }\n\ninput {\n  background-color: transparent;\n  outline: 0;\n  border: 0;\n  border-radius: 0;\n  font-size: 24px;\n  font-weight: lighter;\n  line-height: 50px; }\n\n.video-rows {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n  .video-rows .video-small-with-caption {\n    width: calc(100%/6);\n    margin-bottom: 3em;\n    margin-top: 1em; }\n    .video-rows .video-small-with-caption .small-video-thumb {\n      background: linear-gradient(to bottom right, #19B5FE, #36D7B7);\n      /* Standard syntax */\n      height: 150px; }\n  .video-rows .video-large-with-caption .large-video-thumb {\n    position: relative;\n    background-size: cover;\n    height: 250px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .video-rows .video-large-with-caption .large-video-thumb .play-icon {\n      position: relative;\n      height: 80px;\n      width: 80px;\n      border: 2px solid white;\n      border-radius: 50px;\n      transition: 0.5s ease-in-out;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start; }\n      .video-rows .video-large-with-caption .large-video-thumb .play-icon .css-play {\n        margin-left: 33px;\n        width: 0;\n        height: 0;\n        border-top: 15px solid transparent;\n        border-bottom: 15px solid transparent;\n        border-left: 22.5px solid white;\n        transition: 0.5s ease-in-out; }\n      .video-rows .video-large-with-caption .large-video-thumb .play-icon .play-text {\n        transition: 0.25s ease-in-out;\n        font-style: italic;\n        font-weight: lighter;\n        font-family: \"AGaramondProItalic\";\n        opacity: 0;\n        color: white;\n        margin-left: 20px; }\n  .video-rows .video-large-with-caption:hover .play-icon {\n    width: 140px; }\n    .video-rows .video-large-with-caption:hover .play-icon .css-play {\n      margin-left: 30px;\n      width: 0;\n      height: 0;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-left: 15px solid white; }\n    .video-rows .video-large-with-caption:hover .play-icon .play-text {\n      opacity: 1;\n      transition: 0.6s ease-in-out; }\n\n.video-thumb-caption {\n  font-size: 16px;\n  padding: 1em; }\n  .video-thumb-caption span {\n    font-weight: bold; }\n\n.btn {\n  border-radius: 50px;\n  padding: 1.25em 3.5em;\n  display: inline-block;\n  cursor: pointer;\n  font-size: 14px;\n  text-transform: uppercase; }\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2em 1em;\n  color: #888;\n  font-size: 16px;\n  max-width: 1892px; }\n  .header .action-button-row {\n    display: flex;\n    align-items: center; }\n    .header .action-button-row .btn {\n      background-color: #888;\n      color: white;\n      padding: 1em 2em;\n      text-transform: none; }\n    .header .action-button-row .action-button {\n      margin: 0px 1em;\n      font-weight: lighter; }\n  .header .contact-and-account {\n    display: flex; }\n    .header .contact-and-account .contact,\n    .header .contact-and-account .account {\n      margin: 0px 1em; }\n\n.stage {\n  padding-top: 10em;\n  padding-bottom: 10em;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: white;\n  background-image: url(" + __webpack_require__(7) + ");\n  background-size: cover; }\n  .stage .stage-hero-text {\n    max-width: 50%; }\n    .stage .stage-hero-text .todays-lesson-desc {\n      margin-top: 1em; }\n    .stage .stage-hero-text .start-lesson-btn {\n      background-color: #eee;\n      margin-top: 4em;\n      color: black;\n      text-transform: none; }\n\n.subscribe-and-download {\n  width: 100%;\n  display: flex; }\n  .subscribe-and-download .subscribe {\n    display: flex;\n    align-items: flex-end;\n    background: black;\n    color: white;\n    width: 75%;\n    padding-left: 169px;\n    margin-left: -169px;\n    padding-top: 7em;\n    padding-bottom: 7em; }\n    .subscribe-and-download .subscribe input {\n      color: white;\n      border-bottom: 1px solid white;\n      width: 100%;\n      margin-top: 1em;\n      transition: 0.5s ease-in-out; }\n      .subscribe-and-download .subscribe input:focus {\n        width: 95%; }\n    .subscribe-and-download .subscribe .left-float {\n      width: 66.66%;\n      padding-right: 4em; }\n      .subscribe-and-download .subscribe .left-float p {\n        max-width: 550px; }\n    .subscribe-and-download .subscribe .right-float {\n      width: 70%; }\n      .subscribe-and-download .subscribe .right-float .btn {\n        margin-right: 10px; }\n      .subscribe-and-download .subscribe .right-float a {\n        text-decoration: underline;\n        margin-left: 10px; }\n    .subscribe-and-download .subscribe .subscribe-btn {\n      border: 1px solid white; }\n  .subscribe-and-download .download-app {\n    width: 25%;\n    padding: 89px;\n    background: url(" + __webpack_require__(8) + ");\n    background-size: cover;\n    padding-right: 169px;\n    margin-right: -169px;\n    margin-bottom: -3em;\n    color: white; }\n    .subscribe-and-download .download-app .btn {\n      border: 1px solid white;\n      margin-top: 3em; }\n\n.more-lessons {\n  margin-top: 5em;\n  margin-bottom: 9em; }\n  .more-lessons .more-lessons-header {\n    margin-top: 3em; }\n  .more-lessons input {\n    border-bottom: 2px solid black;\n    width: 100%;\n    margin-top: 2em; }\n\n.more-lessons-videos {\n  display: flex;\n  flex-direction: column;\n  margin-left: -169px;\n  margin-right: -169px;\n  width: calc(100% + 338px); }\n  .more-lessons-videos .large :first-child .large-video-thumb {\n    background-image: url(" + __webpack_require__(9) + "); }\n  .more-lessons-videos .large :nth-child(2) .large-video-thumb {\n    background-image: url(" + __webpack_require__(10) + "); }\n  .more-lessons-videos .large :nth-child(3) .large-video-thumb {\n    background-image: url(" + __webpack_require__(11) + "); }\n  .more-lessons-videos .large :nth-child(4) .large-video-thumb {\n    background-image: url(" + __webpack_require__(12) + "); }\n  .more-lessons-videos .large-video-row {\n    display: flex;\n    flex-direction: row; }\n  .more-lessons-videos .video-large-with-caption {\n    width: 25%;\n    transition: 0.5s ease-in-out; }\n    .more-lessons-videos .video-large-with-caption:hover {\n      transform: scale(1.05); }\n    .more-lessons-videos .video-large-with-caption .video-thumb-caption {\n      padding: 50px; }\n  .more-lessons-videos .see-all-row {\n    width: 100%;\n    text-align: center;\n    margin-top: 3em;\n    margin-bottom: 7em; }\n    .more-lessons-videos .see-all-row .see-all {\n      border-bottom: 3px solid black; }\n\n.topics-to-choose {\n  width: 100%;\n  background: black;\n  position: relative;\n  padding-top: 3em;\n  padding-bottom: 3em; }\n  .topics-to-choose .topics-to-choose-header {\n    font-size: 2em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .topics-to-choose .video-thumb-caption {\n    color: white; }\n  .topics-to-choose .topics-to-choose-more-topics {\n    position: absolute;\n    right: 0px;\n    bottom: -90px;\n    color: white;\n    background-color: black;\n    padding: 2em 1em;\n    width: 33.33%; }\n\n.recommended-for-you {\n  width: 100%;\n  margin-top: 12em;\n  margin-bottom: 10em; }\n  .recommended-for-you .recommended-for-you-header {\n    color: black; }\n\n.footer {\n  width: 100%;\n  height: 1000px;\n  background-image: url(" + __webpack_require__(13) + ");\n  background-size: contain;\n  background-position: top; }\n", ""]);

	// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/34a307ef35e53fcef6396b6ca1a25324.ttf";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/cab53d26a41a4483c6910d1c0b04fd06.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/d9c8271c1eae7d17b9c1987c27da555c.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/9b34492111d698dcc9a229da5c44af04.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/1c3ec4d614a3b917447742c39fb16b31.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/c0cd16546321dbefd285e748e18a1a3a.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/69b11778e180d8e2dd125d8170c6f57e.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/47c138d01509089a0e3eee749345cea2.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./node_modules/semantic-ui-css/semantic.min.css
var semantic_min = __webpack_require__("xMo/");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__("biE2");

// CONCATENATED MODULE: ./components/Footer.js





const Footer = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Segment"], {
  inverted: true,
  style: {
    padding: '5em 0em'
  },
  vertical: true,
  attached: "bottom",
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Container"], {
    textAlign: "center",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"], {
      columns: 3,
      divided: true,
      stackable: true,
      inverted: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"].Row, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"].Column, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Header"], {
            inverted: true,
            as: "h4",
            content: "Project 1"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["List"], {
            link: true,
            inverted: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link One"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Two"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Three"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Four"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"].Column, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Header"], {
            inverted: true,
            as: "h4",
            content: "Project 2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["List"], {
            link: true,
            inverted: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link One"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Two"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Three"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Four"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"].Column, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Header"], {
            inverted: true,
            as: "h4",
            content: "Project 3"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["List"], {
            link: true,
            inverted: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link One"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Two"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Three"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"].Item, {
              as: "a",
              children: "Link Four"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Divider"], {
      inverted: true,
      section: true
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["List"], {
      horizontal: true,
      inverted: true,
      divided: true,
      link: true,
      size: "small",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Header"], {
        inverted: true,
        as: "h4",
        content: "Contact Me!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Email: JacobTDayton@gmail.com"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Divider"], {
      inverted: true,
      section: true
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["List"], {
      horizontal: true,
      inverted: true,
      divided: true,
      link: true,
      size: "small"
    })]
  })
});

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Footer, {})]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "xMo/":
/***/ (function(module, exports) {



/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });
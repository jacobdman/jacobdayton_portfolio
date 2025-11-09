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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/jacobdayton/Projects/jacobdayton.com/components/Navbar.js\";\n\n\n\n\nconst routes = [{\n  name: 'Home',\n  route: '/'\n}, {\n  name: 'About',\n  route: '/about'\n}, {\n  name: 'Portfolio',\n  route: '/portfolio'\n}, {\n  name: 'Blog',\n  route: '/blog'\n}];\n\nconst Navbar = () => {\n  const {\n    0: fixed,\n    1: setFixed\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Visibility\"], {\n    onTopPassed: () => setFixed(true),\n    onTopVisible: () => setFixed(false),\n    once: false,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Segment\"], {\n      inverted: true,\n      textAlign: \"center\",\n      vertical: true,\n      style: {\n        position: fixed ? 'fixed' : 'relative',\n        top: 0,\n        width: '100%',\n        zIndex: 9999\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"], {\n        inverted: true,\n        secondary: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n          children: routes.map(route => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: route.route,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n              active: router.pathname === route.route,\n              children: route.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbInJvdXRlcyIsIm5hbWUiLCJyb3V0ZSIsIk5hdmJhciIsImZpeGVkIiwic2V0Rml4ZWQiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJ6SW5kZXgiLCJtYXAiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUEsTUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsTUFBSSxFQUFFLE1BRFI7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FEYSxFQUtiO0FBQ0VELE1BQUksRUFBRSxPQURSO0FBRUVDLE9BQUssRUFBRTtBQUZULENBTGEsRUFTYjtBQUNFRCxNQUFJLEVBQUUsV0FEUjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQVRhLEVBYWI7QUFDRUQsTUFBSSxFQUFFLE1BRFI7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FiYSxDQUFmOztBQW1CQSxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsS0FBRCxDQUFsQztBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxzQkFDRSxxRUFBQyw0REFBRDtBQUNFLGVBQVcsRUFBRSxNQUFNSCxRQUFRLENBQUMsSUFBRCxDQUQ3QjtBQUVFLGdCQUFZLEVBQUUsTUFBTUEsUUFBUSxDQUFDLEtBQUQsQ0FGOUI7QUFHRSxRQUFJLEVBQUUsS0FIUjtBQUFBLDJCQUtFLHFFQUFDLHlEQUFEO0FBQ0UsY0FBUSxNQURWO0FBRUUsZUFBUyxFQUFDLFFBRlo7QUFHRSxjQUFRLE1BSFY7QUFJRSxXQUFLLEVBQUU7QUFDTEksZ0JBQVEsRUFBRUwsS0FBSyxHQUFHLE9BQUgsR0FBYSxVQUR2QjtBQUVMTSxXQUFHLEVBQUUsQ0FGQTtBQUdMQyxhQUFLLEVBQUUsTUFIRjtBQUlMQyxjQUFNLEVBQUU7QUFKSCxPQUpUO0FBQUEsNkJBV0UscUVBQUMsc0RBQUQ7QUFBTSxnQkFBUSxNQUFkO0FBQWUsaUJBQVMsTUFBeEI7QUFBQSwrQkFDRSxxRUFBQywyREFBRDtBQUFBLG9CQU1HWixNQUFNLENBQUNhLEdBQVAsQ0FBWVgsS0FBRCxpQkFDVixxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUVBLEtBQUssQ0FBQ0EsS0FBbEI7QUFBQSxtQ0FDRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxvQkFBTSxFQUFFSyxNQUFNLENBQUNPLFFBQVAsS0FBb0JaLEtBQUssQ0FBQ0EsS0FBN0M7QUFBQSx3QkFDR0EsS0FBSyxDQUFDRDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0RELENBckREOztBQXVEZUUscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBNZW51LFxuICBTZWdtZW50LFxuICBJY29uLFxuICBWaXNpYmlsaXR5LFxuICBIZWFkZXIsXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgbmFtZTogJ0hvbWUnLFxuICAgIHJvdXRlOiAnLycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQWJvdXQnLFxuICAgIHJvdXRlOiAnL2Fib3V0JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQb3J0Zm9saW8nLFxuICAgIHJvdXRlOiAnL3BvcnRmb2xpbycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmxvZycsXG4gICAgcm91dGU6ICcvYmxvZycsXG4gIH0sXG5dO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8VmlzaWJpbGl0eVxuICAgICAgb25Ub3BQYXNzZWQ9eygpID0+IHNldEZpeGVkKHRydWUpfVxuICAgICAgb25Ub3BWaXNpYmxlPXsoKSA9PiBzZXRGaXhlZChmYWxzZSl9XG4gICAgICBvbmNlPXtmYWxzZX1cbiAgICA+XG4gICAgICA8U2VnbWVudFxuICAgICAgICBpbnZlcnRlZFxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCA/ICdmaXhlZCcgOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgc2Vjb25kYXJ5PlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICB7Lyoge2ZpeGVkICYmIChcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPVwiaDFcIj5KYWNvYiBEYXl0b248L0hlYWRlcj5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgIHtyb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZS5yb3V0ZX0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gcm91dGUucm91dGV9PlxuICAgICAgICAgICAgICAgICAge3JvdXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgey8qIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vamFjb2JkbWFuJywgJ19ibGFuaycpfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZ2l0aHViXCIgLz5cbiAgICAgICAgICAgICAgICBHaXRodWJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWVtJywgYmFja2dyb3VuZDogJyNmYzZkMjYnIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGxhYi5jb20vamFjb2JkbWFuJywgJ19ibGFuaycpfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZ2l0bGFiXCIgLz5cbiAgICAgICAgICAgICAgICBHaXRsYWJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC41ZW0nIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFjb2JkYXl0b24vJywgJ19ibGFuaycpfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibGlua2VkaW5cIiAvPlxuICAgICAgICAgICAgICAgIExpbmtlZEluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+ICovfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9WaXNpYmlsaXR5PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jacobdayton/Projects/jacobdayton.com/pages/about.js\";\n\n // import profilePic from 'public/profile-picture.png'\n\nconst About = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Segment\"], {\n    tertiary: true,\n    attached: true,\n    style: {\n      minHeight: 'calc(100vh - 415.86px)'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      textAlign: \"center\",\n      text: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        src: __webpack_require__(/*! public/profile-picture.png */ \"./public/profile-picture.png\"),\n        size: \"medium\",\n        circular: true,\n        centered: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n        as: \"h1\",\n        children: \"Jacob Dayton\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      textAlign: \"center\",\n      text: true,\n      children: [\"Jacob Dayton is a full stack developer who hates writing in third person. After graduating from high-school early with a GED and several college credits, Jacob attended a coding bootcamp at DevMountain. After graduating from DevMountain he quickly got a job at Solo as a junior developer.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }, undefined), \"Outside of development, Jacob is a skilled musician currently playing the drums with several bands around Utah Valley. He also enjoys reading books about finance and business, ancient history, and Middle Earth.\\xA0\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 6,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwibWluSGVpZ2h0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtDQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxtQkFDWjtBQUFBLDBCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHlEQUFEO0FBQVMsWUFBUSxNQUFqQjtBQUFrQixZQUFRLE1BQTFCO0FBQTJCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFsQztBQUFBLDRCQUNFLHFFQUFDLDJEQUFEO0FBQVcsZUFBUyxFQUFDLFFBQXJCO0FBQThCLFVBQUksTUFBbEM7QUFBQSw4QkFDRSxxRUFBQyx1REFBRDtBQUNFLFdBQUcsRUFBRUMsbUJBQU8sQ0FBQyxnRUFBRCxDQURkO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxnQkFBUSxNQUhWO0FBSUUsZ0JBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0UscUVBQUMsd0RBQUQ7QUFBUSxVQUFFLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBV0UscUVBQUMsMkRBQUQ7QUFBVyxlQUFTLEVBQUMsUUFBckI7QUFBOEIsVUFBSSxNQUFsQztBQUFBLGtVQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFFUTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUEwQmVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJ2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCB7IFNlZ21lbnQsIEltYWdlLCBDb250YWluZXIsIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0Jztcbi8vIGltcG9ydCBwcm9maWxlUGljIGZyb20gJ3B1YmxpYy9wcm9maWxlLXBpY3R1cmUucG5nJ1xuXG5jb25zdCBBYm91dCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8TmF2YmFyIC8+XG4gICAgPFNlZ21lbnQgdGVydGlhcnkgYXR0YWNoZWQgc3R5bGU9e3sgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDQxNS44NnB4KScgfX0+XG4gICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj1cImNlbnRlclwiIHRleHQ+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17cmVxdWlyZSgncHVibGljL3Byb2ZpbGUtcGljdHVyZS5wbmcnKX1cbiAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICBjaXJjdWxhclxuICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxIZWFkZXIgYXM9XCJoMVwiPkphY29iIERheXRvbjwvSGVhZGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8YnIgLz5cbiAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgdGV4dD5cbiAgICAgICAgSmFjb2IgRGF5dG9uIGlzIGEgZnVsbCBzdGFjayBkZXZlbG9wZXIgd2hvIGhhdGVzIHdyaXRpbmcgaW4gdGhpcmQgcGVyc29uLiBBZnRlciBncmFkdWF0aW5nIGZyb20gaGlnaC1zY2hvb2wgZWFybHkgd2l0aCBhIEdFRCBhbmQgc2V2ZXJhbCBjb2xsZWdlIGNyZWRpdHMsIEphY29iIGF0dGVuZGVkIGEgY29kaW5nIGJvb3RjYW1wIGF0IERldk1vdW50YWluLiBBZnRlciBncmFkdWF0aW5nIGZyb20gRGV2TW91bnRhaW4gaGUgcXVpY2tseSBnb3QgYSBqb2IgYXQgU29sbyBhcyBhIGp1bmlvciBkZXZlbG9wZXIuIFxuICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgT3V0c2lkZSBvZiBkZXZlbG9wbWVudCwgSmFjb2IgaXMgYSBza2lsbGVkIG11c2ljaWFuIGN1cnJlbnRseSBwbGF5aW5nIHRoZSBkcnVtcyB3aXRoIHNldmVyYWwgYmFuZHMgYXJvdW5kIFV0YWggVmFsbGV5LiBIZSBhbHNvIGVuam95cyByZWFkaW5nIGJvb2tzIGFib3V0IGZpbmFuY2UgYW5kIGJ1c2luZXNzLCBhbmNpZW50IGhpc3RvcnksIGFuZCBNaWRkbGUgRWFydGguwqBcbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgey8qIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgdGV4dD5cbiAgICAgICAgU29jYWlsIExpbmtzXG4gICAgICA8L0NvbnRhaW5lcj4gKi99XG4gICAgPC9TZWdtZW50PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "./public/profile-picture.png":
/*!************************************!*\
  !*** ./public/profile-picture.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/profile-picture-6c03c7e87a0cbe9e470749bc02a929c2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvZmlsZS1waWN0dXJlLnBuZz8yYTUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcHVibGljL3Byb2ZpbGUtcGljdHVyZS5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvZmlsZS1waWN0dXJlLTZjMDNjN2U4N2EwY2JlOWU0NzA3NDliYzAyYTkyOWMyLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/profile-picture.png\n");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIj9lYzk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/Link\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });
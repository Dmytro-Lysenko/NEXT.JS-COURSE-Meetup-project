webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/home/dima/Desktop/React practice/NEXT.JS/06-onwards-to-a-bigger-project-starting-project/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n//our domain.com/\n\n\nvar DUMMY_MEETUPS = [{\n  id: \"m1\",\n  title: \"A first meet up\",\n  image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Budapest%2C_Hungary_%28explored%29_%2814995308504%29.jpg/1200px-Budapest%2C_Hungary_%28explored%29_%2814995308504%29.jpg\",\n  adress: \"Some address 5, 12345\",\n  description: \"This is the very first meetup\"\n}, {\n  id: \"m2\",\n  title: \"A second meet up\",\n  image: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wXqOcUYK9UZhS7XTn73h8-MSI-pftZ1Nyg&usqp=CAU\",\n  adress: \"Some address 22, 12345\",\n  description: \"This is the very second meetup\"\n}, {\n  id: \"m3\",\n  title: \"A third meet up\",\n  image: \"https://discover-ukraine.info/uploads/i/i/4eea45b07360e4.83381928.100.jpg\",\n  adress: \"Some address 2333, 12345\",\n  description: \"This is the vthird meetup\"\n}];\n\nvar HomePage = function HomePage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      loadedMeetups = _useState[0],\n      setLoadedMeetups = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // send http request\n    setLoadedMeetups(DUMMY_MEETUPS);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: DUMMY_MEETUPS\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkZWRNZWV0dXBzIiwic2V0TG9hZGVkTWVldHVwcyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNILG9MQUpKO0FBS0VDLFFBQU0sRUFBRSx1QkFMVjtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQURvQixFQVVwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUNILHFHQUpKO0FBS0VDLFFBQU0sRUFBRSx3QkFMVjtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVZvQixFQW1CcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCwyRUFKSjtBQUtFQyxRQUFNLEVBQUUsMEJBTFY7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FuQm9CLENBQXRCOztBQTZCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUR4QjtBQUFBLE1BQ25CQyxhQURtQjtBQUFBLE1BQ0pDLGdCQURJOztBQUcxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQUQsb0JBQWdCLENBQUNWLGFBQUQsQ0FBaEI7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBVEQ7O0dBQU1NLFE7O0tBQUFBLFE7O0FBb0JTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9vdXIgZG9tYWluLmNvbS9cblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gIHtcbiAgICBpZDogXCJtMVwiLFxuICAgIHRpdGxlOiBcIkEgZmlyc3QgbWVldCB1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzkvOWQvQnVkYXBlc3QlMkNfSHVuZ2FyeV8lMjhleHBsb3JlZCUyOV8lMjgxNDk5NTMwODUwNCUyOS5qcGcvMTIwMHB4LUJ1ZGFwZXN0JTJDX0h1bmdhcnlfJTI4ZXhwbG9yZWQlMjlfJTI4MTQ5OTUzMDg1MDQlMjkuanBnXCIsXG4gICAgYWRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHZlcnkgZmlyc3QgbWVldHVwXCIsXG4gIH0sXG5cbiAge1xuICAgIGlkOiBcIm0yXCIsXG4gICAgdGl0bGU6IFwiQSBzZWNvbmQgbWVldCB1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSMndYcU9jVVlLOVVaaFM3WFRuNzNoOC1NU0ktcGZ0WjFOeWcmdXNxcD1DQVVcIixcbiAgICBhZHJlc3M6IFwiU29tZSBhZGRyZXNzIDIyLCAxMjM0NVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHZlcnkgc2Vjb25kIG1lZXR1cFwiLFxuICB9LFxuXG4gIHtcbiAgICBpZDogXCJtM1wiLFxuICAgIHRpdGxlOiBcIkEgdGhpcmQgbWVldCB1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2Rpc2NvdmVyLXVrcmFpbmUuaW5mby91cGxvYWRzL2kvaS80ZWVhNDViMDczNjBlNC44MzM4MTkyOC4xMDAuanBnXCIsXG4gICAgYWRyZXNzOiBcIlNvbWUgYWRkcmVzcyAyMzMzLCAxMjM0NVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHZ0aGlyZCBtZWV0dXBcIixcbiAgfSxcbl07XG5cbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNlbmQgaHR0cCByZXF1ZXN0XG4gICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtEVU1NWV9NRUVUVVBTfSAvPjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n//our-domain.com/\n\n\n// const DUMMY_MEETUPS = [\n//   {\n//     id: \"m1\",\n//     title: \"A First Meetup!\",\n//     image:\n//       \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n//     address: \"Some address 5, 1234, some city, 7477\",\n//     description: \"This is a first meetup\",\n//   },\n//   {\n//     id: \"m2\",\n//     title: \"A Second Meetup!\",\n//     image:\n//       \"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQANBkg1iI9VoQb8aFlgi4dmk4IgsJOB2aXgeZBnL5kfXXz4Lh59yblx6IJe7jLlqE2\",\n//     address: \"Some address 5, 1234, some city, 998\",\n//     description: \"This is a second meetup\",\n//   },\n//   {\n//     id: \"m3\",\n//     title: \"A Third Meetup\",\n//     image:\n//       \"https://upload.wikimedia.org/wikipedia/commons/e/e2/Avinguda_de_la_Reina_Maria_Cristina_Barcelona_2013.jpg\",\n//     address: \"Some address 5, 1234, some city, 2112\",\n//     description:\n//       \"Granada is a city in southern Spain’s Andalusia region, in the foothills of the Sierra Nevada mountains. It's known for grand examples of medieval architecture dating to the Moorish occupation, especially the Alhambra. This sprawling hilltop fortress complex encompasses royal palaces, serene patios, and reflecting pools from the Nasrid dynasty, as well as the fountains and orchards of the Generalife gardens.\",\n//   },\n// ];\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"/Users/saberahmadi/Desktop/Meetup-Nextjs/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaUJBQWlCOztBQUV5QztBQUUxRCwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQixnQ0FBZ0M7QUFDaEMsYUFBYTtBQUNiLDBGQUEwRjtBQUMxRix3REFBd0Q7QUFDeEQsNkNBQTZDO0FBQzdDLE9BQU87QUFFUCxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLGlDQUFpQztBQUNqQyxhQUFhO0FBQ2IsZ0lBQWdJO0FBQ2hJLHVEQUF1RDtBQUN2RCw4Q0FBOEM7QUFDOUMsT0FBTztBQUVQLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsK0JBQStCO0FBQy9CLGFBQWE7QUFDYixzSEFBc0g7QUFDdEgsd0RBQXdEO0FBQ3hELG1CQUFtQjtBQUNuQix1YUFBdWE7QUFDdmEsT0FBTztBQUNQLEtBQUs7QUFFTCxTQUFTQyxTQUFTQyxLQUFLO0lBQ3JCLHFCQUFPLDhEQUFDRixzRUFBVUE7UUFBQ0csU0FBU0QsTUFBTUMsT0FBTzs7Ozs7O0FBQzNDO0tBRlNGOztBQTRDVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vb3VyLWRvbWFpbi5jb20vXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcblxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbi8vICAge1xuLy8gICAgIGlkOiBcIm0xXCIsXG4vLyAgICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXAhXCIsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxuLy8gICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDUsIDEyMzQsIHNvbWUgY2l0eSwgNzQ3N1wiLFxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXBcIixcbi8vICAgfSxcblxuLy8gICB7XG4vLyAgICAgaWQ6IFwibTJcIixcbi8vICAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXAhXCIsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICBcImh0dHBzOi8vdDIuZ3N0YXRpYy5jb20vbGljZW5zZWQtaW1hZ2U/cT10Ym46QU5kOUdjUUFOQmtnMWlJOVZvUWI4YUZsZ2k0ZG1rNElnc0pPQjJhWGdlWkJuTDVrZlhYejRMaDU5eWJseDZJSmU3akxscUUyXCIsXG4vLyAgICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNCwgc29tZSBjaXR5LCA5OThcIixcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cFwiLFxuLy8gICB9LFxuXG4vLyAgIHtcbi8vICAgICBpZDogXCJtM1wiLFxuLy8gICAgIHRpdGxlOiBcIkEgVGhpcmQgTWVldHVwXCIsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZS9lMi9BdmluZ3VkYV9kZV9sYV9SZWluYV9NYXJpYV9DcmlzdGluYV9CYXJjZWxvbmFfMjAxMy5qcGdcIixcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0LCBzb21lIGNpdHksIDIxMTJcIixcbi8vICAgICBkZXNjcmlwdGlvbjpcbi8vICAgICAgIFwiR3JhbmFkYSBpcyBhIGNpdHkgaW4gc291dGhlcm4gU3BhaW7igJlzIEFuZGFsdXNpYSByZWdpb24sIGluIHRoZSBmb290aGlsbHMgb2YgdGhlIFNpZXJyYSBOZXZhZGEgbW91bnRhaW5zLiBJdCdzIGtub3duIGZvciBncmFuZCBleGFtcGxlcyBvZiBtZWRpZXZhbCBhcmNoaXRlY3R1cmUgZGF0aW5nIHRvIHRoZSBNb29yaXNoIG9jY3VwYXRpb24sIGVzcGVjaWFsbHkgdGhlIEFsaGFtYnJhLiBUaGlzIHNwcmF3bGluZyBoaWxsdG9wIGZvcnRyZXNzIGNvbXBsZXggZW5jb21wYXNzZXMgcm95YWwgcGFsYWNlcywgc2VyZW5lIHBhdGlvcywgYW5kIHJlZmxlY3RpbmcgcG9vbHMgZnJvbSB0aGUgTmFzcmlkIGR5bmFzdHksIGFzIHdlbGwgYXMgdGhlIGZvdW50YWlucyBhbmQgb3JjaGFyZHMgb2YgdGhlIEdlbmVyYWxpZmUgZ2FyZGVucy5cIixcbi8vICAgfSxcbi8vIF07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcblxuLy8gICAvL2ZldGNoIGRhdGEgZnJvbSBhbiBBUElcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYWRtaW46S2JJUkJSOFpkZzE5eTNLV0BjbHVzdGVyMC51OHB3dHNnLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgLy9yZWFjaCB0byBtZWV0dXBzIENvbGxlY3Rpb25zXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
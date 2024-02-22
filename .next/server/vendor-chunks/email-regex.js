"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/email-regex";
exports.ids = ["vendor-chunks/email-regex"];
exports.modules = {
  /***/ "(ssr)/../node_modules/email-regex/index.js":
    /*!********************************************!*\
  !*** ../node_modules/email-regex/index.js ***!
  \********************************************/
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ emailRegex)\n/* harmony export */ });\nconst regex = "[^\\\\.\\\\s@:](?:[^\\\\s@:]*[^\\\\s@:\\\\.])?@[^\\\\.\\\\s@]+(?:\\\\.[^\\\\.\\\\s@]+)*";\nfunction emailRegex({ exact } = {}) {\n    return exact ? new RegExp(`^${regex}$`) : new RegExp(regex, "g");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2VtYWlsLXJlZ2V4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxRQUFRO0FBRUMsU0FBU0MsV0FBVyxFQUFDQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsT0FBT0EsUUFBUSxJQUFJQyxPQUFPLENBQUMsQ0FBQyxFQUFFSCxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUlHLE9BQU9ILE9BQU87QUFDN0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNraHViYi8uLi9ub2RlX21vZHVsZXMvZW1haWwtcmVnZXgvaW5kZXguanM/OWJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWdleCA9ICdbXlxcXFwuXFxcXHNAOl0oPzpbXlxcXFxzQDpdKlteXFxcXHNAOlxcXFwuXSk/QFteXFxcXC5cXFxcc0BdKyg/OlxcXFwuW15cXFxcLlxcXFxzQF0rKSonO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbWFpbFJlZ2V4KHtleGFjdH0gPSB7fSkge1xuXHRyZXR1cm4gZXhhY3QgPyBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCkgOiBuZXcgUmVnRXhwKHJlZ2V4LCAnZycpO1xufVxuIl0sIm5hbWVzIjpbInJlZ2V4IiwiZW1haWxSZWdleCIsImV4YWN0IiwiUmVnRXhwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/email-regex/index.js\n',
      );

      /***/
    },
};

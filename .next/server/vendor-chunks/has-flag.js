"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-flag";
exports.ids = ["vendor-chunks/has-flag"];
exports.modules = {
  /***/ "(ssr)/../node_modules/has-flag/index.js":
    /*!*****************************************!*\
  !*** ../node_modules/has-flag/index.js ***!
  \*****************************************/
    /***/ (module) => {
      eval(
        '\nmodule.exports = (flag, argv)=>{\n    argv = argv || process.argv;\n    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";\n    const pos = argv.indexOf(prefix + flag);\n    const terminatorPos = argv.indexOf("--");\n    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLE9BQU9DLE9BQU8sR0FBRyxDQUFDQyxNQUFNQztJQUN2QkEsT0FBT0EsUUFBUUMsUUFBUUQsSUFBSTtJQUMzQixNQUFNRSxTQUFTSCxLQUFLSSxVQUFVLENBQUMsT0FBTyxLQUFNSixLQUFLSyxNQUFNLEtBQUssSUFBSSxNQUFNO0lBQ3RFLE1BQU1DLE1BQU1MLEtBQUtNLE9BQU8sQ0FBQ0osU0FBU0g7SUFDbEMsTUFBTVEsZ0JBQWdCUCxLQUFLTSxPQUFPLENBQUM7SUFDbkMsT0FBT0QsUUFBUSxDQUFDLEtBQU1FLENBQUFBLGtCQUFrQixDQUFDLElBQUksT0FBT0YsTUFBTUUsYUFBWTtBQUN2RSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2todWJiLy4uL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcz8zYWY4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKGZsYWcsIGFyZ3YpID0+IHtcblx0YXJndiA9IGFyZ3YgfHwgcHJvY2Vzcy5hcmd2O1xuXHRjb25zdCBwcmVmaXggPSBmbGFnLnN0YXJ0c1dpdGgoJy0nKSA/ICcnIDogKGZsYWcubGVuZ3RoID09PSAxID8gJy0nIDogJy0tJyk7XG5cdGNvbnN0IHBvcyA9IGFyZ3YuaW5kZXhPZihwcmVmaXggKyBmbGFnKTtcblx0Y29uc3QgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvcyAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3MgPT09IC0xID8gdHJ1ZSA6IHBvcyA8IHRlcm1pbmF0b3JQb3MpO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZmxhZyIsImFyZ3YiLCJwcm9jZXNzIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImxlbmd0aCIsInBvcyIsImluZGV4T2YiLCJ0ZXJtaW5hdG9yUG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/has-flag/index.js\n',
      );

      /***/
    },
};

"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/attr-accept";
exports.ids = ["vendor-chunks/attr-accept"];
exports.modules = {
  /***/ "(ssr)/../node_modules/attr-accept/dist/es/index.js":
    /*!****************************************************!*\
  !*** ../node_modules/attr-accept/dist/es/index.js ***!
  \****************************************************/
    /***/ (__unused_webpack_module, exports) => {
      eval(
        '\nexports.__esModule = true;\nexports["default"] = function(file, acceptedFiles) {\n    if (file && acceptedFiles) {\n        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");\n        var fileName = file.name || "";\n        var mimeType = (file.type || "").toLowerCase();\n        var baseMimeType = mimeType.replace(/\\/.*$/, "");\n        return acceptedFilesArray.some(function(type) {\n            var validType = type.trim().toLowerCase();\n            if (validType.charAt(0) === ".") {\n                return fileName.toLowerCase().endsWith(validType);\n            } else if (validType.endsWith("/*")) {\n                // This is something like a image/* mime type\n                return baseMimeType === validType.replace(/\\/.*$/, "");\n            }\n            return mimeType === validType;\n        });\n    }\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2F0dHItYWNjZXB0L2Rpc3QvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFFYkEsa0JBQWtCLEdBQUc7QUFFckJBLGtCQUFlLEdBQUcsU0FBVUcsSUFBSSxFQUFFQyxhQUFhO0lBQzdDLElBQUlELFFBQVFDLGVBQWU7UUFDekIsSUFBSUMscUJBQXFCQyxNQUFNQyxPQUFPLENBQUNILGlCQUFpQkEsZ0JBQWdCQSxjQUFjSSxLQUFLLENBQUM7UUFDNUYsSUFBSUMsV0FBV04sS0FBS08sSUFBSSxJQUFJO1FBQzVCLElBQUlDLFdBQVcsQ0FBQ1IsS0FBS1MsSUFBSSxJQUFJLEVBQUMsRUFBR0MsV0FBVztRQUM1QyxJQUFJQyxlQUFlSCxTQUFTSSxPQUFPLENBQUMsU0FBUztRQUM3QyxPQUFPVixtQkFBbUJXLElBQUksQ0FBQyxTQUFVSixJQUFJO1lBQzNDLElBQUlLLFlBQVlMLEtBQUtNLElBQUksR0FBR0wsV0FBVztZQUV2QyxJQUFJSSxVQUFVRSxNQUFNLENBQUMsT0FBTyxLQUFLO2dCQUMvQixPQUFPVixTQUFTSSxXQUFXLEdBQUdPLFFBQVEsQ0FBQ0g7WUFDekMsT0FBTyxJQUFJQSxVQUFVRyxRQUFRLENBQUMsT0FBTztnQkFDbkMsNkNBQTZDO2dCQUM3QyxPQUFPTixpQkFBaUJHLFVBQVVGLE9BQU8sQ0FBQyxTQUFTO1lBQ3JEO1lBRUEsT0FBT0osYUFBYU07UUFDdEI7SUFDRjtJQUVBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2todWJiLy4uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2VzL2luZGV4LmpzPzA3YjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmaWxlLCBhY2NlcHRlZEZpbGVzKSB7XG4gIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcbiAgICB2YXIgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZS5uYW1lIHx8ICcnO1xuICAgIHZhciBtaW1lVHlwZSA9IChmaWxlLnR5cGUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGJhc2VNaW1lVHlwZSA9IG1pbWVUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcbiAgICByZXR1cm4gYWNjZXB0ZWRGaWxlc0FycmF5LnNvbWUoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHZhciB2YWxpZFR5cGUgPSB0eXBlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKHZhbGlkVHlwZSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbGlkVHlwZS5lbmRzV2l0aCgnLyonKSkge1xuICAgICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlIGEgaW1hZ2UvKiBtaW1lIHR5cGVcbiAgICAgICAgcmV0dXJuIGJhc2VNaW1lVHlwZSA9PT0gdmFsaWRUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1pbWVUeXBlID09PSB2YWxpZFR5cGU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImZpbGUiLCJhY2NlcHRlZEZpbGVzIiwiYWNjZXB0ZWRGaWxlc0FycmF5IiwiQXJyYXkiLCJpc0FycmF5Iiwic3BsaXQiLCJmaWxlTmFtZSIsIm5hbWUiLCJtaW1lVHlwZSIsInR5cGUiLCJ0b0xvd2VyQ2FzZSIsImJhc2VNaW1lVHlwZSIsInJlcGxhY2UiLCJzb21lIiwidmFsaWRUeXBlIiwidHJpbSIsImNoYXJBdCIsImVuZHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/attr-accept/dist/es/index.js\n',
      );

      /***/
    },
};

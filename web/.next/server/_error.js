"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\r\n                body { margin: 0; color: #000; background: #fff; }\r\n                .next-error-h1 {\r\n                  border-right: 1px solid rgba(0, 0, 0, .3);\r\n                }\r\n                \r\n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\r\n                  body { color: #fff; background: #000; }\r\n                  .next-error-h1 {\r\n                    border-right: 1px solid rgba(255, 255, 255, .3);\r\n                  }\r\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"10px 23px 10px 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"inherit\",\n        margin: 0,\n        padding: 0\n    }\n};\nexports[\"default\"] = Error; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsS0FBSyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4Q0FBb0IsQ0FBQyxDQUFDO0FBQ2pFLFNBQVNELHNCQUFzQixDQUFDRyxHQUFHLEVBQUU7SUFDakMsT0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHO1FBQ2pDTCxPQUFPLEVBQUVLLEdBQUc7S0FDZixDQUFDO0NBQ0w7QUFDRCxNQUFNRSxXQUFXLEdBQUc7QUFDaEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsT0FBRyxFQUFFLDhCQUE4QjtBQUNuQyxPQUFHLEVBQUUsb0JBQW9CO0FBQ3pCLE9BQUcsRUFBRSx1QkFBdUI7Q0FDL0I7QUFDRCxTQUFTQyxnQkFBZ0IsQ0FBQyxFQUFFQyxHQUFHLEdBQUdDLEdBQUcsR0FBRyxFQUFFO0lBQ3RDLE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxJQUFJQSxHQUFHLENBQUNFLFVBQVUsR0FBR0YsR0FBRyxDQUFDRSxVQUFVLEdBQUdELEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxVQUFVLEdBQUcsR0FBRztJQUN0RixPQUFPO1FBQ0hBLFVBQVU7S0FDYixDQUFDO0NBQ0w7QUFDRCxJQUFJQyxVQUFVO0FBQ2QsTUFBTUMsS0FBSyxTQUFTLENBQUNELFVBQVUsR0FBR1gsTUFBTSxDQUFDRCxPQUFPLENBQUNjLFNBQVMsQ0FBQztJQUN2REMsTUFBTSxHQUFHO1FBQ0wsTUFBTSxFQUFFSixVQUFVLEdBQUdLLFlBQVksRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFDdkQsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLElBQUlYLFdBQVcsQ0FBQ0ksVUFBVSxDQUFDLElBQUksa0NBQWtDO1FBQy9GLE9BQU8sYUFBYSxDQUFDVixNQUFNLENBQUNELE9BQU8sQ0FBQ21CLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDckRDLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1NBQ3RCLEVBQUUsYUFBYSxDQUFDckIsTUFBTSxDQUFDRCxPQUFPLENBQUNtQixhQUFhLENBQUNmLEtBQUssQ0FBQ0osT0FBTyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUNDLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDbUIsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUVSLFVBQVUsR0FBRyxDQUFDLEVBQUVBLFVBQVUsQ0FBQyxFQUFFLEVBQUVPLEtBQUssQ0FBQyxDQUFDLEdBQUcseURBQXlELENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQ2pCLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDbUIsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDbEIsTUFBTSxDQUFDRCxPQUFPLENBQUNtQixhQUFhLENBQUMsT0FBTyxFQUFFO1lBQzNVSSx1QkFBdUIsRUFBRTtnQkFDckJDLE1BQU0sRUFBRSxDQUFDO2FBWVo7U0FDSixDQUFDLEVBQUViLFVBQVUsR0FBRztZQUNiYyxTQUFTLEVBQUUsZUFBZTtZQUMxQkwsS0FBSztTQUNSLEVBQUVUO1lBQ0NTLEtBQUssRUFBRUMsTUFBTSxDQUFDTSxJQUFJO1NBQ3JCLEVBQUUsYUFBYSxDQUFDMUIsTUFBTSxDQUFDRCxPQUFPLENBQUNtQixhQUFhLENBQUMsSUFBSTtZQUM5Q0MsS0FBSyxFQUFFQyxNQUFNLENBQUNPLEVBQUU7U0FDbkIsRUFBRSxJQUFJLENBQUNYLEtBQUssQ0FBQ0MsS0FBSyxJQUFJUCxVQUFVLEdBQUdPLEtBQUssR0FBRyxhQUFhLENBQUNqQjtLQUM3RDtDQUNKO0FBQ0RZLEtBQUssQ0FBQ2lCO0FBQ05qQixLQUFLLENBQUNrQixlQUFlLEdBQUd2QixnQkFBZ0IsQ0FBQztBQUN6Q0ssS0FBSyxDQUFDbUIsbUJBQW1CLEdBQUd4QjtBQUM1QixNQUFNYSxNQUFNLEdBQUc7SUFDWEMsS0FBSyxFQUFFO1FBQ0hXLFVBQVUsRUFBRTtRQUNaQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxTQUFTLEVBQUUsUUFBUTtRQUNuQkMsT0FBTyxFQUFFLE1BQU07OztRQUdmRyxjQUFjLEVBQUUsUUFBUTtLQUMzQjtJQUNEWixJQUFJLEVBQUU7UUFDRlMsT0FBTztRQUNQRDtRQUNBSyxVQUFVLEVBQUUsTUFBTTtRQUNsQk4sTUFBTSxFQUFFLE1BQU07UUFDZE8sYUFBYSxFQUFFO0tBQ2xCO0lBQ0RmLEVBQUUsRUFBRTtRQUNBVSxPQUFPLEVBQUU7UUFDVE0sTUFBTSxFQUFFLENBQUM7O1FBRVRFO1FBQ0FDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCQyxVQUFVLEVBQUUsR0FBRztRQUNmTCxhQUFhLEVBQUU7S0FDbEI7SUFDRGIsRUFBRSxFQUFFOztRQUVBa0I7UUFDQU4sVUFBVSxFQUFFLFNBQVM7UUFDckJFLE1BQU0sRUFBRSxDQUFDO1FBQ1RFLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSjtBQUNEOUMsT0FBTyxDQUFDRSxPQUFPLEdBQUdhLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/MThmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XHJcbiAgICA0MDA6ICdCYWQgUmVxdWVzdCcsXHJcbiAgICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcclxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXHJcbiAgICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InXHJcbn07XHJcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXNDb2RlXHJcbiAgICB9O1xyXG59XHJcbnZhciBfQ29tcG9uZW50O1xyXG5jbGFzcyBFcnJvciBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICwgd2l0aERhcmtNb2RlID10cnVlICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcclxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxyXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xyXG4gICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICBib2R5IHsgbWFyZ2luOiAwOyBjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjsgfVxyXG4gICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHt3aXRoRGFya01vZGUgPyBgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgICAgICAgICAgICAgICBib2R5IHsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDA7IH1cclxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9YCA6ICcnfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibmV4dC1lcnJvci1oMVwiLFxyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXHJcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcclxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKTtcclxuICAgIH1cclxufVxyXG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xyXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xyXG5FcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZXJyb3I6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgZGVzYzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xyXG4gICAgfSxcclxuICAgIGgxOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzEwcHggMjNweCAxMHB4IDAnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiX0NvbXBvbmVudCIsIkVycm9yIiwiQ29tcG9uZW50IiwicmVuZGVyIiwid2l0aERhcmtNb2RlIiwicHJvcHMiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJoMSIsImRlc2MiLCJoMiIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();
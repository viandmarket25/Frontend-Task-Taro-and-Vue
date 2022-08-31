(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/plugins/ajax.ts":
/*!*****************************!*\
  !*** ./src/plugins/ajax.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.18.9@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.18.9@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.18.9@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.3.10@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);





var isUrl = function isUrl(url) {
  return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
};

var cookie = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync('cookie') || '';
var baseUrl = 'http://localhost:3000';

var Ajax = /*#__PURE__*/function () {
  function Ajax() {
    Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Ajax);
  }

  Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Ajax, [{
    key: "get",
    value: function get(url, data, option) {
      return new Promise(function (resolve, reject) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.request(Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          url: isUrl(url) ? url : baseUrl + url,
          data: cookie ? Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {}, {
            cookie: cookie
          }) : data,
          method: 'GET',
          header: {}
        }, option), {}, {
          success: function success(res) {
            resolve(res.data);
          },
          fail: function fail(err) {
            reject(err);
          }
        }));
      });
    }
  }, {
    key: "post",
    value: function post(url, data, option) {
      return new Promise(function (resolve, reject) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.request(Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          url: isUrl(url) ? url : baseUrl + url,
          data: cookie ? Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {}, {
            cookie: cookie,
            timestamp: new Date().getTime()
          }) : Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {}, {
            timestamp: new Date().getTime()
          }),
          method: 'POST',
          header: {}
        }, option), {}, {
          success: function success(res) {
            resolve(res.data);
          },
          fail: function fail(err) {
            reject(err);
          }
        }));
      });
    }
  }]);

  return Ajax;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Ajax());

/***/ })

}]);
//# sourceMappingURL=common.js.map
exports.ids = [0];
exports.modules = {

/***/ "./src/client/main.jsx":
/*!*****************************!*\
  !*** ./src/client/main.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        'main',
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'E:/code/github/react-koa2-typescript-isomorphic/src/client/main.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

};;
//# sourceMappingURL=0.js.map
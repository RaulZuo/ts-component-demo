"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ClassComponent = _interopRequireDefault(require("./components/ClassComponent"));

var _FunctionComponent = _interopRequireDefault(require("./components/FunctionComponent"));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Index = function (_super) {
  __extends(Index, _super);

  function Index() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Index.prototype.render = function () {
    return _react["default"].createElement("div", null, _react["default"].createElement("span", null, "This is a react component with typescript"), _react["default"].createElement(_ClassComponent["default"], null), _react["default"].createElement(_FunctionComponent["default"], null));
  };

  return Index;
}(_react.Component);

var _default = Index;
exports["default"] = _default;
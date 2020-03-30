"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _next = require("@alifd/next");

require("./index.scss");

var FunctionComponent = function FunctionComponent(props) {
  var text = props.text;
  return _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "component-title"
  }, "This is a function component"), _react["default"].createElement(_next.Button, {
    type: "primary"
  }, text));
};

var _default = FunctionComponent;
exports["default"] = _default;
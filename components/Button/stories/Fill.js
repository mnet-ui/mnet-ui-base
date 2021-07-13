"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FillButtons = function FillButtons(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    justify: "center",
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    justify: "center",
    align: "center",
    pad: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    justify: "center",
    align: "center",
    height: "100px",
    width: "300px"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "False",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    justify: "center",
    align: "center",
    height: "100px",
    width: "300px"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "True",
    fill: true,
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    justify: "center",
    align: "center",
    height: "100px",
    width: "300px"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "Horizontal",
    fill: "horizontal",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    justify: "center",
    align: "center",
    height: "100px",
    width: "300px"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "Vertical",
    fill: "vertical",
    onClick: function onClick() {}
  }, props)))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    justify: "center",
    align: "center",
    height: "700px",
    width: "300px",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "False",
    onClick: function onClick() {}
  }, props)), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "True",
    fill: true,
    onClick: function onClick() {}
  }, props)), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "Horizontal",
    fill: "horizontal",
    onClick: function onClick() {}
  }, props)), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "Vertical",
    fill: "vertical",
    onClick: function onClick() {}
  }, props)))));
};

(0, _react2.storiesOf)('Button', module).add('Fill', function () {
  return /*#__PURE__*/_react["default"].createElement(FillButtons, null);
});
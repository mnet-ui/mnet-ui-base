"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BasicButtons = function BasicButtons(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    primary: true,
    label: "Primary",
    size: "medium",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    secondary: true,
    size: "medium",
    label: "Secondary",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    tertiary: true,
    size: "medium",
    label: "Tertiary",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    size: "medium",
    label: "Default",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "medium",
    label: "Anchor",
    href: "#"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    size: "medium",
    disabled: true,
    label: "Disabled",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    primary: true,
    label: "Active Primary",
    active: true,
    onClick: function onClick() {}
  }, props))));
};

(0, _react2.storiesOf)('Button', module).add('Basic', function () {
  return /*#__PURE__*/_react["default"].createElement(BasicButtons, null);
});
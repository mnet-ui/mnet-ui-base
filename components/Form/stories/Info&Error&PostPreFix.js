"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormFieldInfoPostFix = function FormFieldInfoPostFix(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, _extends({
    direction: "row",
    label: "Label",
    postfix: "ms",
    prefix: "ms",
    htmlFor: "text-input",
    error: "Text to call attention to an issue with this field"
  }, props), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    id: "text-input",
    placeholder: "placeholder",
    value: "Value",
    onChange: function onChange() {}
  }))));
};

(0, _react2.storiesOf)('Form', module).add('Info, Error, Post and Pre fix label', function () {
  return /*#__PURE__*/_react["default"].createElement(FormFieldInfoPostFix, null);
});
"use strict";

exports.__esModule = true;
exports.ControlButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = require("../Box");

var _Button = require("../Button");

var _Text = require("../Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ControlButton = function ControlButton(_ref) {
  var onOk = _ref.onOk,
      onCancel = _ref.onCancel;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || defaultProps.theme;
  var ControlButtonWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
    displayName: "ControlButton__ControlButtonWrapper",
    componentId: "sc-1tomcrk-0"
  })(["", ";"], function (props) {
    return props.theme.multiselect.controls.wrapper.extend;
  });
  return /*#__PURE__*/_react["default"].createElement(ControlButtonWrapper, theme.multiselect.controls.wrapper, /*#__PURE__*/_react["default"].createElement(_Button.Button, _extends({
    role: "button",
    a11yTitle: "OK button (Update selected values)"
  }, theme.multiselect.controls.button, {
    onClick: onOk,
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: 600
  }, "OK")), /*#__PURE__*/_react["default"].createElement(_Button.Button, _extends({
    role: "button",
    a11yTitle: "Cancel button"
  }, theme.multiselect.controls.button, {
    onClick: onCancel,
    secondary: true
  }), /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: 600
  }, "Cancel")));
};

exports.ControlButton = ControlButton;
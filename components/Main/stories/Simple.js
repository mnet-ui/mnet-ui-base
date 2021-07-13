"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Simple = function Simple() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Header, {
    background: "light-4",
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "small"
  }, "Header")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Main, {
    pad: "small"
  }, "I am Main! Main is a good place to place your content."));
};

(0, _react2.storiesOf)('Main', module).add('Simple', function () {
  return /*#__PURE__*/_react["default"].createElement(Simple, null);
});
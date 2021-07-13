"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleStack = function SimpleStack() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Stack, {
    anchor: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    background: "neutral-1"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    background: "accent-1"
  })));
};

var FillStack = function FillStack() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Stack, {
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand",
    fill: true
  }, "Test")));
};

(0, _react2.storiesOf)('Stack', module).add('Simple', function () {
  return /*#__PURE__*/_react["default"].createElement(SimpleStack, null);
}).add('Fill', function () {
  return /*#__PURE__*/_react["default"].createElement(FillStack, null);
});
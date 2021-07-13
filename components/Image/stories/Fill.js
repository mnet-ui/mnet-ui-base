"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Fill = function Fill() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    fit: "cover",
    fill: true,
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    fit: "contain",
    fill: true,
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  })))));
};

(0, _react2.storiesOf)('Image', module).add('Fill', function () {
  return /*#__PURE__*/_react["default"].createElement(Fill, null);
});
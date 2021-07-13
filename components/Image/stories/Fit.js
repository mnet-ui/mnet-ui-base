"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Fit = function Fit() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg",
    fit: "contain"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg",
    fit: "cover"
  }))));
};

(0, _react2.storiesOf)('Image', module).add('Fit', function () {
  return /*#__PURE__*/_react["default"].createElement(Fit, null);
});
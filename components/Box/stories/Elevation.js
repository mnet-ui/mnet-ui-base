"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ElevationBox = function ElevationBox() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "dark-1",
    elevation: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "dark on white"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    elevation: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "dark on dark"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "light-1",
    elevation: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "light on dark"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    elevation: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "light on light")))))));
};

(0, _react2.storiesOf)('Box', module).add('Elevation', function () {
  return /*#__PURE__*/_react["default"].createElement(ElevationBox, null);
});
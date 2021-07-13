"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RTLLayer = function RTLLayer() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    dir: "rtl"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Layer, {
    position: "start",
    margin: {
      vertical: 'small',
      start: 'xlarge',
      end: 'medium'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"))));
};

(0, _react2.storiesOf)('Layer', module).add('RTL', function () {
  return /*#__PURE__*/_react["default"].createElement(RTLLayer, null);
});
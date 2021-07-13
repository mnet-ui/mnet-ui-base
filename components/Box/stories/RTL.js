"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RTLBox = function RTLBox() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    dir: "rtl"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: "small",
    gap: "small",
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: "small",
    border: "start"
  }, "border start"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: {
      start: 'large'
    },
    background: "brand"
  }, "pad start"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    margin: {
      start: 'large'
    },
    background: "brand"
  }, "margin start")));
};

(0, _react2.storiesOf)('Box', module).add('RTL', function () {
  return /*#__PURE__*/_react["default"].createElement(RTLBox, null);
});
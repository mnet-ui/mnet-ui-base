"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Disabled = function Disabled() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    margin: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    disabled: true,
    label: "Disabled Anchor"
  }))));
};

(0, _react2.storiesOf)('Anchor', module).add('Disabled', function () {
  return /*#__PURE__*/_react["default"].createElement(Disabled, null);
});
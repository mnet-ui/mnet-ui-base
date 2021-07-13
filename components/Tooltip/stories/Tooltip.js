"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _Tooltip = require("../Tooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TooltipPreview = function TooltipPreview() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: "large",
    justify: "center",
    height: "100vh"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, {
    message: "Left Side",
    position: "left",
    margin: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Left"
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, {
    message: "Up Side",
    position: "up",
    margin: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "UP"
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, {
    message: "Down Side",
    position: "down",
    margin: "large",
    closeOnTooltipHover: false
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Down (Prevent tooltip on hover)"
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, {
    message: "Enabling this allows bidders to drop pixels or scripts to sync \n             cookies in order to match their cookies with DSP\u2019s cookies.\n             They do this since some DSPs are most likely to bid on.",
    position: "right",
    margin: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Right"
  }))));
};

(0, _react2.storiesOf)('Tooltip', module).add('Tooltip', function () {
  return /*#__PURE__*/_react["default"].createElement(TooltipPreview, null);
});
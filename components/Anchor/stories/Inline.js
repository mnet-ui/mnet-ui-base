"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Inline = function Inline() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, null, "This is ", /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    label: "an inline link",
    href: "#"
  }), " with surrounding text.")));
};

(0, _react2.storiesOf)('Anchor', module).add('Inline', function () {
  return /*#__PURE__*/_react["default"].createElement(Inline, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Color = function Color() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    color: "accent-1"
  }, "Colored Text"));
};

(0, _react2.storiesOf)('Text', module).add('Color', function () {
  return /*#__PURE__*/_react["default"].createElement(Color, null);
});
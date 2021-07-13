"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    onChange: function onChange(event) {
      return console.log('Change', event.target.value);
    }
  }))));
};

(0, _react2.storiesOf)('TextInput', module).add('Uncontrolled', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
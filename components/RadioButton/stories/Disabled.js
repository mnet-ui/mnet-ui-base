"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DisabledRadioButton = function DisabledRadioButton() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RadioButton, {
    label: "option 1",
    name: "name",
    value: "option 1",
    checked: true,
    disabled: true
  })));
};

(0, _react2.storiesOf)('RadioButton', module).add('Disabled', function () {
  return /*#__PURE__*/_react["default"].createElement(DisabledRadioButton, null);
});
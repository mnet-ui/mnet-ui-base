"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledPlaceholder = function StyledPlaceholder() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Form, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    name: "name",
    placeholder: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "footer")
  })));
};

(0, _react2.storiesOf)('TextInput', module).add('StyledPlaceholder', function () {
  return /*#__PURE__*/_react["default"].createElement(StyledPlaceholder, null);
});
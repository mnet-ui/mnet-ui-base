"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RouteButton = function RouteButton() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "medium",
    size: "small"
  }, "Note: RoutedButton will soon be deprecated"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RoutedButton, {
    label: "Go",
    path: "/"
  })));
};

(0, _react2.storiesOf)('Button', module).add('RoutedButton', function () {
  return /*#__PURE__*/_react["default"].createElement(RouteButton, null);
});
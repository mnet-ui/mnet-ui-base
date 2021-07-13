"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconTextInput = function IconTextInput() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, null),
    placeholder: "search ..."
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, null),
    reverse: true,
    placeholder: "search ..."
  }))));
};

(0, _react2.storiesOf)('TextInput', module).add('Icon', function () {
  return /*#__PURE__*/_react["default"].createElement(IconTextInput, null);
});
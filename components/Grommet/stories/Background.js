"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { neo } from 'mnet-ui-base-theme-neo';
// import { cdp } from 'mnet-ui-base-theme-cdp';
var Background = function Background() {
  // const themeColor = 'background-back';
  var hexValue = '#DCD0FF';
  var cssColor = 'gold';
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with no theme or background prop"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: hexValue
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as HEX value of '", hexValue, "'"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: cssColor
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as CSS color name of '", cssColor, "'"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: {
      color: 'pink',
      image: 'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as object containing color and image"))));
};

(0, _react2.storiesOf)('MnetUIBase', module).add('Background', function () {
  return /*#__PURE__*/_react["default"].createElement(Background, null);
});
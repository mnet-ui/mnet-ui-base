"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sizes = function Sizes() {
  var src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Avatar, {
    size: "small",
    src: src
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Avatar, {
    size: "medium",
    src: src
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Avatar, {
    size: "large",
    src: src
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Avatar, {
    size: "xlarge",
    src: src
  })));
};

(0, _react2.storiesOf)('Avatar', module).add('Sizes', function () {
  return /*#__PURE__*/_react["default"].createElement(Sizes, null);
});
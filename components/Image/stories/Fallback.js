"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Fallback = function Fallback() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    fallback: "//v2.mnet.io/assets/IMG_4245.jpg",
    src: "//v2.mnet.io/assets/IMG_4245_not_exists.jpg"
  }));
};

(0, _react2.storiesOf)('Image', module).add('Fallback', function () {
  return /*#__PURE__*/_react["default"].createElement(Fallback, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Opacity = function Opacity() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    opacity: "strong",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    opacity: "medium",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    opacity: "weak",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    opacity: false,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    opacity: true,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
    opacity: "0.6",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })));
};

(0, _react2.storiesOf)('Image', module).add('Opacity', function () {
  return /*#__PURE__*/_react["default"].createElement(Opacity, null);
});
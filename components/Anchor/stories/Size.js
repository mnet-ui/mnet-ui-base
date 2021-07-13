"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Size = function Size() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(function (size) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: size,
      margin: "small"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
      size: size,
      label: size,
      href: "#"
    }));
  })));
};

(0, _react2.storiesOf)('Anchor', module).add('Size', function () {
  return /*#__PURE__*/_react["default"].createElement(Size, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Colors = function Colors() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    href: "#"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    href: "#"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    label: "Add",
    href: "#"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "dark-1",
    pad: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    href: "#"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    href: "#"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    href: "#"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    label: "Add",
    href: "#"
  })));
};

(0, _react2.storiesOf)('Anchor', module).add('Colors', function () {
  return /*#__PURE__*/_react["default"].createElement(Colors, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleBox = function SimpleBox() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    justify: "center",
    align: "center",
    pad: "xlarge",
    background: "dark-2",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    align: "center",
    background: {
      color: 'light-2',
      opacity: 'strong'
    },
    round: true,
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Attraction, {
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Party"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    href: "",
    label: "Link"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Button",
    onClick: function onClick() {}
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    align: "center",
    background: "dark-3",
    round: true,
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Car, {
    size: "large",
    color: "light-2"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Travel"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    href: "",
    label: "Link"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Button",
    onClick: function onClick() {}
  }))));
};

(0, _react2.storiesOf)('Box', module).add('Simple', function () {
  return /*#__PURE__*/_react["default"].createElement(SimpleBox, null);
});
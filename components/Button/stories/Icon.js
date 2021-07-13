"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconPlain = function IconPlain() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "small"
  }, " plain=true (no padding, no border) "), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    plain: true,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Close, null),
    onClick: function onClick() {},
    primary: true
  }), "ye", /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    plain: true,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Send, null),
    onClick: function onClick() {}
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    plain: true,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.User, null),
    onClick: function onClick() {}
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "small"
  }, " plain=false (includes padding and border)"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    plain: false,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Close, null),
    onClick: function onClick() {},
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    plain: false,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Send, null),
    onClick: function onClick() {}
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    plain: false,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.User, null),
    onClick: function onClick() {}
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "small"
  }, " plain=undefined (with padding, no border) "), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Close, null),
    onClick: function onClick() {},
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Send, null),
    onClick: function onClick() {}
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.User, null),
    onClick: function onClick() {}
  }))));
};

(0, _react2.storiesOf)('Button', module).add('Icon Plain', function () {
  return /*#__PURE__*/_react["default"].createElement(IconPlain, null);
});
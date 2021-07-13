"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SimpleCollapsible = function SimpleCollapsible(props) {
  var _React$useState = _react["default"].useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    onClick: function onClick() {
      return setOpen(!open);
    },
    label: "Toggle"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Collapsible, _extends({
    open: open
  }, props), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "light-2",
    round: "medium",
    pad: "medium",
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "This is a box inside a Collapsible component"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "This is other content outside the Collapsible box")));
};

(0, _react2.storiesOf)('Collapsible', module).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(SimpleCollapsible, null);
});
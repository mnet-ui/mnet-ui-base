"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarDropButton = function CalendarDropButton() {
  var _React$useState = _react["default"].useState(),
      date = _React$useState[0],
      setDate = _React$useState[1];

  var _React$useState2 = _react["default"].useState(),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var onSelect = function onSelect(selectedDate) {
    setDate(selectedDate);
    setOpen(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.DropButton, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    onOpen: function onOpen() {
      return setOpen(true);
    },
    dropContent: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Calendar, {
      date: date,
      onSelect: onSelect
    })
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    gap: "medium",
    align: "center",
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, date ? new Date(date).toLocaleDateString() : 'Select date'), /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormDown, {
    color: "brand"
  })))));
};

(0, _react2.storiesOf)('DropButton', module).add('Calendar', function () {
  return /*#__PURE__*/_react["default"].createElement(CalendarDropButton, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// When the first day of the month is Sunday, and the request of firstDayOfWeek
// is Monday, we are verifing we are not missing a week, issue 3253.
var SundayFirstDay = function SundayFirstDay() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Calendar, {
    firstDayOfWeek: 1,
    date: new Date(2019, 8, 2).toISOString()
  })));
};

(0, _react2.storiesOf)('Calendar', module).add('1st on Sunday', function () {
  return /*#__PURE__*/_react["default"].createElement(SundayFirstDay, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/no-array-index-key */
var values = [20, 40, 60, 80, 100];

var MeterInTable = function MeterInTable() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    pad: {
      top: 'xsmall'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Table, {
    caption: "Meter Inside Table"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableBody, null, values.map(function (val, index) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableRow, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Meter, {
      type: "bar",
      values: [{
        value: val
      }]
    })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, val, "% complete")));
  }))))));
};

(0, _react2.storiesOf)('Table', module).add('Meter Inside Table', function () {
  return /*#__PURE__*/_react["default"].createElement(MeterInTable, null);
});
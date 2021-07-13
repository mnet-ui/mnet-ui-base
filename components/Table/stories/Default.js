"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DefaultTable = function DefaultTable() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Table, {
    caption: "Default Table"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableHeader, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableRow, null, _data.columns.map(function (c) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, {
      key: c.property,
      scope: "col",
      align: c.align
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, c.label));
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableBody, null, _data.data.map(function (datum) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableRow, {
      key: datum.id
    }, _data.columns.map(function (c) {
      return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, {
        key: c.property,
        scope: c.dataScope,
        align: c.align
      }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, c.format ? c.format(datum) : datum[c.property]));
    }));
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableFooter, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableRow, null, _data.columns.map(function (c) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, {
      key: c.property,
      align: c.align
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, c.footer));
  }))))));
};

(0, _react2.storiesOf)('Table', module).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(DefaultTable, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SecondaryKeyList = function SecondaryKeyList() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.List, {
    data: _data.data.slice(0, 10),
    primaryKey: "entry",
    secondaryKey: "location"
  })));
};

(0, _react2.storiesOf)('List', module).add('secondaryKey', function () {
  return /*#__PURE__*/_react["default"].createElement(SecondaryKeyList, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NColumnGrid = function NColumnGrid() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    columns: {
      count: 6,
      size: 'auto'
    },
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 1"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 2"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 3"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 4"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 5"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 6")));
};

(0, _react2.storiesOf)('Grid', module).add('N-column layout', function () {
  return /*#__PURE__*/_react["default"].createElement(NColumnGrid, null);
});
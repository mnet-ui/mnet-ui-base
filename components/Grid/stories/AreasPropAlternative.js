"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GridAreasAlternative = function GridAreasAlternative() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    rows: ['xxsmall', 'medium', 'xsmall'],
    columns: ['1/4', '3/4'],
    areas: [['header', 'header'], ['sidebar', 'main'], ['footer', 'footer']],
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand",
    gridArea: "header"
  }, "Header"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "light-5",
    gridArea: "sidebar"
  }, "Sidebar"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "light-2",
    gridArea: "main"
  }, "Main"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "dark-2",
    gridArea: "footer"
  }, "Footer")));
};

(0, _react2.storiesOf)('Grid', module).add('Areas prop alternative', function () {
  return /*#__PURE__*/_react["default"].createElement(GridAreasAlternative, null);
});
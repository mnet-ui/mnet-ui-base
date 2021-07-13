"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Percentages = function Percentages() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    fill: true,
    areas: [{
      name: 'nav',
      start: [0, 0],
      end: [0, 0]
    }, {
      name: 'main',
      start: [1, 0],
      end: [1, 0]
    }],
    columns: ['small', 'flex'],
    rows: ['flex'],
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gridArea: "nav",
    background: "brand"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gridArea: "main",
    background: "brand"
  })));
};

(0, _react2.storiesOf)('Grid', module).add('Percentages', function () {
  return /*#__PURE__*/_react["default"].createElement(Percentages, null);
});
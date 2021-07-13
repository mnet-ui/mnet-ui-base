"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
var StyledDataTable = function StyledDataTable() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.DataTable, {
    columns: _data.columns,
    data: _data.DATA,
    step: 10,
    pad: {
      horizontal: 'large',
      vertical: 'medium'
    },
    background: {
      header: 'dark-3',
      body: ['light-1', 'light-3'],
      footer: 'dark-3'
    },
    border: {
      body: 'bottom'
    },
    rowProps: {
      Eric: {
        background: 'accent-2',
        pad: 'large'
      }
    }
  })));
};

(0, _react2.storiesOf)('DataTable', module).add('Styled', function () {
  return /*#__PURE__*/_react["default"].createElement(StyledDataTable, null);
});
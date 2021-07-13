/* eslint-disable react/no-array-index-key */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Meter, Table, TableBody, TableCell, TableRow, Text } from 'mnet-ui-base';
var values = [20, 40, 60, 80, 100];

var MeterInTable = function MeterInTable() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    border: true,
    pad: {
      top: 'xsmall'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    caption: "Meter Inside Table"
  }, /*#__PURE__*/React.createElement(TableBody, null, values.map(function (val, index) {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: index
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Meter, {
      type: "bar",
      values: [{
        value: val
      }]
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Text, null, val, "% complete")));
  }))))));
};

storiesOf('Table', module).add('Meter Inside Table', function () {
  return /*#__PURE__*/React.createElement(MeterInTable, null);
});
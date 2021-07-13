import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MultiSelect } from 'mnet-ui-base';
var options = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8', 'Test 9', 'Test 10'];

var Example = function Example() {
  var _useState = useState([]),
      value = _useState[0],
      setValue = _useState[1];

  return /*#__PURE__*/React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(MultiSelect, {
    options: options,
    value: value,
    onValueChange: function onValueChange(nextValue) {
      return setValue(nextValue);
    },
    layout: "single-column",
    width: "medium",
    height: "medium",
    searchPlaceholder: "Search",
    searchable: true
  }));
};

storiesOf('MultiSelect', module).add('Single Column with Search', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});
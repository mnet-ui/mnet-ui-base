import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MultiSelect } from 'mnet-ui-base';
var options = [{
  id: 1,
  label: 'Test 1'
}, {
  id: 2,
  label: 'Test 2'
}, {
  id: 3,
  label: 'Test 3'
}, {
  id: 4,
  label: 'Test 4'
}, {
  id: 5,
  label: 'Test 5'
}, {
  id: 6,
  label: 'Test 6'
}, {
  id: 7,
  label: 'Test 7'
}, {
  id: 8,
  label: 'Test 8'
}, {
  id: 9,
  label: 'Test 9'
}, {
  id: 10,
  label: 'Test 10'
}];

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
    labelKey: "label",
    valueKey: {
      key: 'id',
      reduce: true
    },
    onValueChange: function onValueChange(nextValue) {
      return setValue(nextValue);
    },
    layout: "single-column",
    width: "medium",
    height: "medium",
    searchPlaceholder: "Search",
    searchable: true,
    withSelectAll: true,
    withOptionChips: true,
    withUpdateCancelButtons: true
  }));
};

storiesOf('MultiSelect', module).add('Single Column', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});
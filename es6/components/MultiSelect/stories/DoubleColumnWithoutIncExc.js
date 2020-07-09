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
    layout: "double-column",
    width: "medium",
    searchPlaceholder: "Search",
    searchable: true,
    withOptionChips: true,
    renderEmptySelected: /*#__PURE__*/React.createElement("span", null, "Empty")
  }));
};

storiesOf('MultiSelect', module).add('Double Column without Inclusion / Exclusion', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});
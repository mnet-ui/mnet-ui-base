import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MultiSelect } from 'mnet-ui-base';
var options = [{
  id: 1,
  label: '300x250'
}, {
  id: 2,
  label: '250x250'
}, {
  id: 3,
  label: '100x100'
}, {
  id: 4,
  label: '728x90'
}, {
  id: 5,
  label: '300x100'
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
      key: 'label',
      reduce: true
    },
    onValueChange: function onValueChange(nextValue) {
      return setValue(nextValue);
    },
    layout: "double-column",
    width: "large",
    height: "medium",
    searchPlaceholder: "Search",
    searchable: true,
    withOptionChips: true,
    renderEmptySelected: /*#__PURE__*/React.createElement("span", null, "Empty")
  }));
};

storiesOf('MultiSelect', module).add('Double Column without Inclusion / Exclusion', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});
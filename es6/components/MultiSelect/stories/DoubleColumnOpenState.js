import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MultiSelect, Text } from 'mnet-ui-base';
var options = [{
  id: 1,
  label: 'Desktop'
}, {
  id: 2,
  label: 'Mobile'
}, {
  id: 3,
  label: 'Tablet'
}, {
  id: 4,
  label: 'Television'
}, {
  id: 5,
  label: 'Bot'
}];

var Example = function Example() {
  var _useState = useState(['Mobile', 'Tablet']),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = useState(false),
      isExcluded = _useState2[0],
      setIncExc = _useState2[1];

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
    withSelectAll: true,
    withOptionChips: true,
    withInclusionExclusion: true,
    isExcluded: isExcluded,
    onIncExcChange: function onIncExcChange(nextIncExc) {
      return setIncExc(nextIncExc);
    },
    renderEmptySelected: /*#__PURE__*/React.createElement(Text, null, "No Selection"),
    isEnableOutSideClick: true,
    shouldRenderInDrop: true,
    isOpenState: true
  }));
};

storiesOf('MultiSelect', module).add('Double Column Open State', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});
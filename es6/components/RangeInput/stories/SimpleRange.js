import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, RangeInput } from 'mnet-ui-base';

var SimpleRangeInput = function SimpleRangeInput() {
  var _React$useState = React.useState(5),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    return setValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(RangeInput, {
    value: value,
    onChange: onChange
  })));
};

storiesOf('RangeInput', module).add('Simple', function () {
  return /*#__PURE__*/React.createElement(SimpleRangeInput, null);
});
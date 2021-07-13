import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Meter } from 'mnet-ui-base';

var BarMeter = function BarMeter() {
  var value = 30;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Meter, {
    type: "bar",
    background: "light-2",
    values: [{
      value: value
    }]
  })));
};

storiesOf('Meter', module).add('Bar', function () {
  return /*#__PURE__*/React.createElement(BarMeter, null);
});
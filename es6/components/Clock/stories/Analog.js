import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Clock } from 'mnet-ui-base';

var AnalogClock = function AnalogClock() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Clock, {
    type: "analog"
  })));
};

storiesOf('Clock', module).add('Analog', function () {
  return /*#__PURE__*/React.createElement(AnalogClock, null);
}, {
  chromatic: {
    disable: true
  }
});
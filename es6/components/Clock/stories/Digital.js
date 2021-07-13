import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Clock } from 'mnet-ui-base';

var DigitalClock = function DigitalClock() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Clock, {
    type: "digital"
  })));
};

storiesOf('Clock', module).add('Digital', function () {
  return /*#__PURE__*/React.createElement(DigitalClock, null);
}, {
  chromatic: {
    disable: true
  }
});
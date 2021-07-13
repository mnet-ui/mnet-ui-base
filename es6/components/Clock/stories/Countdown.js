import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Clock } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Example = function Example() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Clock, {
    type: "digital",
    time: "PT0H0M20S",
    run: "backward"
  })));
};

storiesOf('Clock', module).add('Countdown', function () {
  return /*#__PURE__*/React.createElement(Example, null);
}, {
  chromatic: {
    disable: true
  }
});
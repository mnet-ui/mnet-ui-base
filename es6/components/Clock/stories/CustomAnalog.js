import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Clock } from 'mnet-ui-base';
var analogClockTheme = {
  clock: {
    analog: {
      size: {
        medium: '200px'
      },
      hour: {
        width: '8px',
        shape: 'square',
        color: 'accent-1',
        size: '30px'
      },
      minute: {
        size: '12px',
        width: '6px',
        color: 'grey'
      },
      second: {
        width: '4px',
        color: 'brand',
        size: '5px'
      }
    }
  }
};

var CustomAnalog = function CustomAnalog() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: analogClockTheme
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Clock, {
    type: "analog"
  })));
};

storiesOf('Clock', module).add('Custom Analog', function () {
  return /*#__PURE__*/React.createElement(CustomAnalog, null);
}, {
  chromatic: {
    disable: true
  }
});
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Calendar } from 'mnet-ui-base';

var RangeCalendar = function RangeCalendar() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Calendar, {
    dates: [['2020-04-03', '2020-04-08']],
    range: true
  })));
};

storiesOf('Calendar', module).add('Range', function () {
  return /*#__PURE__*/React.createElement(RangeCalendar, null);
});
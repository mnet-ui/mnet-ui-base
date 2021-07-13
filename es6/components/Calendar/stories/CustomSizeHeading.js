import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { deepMerge } from 'mnet-ui-base/utils';
import { Box, Calendar, MnetUIBase, mnet } from 'mnet-ui-base';
var customHeading = deepMerge(mnet, {
  calendar: {
    heading: {
      level: '3'
    }
  }
});

var CustomSizeCalendar = function CustomSizeCalendar() {
  var _useState = useState(),
      date = _useState[0],
      setDate = _useState[1];

  var onSelect = function onSelect(nextDate) {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customHeading
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Calendar, {
    date: date,
    onSelect: onSelect,
    bounds: ['2018-09-08', '2020-12-13']
  })));
};

storiesOf('Calendar', module).add('Heading Size', function () {
  return /*#__PURE__*/React.createElement(CustomSizeCalendar, null);
});
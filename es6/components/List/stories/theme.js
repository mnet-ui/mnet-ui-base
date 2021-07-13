import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, List } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
import { locations } from './data';
var theme = deepMerge(mnet, {
  list: {
    item: {
      pad: {
        horizontal: 'large',
        vertical: 'xsmall'
      },
      background: ['white', 'light-2'],
      border: true
    }
  }
});

var ThemedList = function ThemedList() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(List, {
    data: locations
  })));
};

storiesOf('List', module).add('theme', function () {
  return /*#__PURE__*/React.createElement(ThemedList, null);
});
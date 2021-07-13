import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, List } from 'mnet-ui-base';
import { locations } from './data';

var BasicList = function BasicList() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(List, {
    data: locations
  })));
};

storiesOf('List', module).add('basic', function () {
  return /*#__PURE__*/React.createElement(BasicList, null);
});
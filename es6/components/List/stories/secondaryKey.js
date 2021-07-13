import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, List } from 'mnet-ui-base';
import { data } from './data';

var SecondaryKeyList = function SecondaryKeyList() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(List, {
    data: data.slice(0, 10),
    primaryKey: "entry",
    secondaryKey: "location"
  })));
};

storiesOf('List', module).add('secondaryKey', function () {
  return /*#__PURE__*/React.createElement(SecondaryKeyList, null);
});
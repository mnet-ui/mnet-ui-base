import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, CheckBoxGroup, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Simple = function Simple() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(CheckBoxGroup, {
    options: ['First', 'Second', 'Third']
  })));
};

storiesOf('CheckBoxGroup', module).add('Simple', function () {
  return /*#__PURE__*/React.createElement(Simple, null);
});
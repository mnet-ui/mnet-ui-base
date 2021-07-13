import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Color = function Color() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet
  }, /*#__PURE__*/React.createElement(Text, {
    color: "accent-1"
  }, "Colored Text"));
};

storiesOf('Text', module).add('Color', function () {
  return /*#__PURE__*/React.createElement(Color, null);
});
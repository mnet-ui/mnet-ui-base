import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, CheckBoxGroup, MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Disabled = function Disabled() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    gap: "large"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    margin: {
      vertical: 'small'
    }
  }, "Disabled Group"), /*#__PURE__*/React.createElement(CheckBoxGroup, {
    disabled: true,
    options: ['First', 'Second', 'Third']
  })), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    margin: {
      vertical: 'small'
    }
  }, " Disabled Individuals"), /*#__PURE__*/React.createElement(CheckBoxGroup, {
    options: [{
      label: 'Maui',
      disabled: true
    }, {
      label: 'Jerusalem'
    }, {
      label: 'Wuhan',
      disabled: true
    }]
  }))));
};

storiesOf('CheckBoxGroup', module).add('Disabled', function () {
  return /*#__PURE__*/React.createElement(Disabled, null);
});
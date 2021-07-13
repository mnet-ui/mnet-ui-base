import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, RadioButton } from 'mnet-ui-base';

var DisabledRadioButton = function DisabledRadioButton() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    label: "option 1",
    name: "name",
    value: "option 1",
    checked: true,
    disabled: true
  })));
};

storiesOf('RadioButton', module).add('Disabled', function () {
  return /*#__PURE__*/React.createElement(DisabledRadioButton, null);
});
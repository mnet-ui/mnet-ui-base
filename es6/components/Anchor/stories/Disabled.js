import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'mnet-ui-base';

var Disabled = function Disabled() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    margin: "small"
  }, /*#__PURE__*/React.createElement(Anchor, {
    disabled: true,
    label: "Disabled Anchor"
  }))));
};

storiesOf('Anchor', module).add('Disabled', function () {
  return /*#__PURE__*/React.createElement(Disabled, null);
});
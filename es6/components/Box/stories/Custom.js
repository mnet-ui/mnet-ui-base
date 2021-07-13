import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text } from 'mnet-ui-base';

var GradientColorBox = function GradientColorBox() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    justify: "center",
    align: "center",
    pad: "xlarge",
    background: "linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)",
    round: "large"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "white"
  }, "I have a linear gradient background")));
};

storiesOf('Box', module).add('Gradient', function () {
  return /*#__PURE__*/React.createElement(GradientColorBox, null);
});
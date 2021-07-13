import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Meter, Stack, Text } from 'mnet-ui-base';

var LabelledMeter = function LabelledMeter() {
  var meterValue = 30;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Stack, {
    anchor: "center"
  }, /*#__PURE__*/React.createElement(Meter, {
    type: "circle",
    background: "light-2",
    values: [{
      value: meterValue
    }],
    size: "xsmall",
    thickness: "small"
  }), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      bottom: 'xsmall'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    size: "xlarge",
    weight: "bold"
  }, meterValue), /*#__PURE__*/React.createElement(Text, {
    size: "small"
  }, "%")))));
};

storiesOf('Meter', module).add('Labelled', function () {
  return /*#__PURE__*/React.createElement(LabelledMeter, null);
});
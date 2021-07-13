import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text } from 'mnet-ui-base';

var ElevationBox = function ElevationBox() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    pad: "small",
    align: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    background: "dark-1",
    elevation: "medium",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "dark on white"), /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    elevation: "medium",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "dark on dark"), /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    background: "light-1",
    elevation: "medium",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "light on dark"), /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    elevation: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "light on light")))))));
};

storiesOf('Box', module).add('Elevation', function () {
  return /*#__PURE__*/React.createElement(ElevationBox, null);
});
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'mnet-ui-base';

var RTLBox = function RTLBox() {
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl"
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "small",
    gap: "small",
    border: true
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "small",
    border: "start"
  }, "border start"), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      start: 'large'
    },
    background: "brand"
  }, "pad start"), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    margin: {
      start: 'large'
    },
    background: "brand"
  }, "margin start")));
};

storiesOf('Box', module).add('RTL', function () {
  return /*#__PURE__*/React.createElement(RTLBox, null);
});
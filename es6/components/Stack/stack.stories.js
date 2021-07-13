import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Stack } from 'mnet-ui-base';

var SimpleStack = function SimpleStack() {
  return /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(Stack, {
    anchor: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "large",
    background: "neutral-1"
  }), /*#__PURE__*/React.createElement(Box, {
    pad: "small",
    background: "accent-1"
  })));
};

var FillStack = function FillStack() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    fill: true
  }, /*#__PURE__*/React.createElement(Box, {
    background: "brand",
    fill: true
  }, "Test")));
};

storiesOf('Stack', module).add('Simple', function () {
  return /*#__PURE__*/React.createElement(SimpleStack, null);
}).add('Fill', function () {
  return /*#__PURE__*/React.createElement(FillStack, null);
});
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Layer, Text } from 'mnet-ui-base';

var PlainLayer = function PlainLayer() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    background: "dark-3"
  }, /*#__PURE__*/React.createElement(Layer, {
    margin: "medium",
    plain: true
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "large",
    border: {
      color: 'accent-1',
      size: 'large'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    color: "accent-2"
  }, "Text")))));
};

storiesOf('Layer', module).add('Plain', function () {
  return /*#__PURE__*/React.createElement(PlainLayer, null);
});
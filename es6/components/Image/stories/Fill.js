import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Image, Anchor } from 'mnet-ui-base';

var Fill = function Fill() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "start",
    gap: "small"
  }, /*#__PURE__*/React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/React.createElement(Anchor, {
    href: "#"
  }, /*#__PURE__*/React.createElement(Image, {
    fit: "cover",
    fill: true,
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  }))), /*#__PURE__*/React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/React.createElement(Anchor, {
    href: "#"
  }, /*#__PURE__*/React.createElement(Image, {
    fit: "contain",
    fill: true,
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  })))));
};

storiesOf('Image', module).add('Fill', function () {
  return /*#__PURE__*/React.createElement(Fill, null);
});
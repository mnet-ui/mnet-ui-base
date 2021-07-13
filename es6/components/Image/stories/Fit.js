import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Image } from 'mnet-ui-base';

var Fit = function Fit() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "start",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/React.createElement(Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg",
    fit: "contain"
  })), /*#__PURE__*/React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, /*#__PURE__*/React.createElement(Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg",
    fit: "cover"
  }))));
};

storiesOf('Image', module).add('Fit', function () {
  return /*#__PURE__*/React.createElement(Fit, null);
});
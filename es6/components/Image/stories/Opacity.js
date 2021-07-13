import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Image } from 'mnet-ui-base';

var Opacity = function Opacity() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/React.createElement(Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  }), /*#__PURE__*/React.createElement(Image, {
    opacity: "strong",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })), /*#__PURE__*/React.createElement(Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/React.createElement(Image, {
    opacity: "medium",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }), /*#__PURE__*/React.createElement(Image, {
    opacity: "weak",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })), /*#__PURE__*/React.createElement(Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/React.createElement(Image, {
    opacity: false,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }), /*#__PURE__*/React.createElement(Image, {
    opacity: true,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })), /*#__PURE__*/React.createElement(Box, {
    gap: "small",
    direction: "row"
  }, /*#__PURE__*/React.createElement(Image, {
    opacity: "0.6",
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })));
};

storiesOf('Image', module).add('Opacity', function () {
  return /*#__PURE__*/React.createElement(Opacity, null);
});
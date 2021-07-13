import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'mnet-ui-base';

var Simple = function Simple() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Image, {
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }));
};

storiesOf('Image', module).add('Simple', function () {
  return /*#__PURE__*/React.createElement(Simple, null);
});
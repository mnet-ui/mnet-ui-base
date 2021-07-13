import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'mnet-ui-base';

var Size = function Size() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(function (size) {
    return /*#__PURE__*/React.createElement(Box, {
      key: size,
      margin: "small"
    }, /*#__PURE__*/React.createElement(Anchor, {
      size: size,
      label: size,
      href: "#"
    }));
  })));
};

storiesOf('Anchor', module).add('Size', function () {
  return /*#__PURE__*/React.createElement(Size, null);
});
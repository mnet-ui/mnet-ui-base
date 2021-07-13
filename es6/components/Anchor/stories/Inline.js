import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, Paragraph } from 'mnet-ui-base';

var Inline = function Inline() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Paragraph, null, "This is ", /*#__PURE__*/React.createElement(Anchor, {
    label: "an inline link",
    href: "#"
  }), " with surrounding text.")));
};

storiesOf('Anchor', module).add('Inline', function () {
  return /*#__PURE__*/React.createElement(Inline, null);
});
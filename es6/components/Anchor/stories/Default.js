import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'mnet-ui-base';

var Default = function Default() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Anchor, {
    href: "#"
  }, "Link")));
};

storiesOf('Anchor', module).add('Default', function () {
  return /*#__PURE__*/React.createElement(Default, null);
});
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from 'mnet-ui-base';

var Color = function Color() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Heading, {
    color: "accent-1"
  }, "Colored Heading"));
};

storiesOf('Heading', module).add('Color', function () {
  return /*#__PURE__*/React.createElement(Color, null);
});
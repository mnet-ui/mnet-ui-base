import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header, Main, Text } from 'mnet-ui-base';

var Simple = function Simple() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    background: "light-4",
    pad: "small"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "small"
  }, "Header")), /*#__PURE__*/React.createElement(Main, {
    pad: "small"
  }, "I am Main! Main is a good place to place your content."));
};

storiesOf('Main', module).add('Simple', function () {
  return /*#__PURE__*/React.createElement(Simple, null);
});
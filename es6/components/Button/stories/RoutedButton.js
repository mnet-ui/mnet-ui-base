import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, RoutedButton, Text } from 'mnet-ui-base';

var RouteButton = function RouteButton() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Text, {
    margin: "medium",
    size: "small"
  }, "Note: RoutedButton will soon be deprecated"), /*#__PURE__*/React.createElement(RoutedButton, {
    label: "Go",
    path: "/"
  })));
};

storiesOf('Button', module).add('RoutedButton', function () {
  return /*#__PURE__*/React.createElement(RouteButton, null);
});
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, Text } from 'mnet-ui-base';
import { Loader } from '../Loader';

var LoaderPreview = function LoaderPreview() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    margin: "small",
    align: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    margin: "large"
  }, "Circle Loader"), /*#__PURE__*/React.createElement(Loader, {
    primaryColor: "control",
    secondaryColor: "white",
    round: "50%"
  })), /*#__PURE__*/React.createElement(Box, {
    margin: "small",
    align: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    margin: "large"
  }, "Inline Button Loader"), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    label: "Loading",
    isLoading: true,
    background: "brand"
  })));
};

storiesOf('Loader', module).add('Loaders', function () {
  return /*#__PURE__*/React.createElement(LoaderPreview, null);
});
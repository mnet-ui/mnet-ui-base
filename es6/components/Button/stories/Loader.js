function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button } from 'mnet-ui-base';

var LoaderButtons = function LoaderButtons(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    isLoading: true,
    background: "brand",
    primary: true,
    label: "Loader",
    size: "medium",
    onClick: function onClick() {}
  }, props))));
};

storiesOf('Button', module).add('Button Loader', function () {
  return /*#__PURE__*/React.createElement(LoaderButtons, null);
});
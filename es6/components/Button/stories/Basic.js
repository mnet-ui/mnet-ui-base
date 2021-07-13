function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button } from 'mnet-ui-base';

var BasicButtons = function BasicButtons(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    primary: true,
    label: "Primary",
    size: "medium",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    secondary: true,
    size: "medium",
    label: "Secondary",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    tertiary: true,
    size: "medium",
    label: "Tertiary",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    size: "medium",
    label: "Default",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "medium",
    label: "Anchor",
    href: "#"
  })), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    size: "medium",
    disabled: true,
    label: "Disabled",
    onClick: function onClick() {}
  }, props))), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    primary: true,
    label: "Active Primary",
    active: true,
    onClick: function onClick() {}
  }, props))));
};

storiesOf('Button', module).add('Basic', function () {
  return /*#__PURE__*/React.createElement(BasicButtons, null);
});
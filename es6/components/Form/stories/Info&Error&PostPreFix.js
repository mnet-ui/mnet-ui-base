function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, FormField, TextInput } from 'mnet-ui-base';

var FormFieldInfoPostFix = function FormFieldInfoPostFix(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(FormField, _extends({
    direction: "row",
    label: "Label",
    postfix: "ms",
    prefix: "ms",
    htmlFor: "text-input",
    error: "Text to call attention to an issue with this field"
  }, props), /*#__PURE__*/React.createElement(TextInput, {
    id: "text-input",
    placeholder: "placeholder",
    value: "Value",
    onChange: function onChange() {}
  }))));
};

storiesOf('Form', module).add('Info, Error, Post and Pre fix label', function () {
  return /*#__PURE__*/React.createElement(FormFieldInfoPostFix, null);
});
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { mnet, Box, FormField, RadioButtonGroup, MnetUIBase } from 'mnet-ui-base';

var FormFieldRadioGroup = function FormFieldRadioGroup(props) {
  var _useState = useState('c1'),
      value = _useState[0],
      setValue = _useState[1];

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(FormField, _extends({
    label: "Label",
    htmlFor: "select",
    showBorder: false
  }, props), /*#__PURE__*/React.createElement(RadioButtonGroup, {
    id: "radioGrp",
    options: [{
      label: 'Choice 1',
      value: 'c1'
    }, {
      label: 'Choice 2',
      value: 'c2'
    }, {
      label: 'Choice 3',
      value: 'c3'
    }],
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }))));
};

storiesOf('FormField', module).add('RadioButtonGroup', function () {
  return /*#__PURE__*/React.createElement(FormFieldRadioGroup, null);
});
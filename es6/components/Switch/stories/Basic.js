function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'mnet-ui-base';
import { Switch } from '../Switch';

var BasicSwitch = function BasicSwitch(props) {
  var _useState = useState('1'),
      value = _useState[0],
      setValue = _useState[1];

  var options = [{
    label: 'Value 1',
    value: '1'
  }, {
    label: 'Value 2',
    value: '2'
  }];
  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Switch, _extends({
    value: value,
    options: options,
    onValueChange: function onValueChange(_ref) {
      var _ = _ref.target.value;
      return setValue(_);
    }
  }, props)));
};

storiesOf('Switch', module).add('Basic', function () {
  return /*#__PURE__*/React.createElement(BasicSwitch, null);
});
storiesOf('Switch', module).add('Disabled', function () {
  return /*#__PURE__*/React.createElement(BasicSwitch, {
    disabled: true
  });
});
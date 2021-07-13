import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MaskedInput } from 'mnet-ui-base';
var IPv4ElementExp = /^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$/;

var IPv4RangeMaskedInput = function IPv4RangeMaskedInput() {
  var _React$useState = React.useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    width: "medium"
  }, /*#__PURE__*/React.createElement(MaskedInput, {
    mask: [{
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }, {
      fixed: '.'
    }, {
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }, {
      fixed: '.'
    }, {
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }, {
      fixed: '.'
    }, {
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }, {
      fixed: ' - '
    }, {
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }, {
      fixed: '.'
    }, {
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }, {
      fixed: '.'
    }, {
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }, {
      fixed: '.'
    }, {
      length: [1, 3],
      regexp: IPv4ElementExp,
      placeholder: 'xxx'
    }],
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }))));
};

storiesOf('MaskedInput', module).add('IPv4 Range', function () {
  return /*#__PURE__*/React.createElement(IPv4RangeMaskedInput, null);
});
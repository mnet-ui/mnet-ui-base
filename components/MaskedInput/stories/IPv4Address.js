"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IPv4ElementExp = /^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$/;

var IPv4MaskedInput = function IPv4MaskedInput() {
  var _React$useState = _react["default"].useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MaskedInput, {
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
    }],
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }))));
};

(0, _react2.storiesOf)('MaskedInput', module).add('IPv4 Address', function () {
  return /*#__PURE__*/_react["default"].createElement(IPv4MaskedInput, null);
});
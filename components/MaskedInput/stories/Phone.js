"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PhoneMaskedInput = function PhoneMaskedInput() {
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
      fixed: '('
    }, {
      length: 3,
      regexp: /^[0-9]{1,3}$/,
      placeholder: 'xxx'
    }, {
      fixed: ')'
    }, {
      fixed: ' '
    }, {
      length: 3,
      regexp: /^[0-9]{1,3}$/,
      placeholder: 'xxx'
    }, {
      fixed: '-'
    }, {
      length: 4,
      regexp: /^[0-9]{1,4}$/,
      placeholder: 'xxxx'
    }],
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }))));
};

(0, _react2.storiesOf)('MaskedInput', module).add('Phone', function () {
  return /*#__PURE__*/_react["default"].createElement(PhoneMaskedInput, null);
});
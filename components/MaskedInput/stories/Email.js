"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EmailMaskedInput = function EmailMaskedInput() {
  var _React$useState = _react["default"].useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var emailMask = [{
    regexp: /^[\w\-_.]+$/,
    placeholder: 'example'
  }, {
    fixed: '@'
  }, {
    regexp: /^[\w]+$/,
    placeholder: 'my'
  }, {
    fixed: '.'
  }, {
    regexp: /^[\w]+$/,
    placeholder: 'com'
  }];
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
    width: "medium",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MaskedInput, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.MailOption, null),
    mask: emailMask,
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MaskedInput, {
    reverse: true,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.MailOption, null),
    mask: emailMask,
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }))));
};

(0, _react2.storiesOf)('MaskedInput', module).add('Email with Icon', function () {
  return /*#__PURE__*/_react["default"].createElement(EmailMaskedInput, null);
});
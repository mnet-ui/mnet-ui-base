"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// This example shows a way to perform validation across multiple fields.
var Example = function Example() {
  var _React$useState = _react["default"].useState({
    name: 'a',
    email: 'b'
  }),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var message = value.name && value.email && value.name[0] !== value.email[0] ? 'Mismatched first character' : undefined;
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Form, {
    value: value,
    onChange: function onChange(nextValue) {
      return setValue(nextValue);
    },
    onSubmit: function onSubmit(_ref) {
      var nextValue = _ref.value;
      return console.log(nextValue);
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name",
    required: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    name: "name",
    type: "name"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Email",
    name: "email",
    required: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    name: "email",
    type: "email"
  })), message && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: {
      horizontal: 'small'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    color: "status-error"
  }, message)), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    justify: "between",
    margin: {
      top: 'medium'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    type: "reset",
    label: "Reset"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('Aggregate validation', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
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
    onChange: function onChange(value) {
      return console.log('Change', value);
    },
    onSubmit: function onSubmit(event) {
      return console.log('Submit', event.value, event.touched);
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    name: "name"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Email",
    name: "email",
    required: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MaskedInput, {
    name: "email",
    mask: [{
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
    }]
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    name: "subscribe"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
    name: "subscribe",
    label: "Subscribe?"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    name: "ampm"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RadioButtonGroup, {
    name: "ampm",
    options: ['morning', 'evening']
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Size",
    name: "size"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    name: "size",
    options: ['small', 'medium', 'large']
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Comments",
    name: "comments"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextArea, {
    name: "comments"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Age",
    name: "age",
    pad: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RangeInput, {
    name: "age",
    min: 15,
    max: 75
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    justify: "between",
    margin: {
      top: 'medium'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    type: "reset",
    label: "Reset"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('Uncontrolled', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
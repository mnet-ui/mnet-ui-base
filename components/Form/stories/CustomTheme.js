"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _utils = require("mnet-ui-base/utils");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customFormFieldTheme = {
  global: {
    font: {
      size: '16px'
    },
    input: {
      weight: 400
    }
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'small',
      margin: 'xsmall',
      weight: 600
    },
    border: {
      position: 'outer',
      side: 'all'
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: true
      }
    },
    content: {
      pad: 'small'
    },
    error: {
      background: {
        color: 'status-critical',
        opacity: 'weak'
      }
    },
    margin: 'none'
  }
};

var CustomFormField = function CustomFormField() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: (0, _utils.deepMerge)(_mnetUiBase.mnet, customFormFieldTheme)
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Form, {
    onReset: function onReset(event) {
      return console.log(event);
    },
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value;
      return console.log('Submit', value);
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name",
    required: true
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
    name: "comments",
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextArea, {
    name: "comments",
    disabled: true
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Age",
    name: "age"
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

(0, _react2.storiesOf)('Form', module).add('Custom Theme', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomFormField, null);
});
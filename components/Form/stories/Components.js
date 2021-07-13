"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
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
      var value = _ref.value,
          touched = _ref.touched;
      return console.log('Submit', value, touched);
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name",
    required: true,
    validate: [{
      regexp: /^[a-z]/i
    }, function (name) {
      if (name && name.length === 1) return 'must be >1 character';
      return undefined;
    }, function (name) {
      if (name && name.length <= 2) return {
        message: "that's short",
        status: 'info'
      };
      return undefined;
    }]
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Email",
    name: "email",
    type: "email",
    required: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Employee ID",
    name: "employeeId",
    required: true,
    validate: {
      regexp: /^[0-9]{4,6}$/,
      message: '4-6 digits'
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    name: "subscribe",
    component: _mnetUiBase.CheckBox,
    label: "Subscribe?"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    name: "ampm",
    component: _mnetUiBase.RadioButtonGroup,
    options: ['morning', 'evening']
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Size",
    name: "size",
    component: _mnetUiBase.Select,
    onChange: function onChange(event) {
      return console.log(event);
    },
    options: ['small', 'medium', 'large', 'xlarge']
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Comments",
    name: "comments",
    component: _mnetUiBase.TextArea
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Age",
    name: "age",
    component: _mnetUiBase.RangeInput,
    pad: true,
    min: 15,
    max: 75
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Custom",
    name: "custom",
    component: function component(props) {
      return /*#__PURE__*/_react["default"].createElement("input", props);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
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

(0, _react2.storiesOf)('Form', module).add('FormField component', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
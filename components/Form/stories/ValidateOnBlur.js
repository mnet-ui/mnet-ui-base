"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

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
    validate: "blur",
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
    required: true,
    validate: [{
      regexp: /^[a-z]/i
    }, function (name) {
      if (name && name.length === 1) return 'must be >1 character';
      return undefined;
    }, function (name) {
      if (name === 'good') return {
        message: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
          align: "end"
        }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.StatusGood, null)),
        status: 'info'
      };
      return undefined;
    }]
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Email",
    name: "email",
    required: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    name: "email",
    type: "email"
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

(0, _react2.storiesOf)('Form', module).add('Validate on blur', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormFieldLabel = function FormFieldLabel(props) {
  var required = props.required,
      label = props.label,
      rest = _objectWithoutPropertiesLoose(props, ["required", "label"]);

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, _extends({
    label: required ? /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      direction: "row"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, label), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
      color: "status-critical"
    }, "*")) : label,
    required: required
  }, rest));
};

var LabelFormField = function LabelFormField() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Form, null, /*#__PURE__*/_react["default"].createElement(FormFieldLabel, {
    name: "firstName",
    label: "FirstName",
    required: true
  }), /*#__PURE__*/_react["default"].createElement(FormFieldLabel, {
    name: "LastName",
    label: "LastName",
    required: true
  }), /*#__PURE__*/_react["default"].createElement(FormFieldLabel, {
    name: "email",
    label: "Email"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Submit",
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: {
      left: 'small'
    },
    size: "small",
    color: "status-critical"
  }, "* Required Field"))));
};

(0, _react2.storiesOf)('Form', module).add('Required Label', function () {
  return /*#__PURE__*/_react["default"].createElement(LabelFormField, null);
});
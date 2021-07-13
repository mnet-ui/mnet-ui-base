"use strict";

exports.__esModule = true;
exports.Switch = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _utils = require("../../utils");

var _RadioButtonGroup = require("../RadioButtonGroup");

var _switchTheme = _interopRequireDefault(require("./switchTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onValueChange = _ref.onValueChange,
      disabled = _ref.disabled,
      rest = _objectWithoutPropertiesLoose(_ref, ["value", "options", "onValueChange", "disabled"]);

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeContext.Consumer, null, function (theme) {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeContext.Provider, {
      value: (0, _utils.deepMerge)(theme, (0, _switchTheme["default"])())
    }, /*#__PURE__*/_react["default"].createElement(_RadioButtonGroup.RadioButtonGroup, _extends({
      name: "radio",
      options: options,
      value: value,
      onChange: onValueChange,
      disabled: disabled
    }, theme["switch"].container, disabled && theme["switch"].disabled, rest)));
  });
};

Switch.displayName = 'Switch';
var SwitchDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  SwitchDoc = require('./doc').doc(Switch);
}

var SwitchWrapper = SwitchDoc || Switch;
exports.Switch = SwitchWrapper;
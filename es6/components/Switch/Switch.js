function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { ThemeContext } from 'styled-components';
import { deepMerge } from '../../utils';
import { RadioButtonGroup } from '../RadioButtonGroup';
import getSwitchTheme from './switchTheme';

var Switch = function Switch(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onValueChange = _ref.onValueChange,
      disabled = _ref.disabled,
      rest = _objectWithoutPropertiesLoose(_ref, ["value", "options", "onValueChange", "disabled"]);

  return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
    return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
      value: deepMerge(theme, getSwitchTheme())
    }, /*#__PURE__*/React.createElement(RadioButtonGroup, _extends({
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
export { SwitchWrapper as Switch };
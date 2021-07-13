function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

var ControlButton = function ControlButton(_ref) {
  var onOk = _ref.onOk,
      onCancel = _ref.onCancel;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var ControlButtonWrapper = styled(Box).withConfig({
    displayName: "ControlButton__ControlButtonWrapper",
    componentId: "sc-1tomcrk-0"
  })(["", ";"], function (props) {
    return props.theme.multiselect.controls.wrapper.extend;
  });
  return /*#__PURE__*/React.createElement(ControlButtonWrapper, theme.multiselect.controls.wrapper, /*#__PURE__*/React.createElement(Button, _extends({
    role: "button",
    a11yTitle: "OK button (Update selected values)"
  }, theme.multiselect.controls.button, {
    onClick: onOk,
    primary: true
  }), /*#__PURE__*/React.createElement(Text, {
    weight: 600
  }, "OK")), /*#__PURE__*/React.createElement(Button, _extends({
    role: "button",
    a11yTitle: "Cancel button"
  }, theme.multiselect.controls.button, {
    onClick: onCancel,
    secondary: true
  }), /*#__PURE__*/React.createElement(Text, {
    weight: 600
  }, "Cancel")));
};

export { ControlButton };
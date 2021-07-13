function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Text } from '../Text';

var ValueLabelWithNumber = function ValueLabelWithNumber(_ref) {
  var value = _ref.value,
      number = _ref.number,
      color = _ref.color;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    margin: {
      horizontal: 'medium'
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Text, _extends({
    "aria-label": "Selected Label Value",
    size: "medium",
    weight: 600
  }, theme.multiselect.label), number ? value : 'Select'), number > 0 && /*#__PURE__*/React.createElement(Box, {
    pad: "5px",
    background: color,
    round: "xsmall",
    margin: {
      horizontal: 'medium'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    "aria-label": "Selected Label Count",
    size: "10px",
    color: "white",
    weight: 600
  }, number)));
};

export { ValueLabelWithNumber };
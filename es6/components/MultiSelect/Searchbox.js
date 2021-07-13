function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Search } from 'grommet-icons/icons/Search';
import { defaultProps } from '../../default-props';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Box } from '../Box';

var Searchbox = function Searchbox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      width = _ref.width,
      layout = _ref.layout,
      selectIcon = _ref.selectIcon,
      onCancel = _ref.onCancel,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? true : _ref$reverse,
      shouldRenderInDrop = _ref.shouldRenderInDrop;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var handleChange = function handleChange(textValue) {
    if (textValue.replace(/\s/g, '').length || !textValue.length) return onValueChange(textValue);
    return null;
  };

  var CollapsibleIcon = selectIcon && selectIcon.up;
  var icons = /*#__PURE__*/React.createElement(Search, theme.multiselect.searchbox.icon);
  var collapseBtn = !shouldRenderInDrop && selectIcon && /*#__PURE__*/React.createElement(Button, {
    role: "button",
    margin: "none",
    onClick: onCancel,
    plain: true,
    style: {
      position: 'absolute',
      right: '15px'
    }
  }, /*#__PURE__*/React.createElement(CollapsibleIcon, {
    color: "dark-1",
    size: selectIcon.size
  }));
  return /*#__PURE__*/React.createElement(Box, _extends({
    layout: layout
  }, theme.multiselect.searchbox.container), /*#__PURE__*/React.createElement(TextInput, {
    role: "search",
    "aria-label": "multiselect searchbox",
    plain: true,
    fill: true,
    icon: icons,
    reverse: reverse,
    width: width,
    value: value,
    valueLabel: /*#__PURE__*/React.createElement(Text, null, "value"),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    placeholder: /*#__PURE__*/React.createElement(Text, theme.multiselect.searchbox.placeholder, value ? '' : placeholder)
  }), collapseBtn);
};

export { Searchbox };
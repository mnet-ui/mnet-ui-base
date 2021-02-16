function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Search } from 'grommet-icons/icons/Search';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Box } from '../Box';
import { IconWrapper } from './StyledMultiSelect';

var Searchbox = function Searchbox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      width = _ref.width,
      layout = _ref.layout,
      selectIcon = _ref.selectIcon,
      onCancel = _ref.onCancel;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var handleChange = function handleChange(textValue) {
    if (textValue.replace(/\s/g, '').length || !textValue.length) return onValueChange(textValue);
    return null;
  };

  var CollapsibleIcon = selectIcon && selectIcon.up;
  var icons = /*#__PURE__*/React.createElement(IconWrapper, theme.multiselect.searchbox.iconWrapper, /*#__PURE__*/React.createElement(Search, theme.multiselect.searchbox.icon), selectIcon && /*#__PURE__*/React.createElement(Button, {
    role: "button",
    onClick: onCancel,
    plain: true
  }, /*#__PURE__*/React.createElement(CollapsibleIcon // margin={{ left: 'large', right: 'small' }}
  , {
    color: "dark-1",
    size: selectIcon.size
  })));
  return /*#__PURE__*/React.createElement(Box, _extends({
    layout: layout
  }, theme.multiselect.searchbox.container), /*#__PURE__*/React.createElement(Box, theme.multiselect.searchbox.textWrapper, /*#__PURE__*/React.createElement(TextInput, {
    role: "search",
    "aria-label": "multiselect searchbox",
    plain: true,
    icon: icons,
    reverse: true,
    width: width,
    value: value,
    valueLabel: /*#__PURE__*/React.createElement(Text, null, "value"),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    placeholder: /*#__PURE__*/React.createElement(Text, theme.multiselect.searchbox.placeholder, value ? '' : placeholder)
  })));
};

export { Searchbox };
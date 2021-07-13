function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { OptionWrapper, OptionText, OptionLabel } from './StyledMultiSelect';

var OptionChips = function OptionChips(_ref) {
  var options = _ref.options,
      value = _ref.value,
      isSelected = _ref.isSelected,
      getLabel = _ref.optionLabel,
      onRemove = _ref.onRemove,
      clearAll = _ref.clearAll,
      width = _ref.width,
      height = _ref.height,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      renderEmptySelected = _ref.renderEmptySelected,
      layout = _ref.layout,
      showCount = _ref.showCount;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var renderClearButton = function renderClearButton() {
    return /*#__PURE__*/React.createElement(Button, {
      role: "button",
      a11yTitle: "Clear all selected options",
      focusIndicator: false,
      onClick: function onClick() {
        return clearAll([]);
      },
      plain: true
    }, /*#__PURE__*/React.createElement(Box, {
      border: theme.multiselect.chips.clear.border,
      height: theme.multiselect.chips.clear.height
    }, /*#__PURE__*/React.createElement(Text, theme.multiselect.chips.clear, "CLEAR ALL")));
  };

  var getSelectedOption = function getSelectedOption() {
    return options.reduce(function (acc, item, index) {
      if (isSelected(index)) acc.push(index);
      return acc;
    }, []);
  };

  return /*#__PURE__*/React.createElement(Box, {
    height: height
  }, Array.isArray(value) && value.length > 0 && /*#__PURE__*/React.createElement(Box, null, inclusionExclusion && isExcluded !== null && /*#__PURE__*/React.createElement(Box, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, /*#__PURE__*/React.createElement(Text, _extends({
    "aria-label": "Chip List header"
  }, theme.multiselect.rightPanel.incExcHeader.text), isExcluded ? 'Excluded' : 'Included'), /*#__PURE__*/React.createElement(Box, theme.multiselect.rightPanel.incExcHeader.count, /*#__PURE__*/React.createElement(Text, {
    weight: "600"
  }, value.length)))), !inclusionExclusion && layout === 'double-column' && /*#__PURE__*/React.createElement(Box, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, /*#__PURE__*/React.createElement(Text, theme.multiselect.rightPanel.incExcHeader.text, "Selected"), !showCount && /*#__PURE__*/React.createElement(Box, theme.multiselect.rightPanel.incExcHeader.count, /*#__PURE__*/React.createElement(Text, {
    weight: "600"
  }, value.length)))), /*#__PURE__*/React.createElement(OptionWrapper, _extends({
    twoColumnLayout: layout === 'double-column',
    width: width,
    height: height
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), /*#__PURE__*/React.createElement(Box, {
    width: "100%"
  }, getSelectedOption().map(function (item) {
    return /*#__PURE__*/React.createElement(OptionText, _extends({
      key: item,
      twoColumnLayout: layout === 'double-column'
    }, theme.multiselect.chips.option), /*#__PURE__*/React.createElement(OptionLabel, _extends({
      isExcluded: isExcluded
    }, theme.multiselect.chips.label), getLabel(item)), /*#__PURE__*/React.createElement(Close, _extends({
      role: "button",
      "aria-label": "Remove selected chip " + getLabel(item),
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick(event) {
        return onRemove(event, item);
      }
    }, theme.multiselect.chips.icon)));
  }))), (!inclusionExclusion || inclusionExclusion && isExcluded !== null) && renderClearButton()), (!Array.isArray(value) || !value.length) && /*#__PURE__*/React.createElement(Box, {
    justify: "center",
    align: "center",
    height: height
  }, renderEmptySelected));
};

export { OptionChips };
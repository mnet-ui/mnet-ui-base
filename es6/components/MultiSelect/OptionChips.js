function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { OptionsBox, OptionWrapper, OptionText, OptionLabel } from './StyledMultiSelect';

var OptionChips = function OptionChips(_ref) {
  var options = _ref.options,
      value = _ref.value,
      isSelected = _ref.isSelected,
      optionLabel = _ref.optionLabel,
      onRemove = _ref.onRemove,
      clearAll = _ref.clearAll,
      width = _ref.width,
      height = _ref.height,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      renderEmptySelected = _ref.renderEmptySelected,
      layout = _ref.layout;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var renderClearButton = function renderClearButton() {
    return /*#__PURE__*/React.createElement(Button, {
      focusIndicator: false,
      onClick: function onClick() {
        return clearAll([]);
      },
      plain: true
    }, /*#__PURE__*/React.createElement(Box, {
      border: {
        side: 'bottom',
        color: theme.multiselect.chips.clear.color
      }
    }, /*#__PURE__*/React.createElement(Text, theme.multiselect.chips.clear, "CLEAR ALL")));
  };

  var getSelectedOption = function getSelectedOption() {
    return options.reduce(function (acc, item, index) {
      if (isSelected(index)) acc.push(index);
      return acc;
    }, []);
  };

  var IncExcHeader = styled(Box).withConfig({
    displayName: "OptionChips__IncExcHeader",
    componentId: "sc-1w3ospt-0"
  })(["position:sticky;top:0;"]);
  return /*#__PURE__*/React.createElement(OptionsBox, null, Array.isArray(value) && value.length > 0 && /*#__PURE__*/React.createElement(Box, {
    height: {
      max: layout === 'single-column' ? height : 'auto'
    }
  }, inclusionExclusion && isExcluded !== null && /*#__PURE__*/React.createElement(IncExcHeader, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/React.createElement(Text, theme.multiselect.rightPanel.incExcHeader.text, isExcluded ? 'Excluded' : 'Included', " List"), renderClearButton()), /*#__PURE__*/React.createElement(OptionWrapper, _extends({
    twoColumnLayout: layout === 'double-column',
    width: width
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), getSelectedOption().map(function (item) {
    return /*#__PURE__*/React.createElement(OptionText, _extends({
      key: item,
      twoColumnLayout: layout === 'double-column'
    }, theme.multiselect.chips.option), /*#__PURE__*/React.createElement(OptionLabel, _extends({
      isExcluded: isExcluded
    }, theme.multiselect.chips.label), optionLabel(item)), /*#__PURE__*/React.createElement(Close, _extends({
      onClick: function onClick(event) {
        return onRemove(event, item);
      }
    }, theme.multiselect.chips.icon)));
  }), !inclusionExclusion && renderClearButton())), (!Array.isArray(value) || !value.length) && renderEmptySelected);
};

export { OptionChips };
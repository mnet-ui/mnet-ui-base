function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Searchbox } from './Searchbox';
import { OptionsBox, OptionWrapper, OptionText, OptionLabel } from './StyledMultiSelect';

var SelectedList = function SelectedList(_ref) {
  var selectedItems = _ref.selectedItems,
      layout = _ref.layout,
      isExcluded = _ref.isExcluded,
      renderSearch = _ref.renderSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      onRemove = _ref.onRemove,
      clearAll = _ref.clearAll,
      renderEmptySelected = _ref.renderEmptySelected,
      height = _ref.height,
      onCancel = _ref.onCancel;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var _React$useState = React.useState(''),
      search = _React$useState[0],
      setSearch = _React$useState[1];

  var filteredItems = selectedItems;
  if (search.length) filteredItems = selectedItems.filter(function (val) {
    return val.includes(search);
  });

  var renderClearButton = function renderClearButton() {
    return /*#__PURE__*/React.createElement(Button, {
      role: "button",
      a11yTitle: "Clear all selected options",
      focusIndicator: false,
      onClick: function onClick() {
        return clearAll();
      },
      plain: true
    }, /*#__PURE__*/React.createElement(Box, {
      border: theme.multiselect.chips.clear.border,
      height: theme.multiselect.chips.clear.height
    }, /*#__PURE__*/React.createElement(Text, theme.multiselect.chips.clear, "CLEAR ALL")));
  };

  var Sticky = styled(Box).withConfig({
    displayName: "CustomSelectedList__Sticky",
    componentId: "rqavmq-0"
  })(["position:sticky;top:0;z-index:1;"]);
  var CollapsibleIcon = theme.select.icons && theme.select.icons.up;
  return /*#__PURE__*/React.createElement(OptionsBox, {
    style: {
      height: '100%'
    }
  }, selectedItems && selectedItems.length > 0 && /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Sticky, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, /*#__PURE__*/React.createElement(Text, theme.multiselect.rightPanel.incExcHeader.text, isExcluded ? 'Excluded' : 'Included'), /*#__PURE__*/React.createElement(Box, theme.multiselect.rightPanel.incExcHeader.count, /*#__PURE__*/React.createElement(Text, {
    weight: "600"
  }, selectedItems.length))), /*#__PURE__*/React.createElement(Box, {
    flex: "grow"
  }), CollapsibleIcon && /*#__PURE__*/React.createElement(Button, {
    role: "button",
    onClick: onCancel,
    plain: true,
    style: {
      position: 'absolute',
      right: '15px'
    }
  }, /*#__PURE__*/React.createElement(CollapsibleIcon, {
    color: "dark-1",
    size: theme.select.icons.size
  }))), renderSearch && /*#__PURE__*/React.createElement(Searchbox, {
    reverse: false,
    layout: layout,
    placeholder: searchPlaceholder,
    value: search,
    onValueChange: function onValueChange(val) {
      return setSearch(val);
    }
  }), /*#__PURE__*/React.createElement(OptionWrapper, _extends({
    twoColumnLayout: layout === 'double-column',
    height: height
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), /*#__PURE__*/React.createElement(Box, {
    width: "100%"
  }, filteredItems.length ? filteredItems.map(function (item, id) {
    return /*#__PURE__*/React.createElement(OptionText, _extends({
      key: id + "-" + item,
      twoColumnLayout: layout === 'double-column'
    }, theme.multiselect.chips.option), /*#__PURE__*/React.createElement(OptionLabel, _extends({
      isExcluded: isExcluded
    }, theme.multiselect.chips.label), /*#__PURE__*/React.createElement(Text, null, item)), /*#__PURE__*/React.createElement(Close, _extends({
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return onRemove(item);
      }
    }, theme.multiselect.chips.icon)));
  }) : /*#__PURE__*/React.createElement(Box, {
    align: "center",
    margin: "medium",
    fill: true
  }, /*#__PURE__*/React.createElement(Text, null, "No Result Found")))), renderClearButton()), !selectedItems.length && /*#__PURE__*/React.createElement(Box, {
    align: "end",
    pad: "large",
    flex: "grow"
  }, CollapsibleIcon && /*#__PURE__*/React.createElement(Button, {
    role: "button",
    style: {
      position: 'absolute'
    },
    onClick: onCancel,
    plain: true
  }, /*#__PURE__*/React.createElement(CollapsibleIcon, {
    color: "dark-1",
    size: theme.select.icons.size
  })), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "center",
    fill: true
  }, renderEmptySelected)));
};

export default /*#__PURE__*/React.memo(SelectedList);
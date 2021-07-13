function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { InfiniteScroll } from '../InfiniteScroll';
import { Text } from '../Text';
import { Box } from '../Box';
import { OptionsBox, SelectOption } from './StyledMultiSelect';
import { OptionWithCheckControl } from './OptionWithCheckControl';
import { OptionChips } from './OptionChips';
import { ControlButton } from './ControlButton';
import { Searchbox } from './Searchbox';
import { CustomMultiSelect } from './CustomMultiSelect';
var SELECT_ALL_INDEX = -1;

var ColumnSelect = function ColumnSelect(_ref) {
  var options = _ref.options,
      value = _ref.value,
      isSelected = _ref.isSelected,
      isDisabled = _ref.isDisabled,
      selectOption = _ref.selectOption,
      onMore = _ref.onMore,
      replace = _ref.replace,
      activeIndex = _ref.activeIndex,
      onActiveOption = _ref.onActiveOption,
      optionLabel = _ref.optionLabel,
      optionValue = _ref.optionValue,
      onCancel = _ref.onCancel,
      onOk = _ref.onOk,
      layout = _ref.layout,
      width = _ref.width,
      height = _ref.height,
      emptySearchMessage = _ref.emptySearchMessage,
      showSelectAll = _ref.showSelectAll,
      showOptionChips = _ref.showOptionChips,
      showControlButtons = _ref.showControlButtons,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      setIncExcVal = _ref.setIncExcVal,
      renderSearch = _ref.renderSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      searchValue = _ref.searchValue,
      onSearchChange = _ref.onSearchChange,
      renderEmptySelected = _ref.renderEmptySelected,
      onValueChange = _ref.onValueChange,
      custom = _ref.custom,
      validate = _ref.validate,
      onChange = _ref.onChange,
      shouldRenderInDrop = _ref.shouldRenderInDrop,
      showCount = _ref.showCount,
      _ref$removeSelected = _ref.removeSelected,
      removeSelected = _ref$removeSelected === void 0 ? true : _ref$removeSelected,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var allSelected = options && options.every(function (item, index) {
    return isSelected(index);
  });
  var setOption = useCallback(function (event, type, index) {
    setIncExcVal(type);

    if (index !== SELECT_ALL_INDEX) {
      selectOption(index)(event);
    } else {
      onChange({
        value: allSelected ? [] : options.map(function (item, i) {
          return optionValue(i);
        }),
        selected: allSelected ? [] : options.map(function (item, i) {
          return i;
        })
      });
    }
  }, [allSelected, onChange, optionValue, options, selectOption, setIncExcVal]);
  var optionSelect = useCallback(function (event, index) {
    if (inclusionExclusion && value.length === 1 && isSelected(index)) setIncExcVal(null);
    selectOption(index)(event);
  }, [inclusionExclusion, isSelected, selectOption, setIncExcVal, value]);
  var setUnsetChips = useCallback(function (updatedValues) {
    if (inclusionExclusion && !updatedValues.length) setIncExcVal(null);
    onChange({
      value: updatedValues
    });
  }, [inclusionExclusion, setIncExcVal, onChange]);

  var renderOptionChips = function renderOptionChips() {
    return /*#__PURE__*/React.createElement(OptionChips, {
      width: width,
      height: height || 'small',
      options: options,
      value: value,
      isSelected: isSelected,
      optionLabel: optionLabel,
      onRemove: optionSelect,
      clearAll: setUnsetChips,
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      renderEmptySelected: renderEmptySelected,
      layout: layout,
      showCount: showCount
    });
  };

  if (custom) {
    return /*#__PURE__*/React.createElement(CustomMultiSelect, {
      value: value,
      layout: layout,
      onValueChange: onValueChange,
      renderSearch: renderSearch,
      placeholder: searchPlaceholder,
      renderEmptySelected: renderEmptySelected,
      width: width,
      height: height,
      custom: custom,
      isExcluded: isExcluded,
      setIncExcVal: setIncExcVal,
      inclusionExclusion: inclusionExclusion,
      validate: validate,
      onCancel: onCancel
    });
  }

  return /*#__PURE__*/React.createElement(Box, _extends({
    width: width
  }, theme.multiselect.container), renderSearch && /*#__PURE__*/React.createElement(Searchbox, {
    reverse: false,
    width: width,
    placeholder: searchPlaceholder,
    value: searchValue,
    onValueChange: onSearchChange,
    layout: layout,
    shouldRenderInDrop: shouldRenderInDrop,
    selectIcon: theme.select.icons,
    onCancel: onCancel
  }), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    height: height || 'small'
  }, /*#__PURE__*/React.createElement(Box, {
    width: layout === 'single-column' ? '100%' : '50%' // pad={{ vertical: 'small' }}

  }, /*#__PURE__*/React.createElement(OptionsBox, {
    role: "menubar",
    tabIndex: "-1"
  }, options.length > 0 ? /*#__PURE__*/React.createElement(InfiniteScroll, {
    items: options,
    step: theme.select.step,
    onMore: onMore,
    replace: replace,
    show: activeIndex !== -1 ? activeIndex : undefined
  }, function (option, index, optionRef) {
    var optionDisabled = isDisabled(index);
    var optionSelected = isSelected(index);
    var optionActive = activeIndex === index;
    return /*#__PURE__*/React.createElement(React.Fragment, null, index === 0 && showSelectAll && /*#__PURE__*/React.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index + "_select_all",
      ref: optionRef,
      tabIndex: "-1",
      role: "menuitem",
      a11yTitle: "select all options",
      hoverIndicator: theme.select.activeColor,
      selected: allSelected,
      plain: true,
      onMouseOver: onActiveOption(-1),
      onFocus: onActiveOption(-1),
      onClick: !inclusionExclusion || inclusionExclusion && isExcluded !== null ? function () {
        return setUnsetChips(allSelected ? [] : options.map(function (item, ind) {
          return optionValue(ind);
        }));
      } : undefined
    }, /*#__PURE__*/React.createElement(OptionWithCheckControl, {
      selected: allSelected,
      label: "Select All",
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      index: SELECT_ALL_INDEX,
      onSelect: setOption,
      active: activeIndex === -1,
      reverse: reverse
    })), /*#__PURE__*/React.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index,
      ref: optionRef,
      tabIndex: "-1",
      role: "menuitem",
      a11yTitle: "option id - " + option.id,
      hoverIndicator: theme.select.activeColor,
      disabled: optionDisabled || removeSelected && optionSelected || undefined,
      active: optionActive,
      selected: optionSelected,
      option: option,
      plain: true,
      onMouseOver: !optionDisabled ? onActiveOption(index) : undefined,
      onClick: !optionDisabled && !inclusionExclusion || !optionDisabled && inclusionExclusion && isExcluded !== null ? function (event) {
        return optionSelect(event, index);
      } : undefined
    }, /*#__PURE__*/React.createElement(OptionWithCheckControl, {
      removeSelected: removeSelected,
      reverse: reverse,
      selected: optionSelected,
      label: optionLabel(index),
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      index: index,
      onSelect: setOption,
      active: optionActive
    })));
  }) : /*#__PURE__*/React.createElement(SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true,
    option: "No values available"
  }, /*#__PURE__*/React.createElement(Box, selectOptionsStyle, /*#__PURE__*/React.createElement(Text, theme.select.container.text, emptySearchMessage || 'No values available'))))), layout === 'double-column' && /*#__PURE__*/React.createElement(Box, {
    width: "50%",
    border: [{
      side: 'left',
      color: theme.multiselect.rightPanel.border
    }]
  }, renderOptionChips())), showOptionChips && layout === 'single-column' && renderOptionChips(), showControlButtons && /*#__PURE__*/React.createElement(ControlButton, {
    onOk: onOk,
    onCancel: onCancel
  }));
};

export { ColumnSelect };
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Box } from '../Box';
import { Select } from '../Select';
import { ColumnSelect } from './ColumnSelect';
import { ValueLabelWithIcon } from './ValueLabelWithIcon';
import { applyKey } from './utils';

var MultiSelect = function MultiSelect(_ref) {
  var width = _ref.width,
      height = _ref.height,
      options = _ref.options,
      valueProp = _ref.value,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey,
      onValueChange = _ref.onValueChange,
      layout = _ref.layout,
      onSearch = _ref.onSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      emptySearchMessage = _ref.emptySearchMessage,
      withSelectAll = _ref.withSelectAll,
      withOptionChips = _ref.withOptionChips,
      withUpdateCancelButtons = _ref.withUpdateCancelButtons,
      searchable = _ref.searchable,
      custom = _ref.custom,
      withInclusionExclusion = _ref.withInclusionExclusion,
      isExcludedProp = _ref.isExcluded,
      onIncExcChange = _ref.onIncExcChange,
      renderEmptySelected = _ref.renderEmptySelected,
      gridArea = _ref.gridArea,
      validate = _ref.validate,
      size = _ref.size,
      isOpenState = _ref.isOpenState,
      isEnableOutSideClick = _ref.isEnableOutSideClick,
      _ref$shouldRenderInDr = _ref.shouldRenderInDrop,
      shouldRenderInDrop = _ref$shouldRenderInDr === void 0 ? true : _ref$shouldRenderInDr,
      placeholder = _ref.placeholder,
      _ref$removeSelected = _ref.removeSelected,
      removeSelected = _ref$removeSelected === void 0 ? true : _ref$removeSelected,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      rest = _objectWithoutPropertiesLoose(_ref, ["width", "height", "options", "value", "labelKey", "valueKey", "onValueChange", "layout", "onSearch", "searchPlaceholder", "emptySearchMessage", "withSelectAll", "withOptionChips", "withUpdateCancelButtons", "searchable", "custom", "withInclusionExclusion", "isExcluded", "onIncExcChange", "renderEmptySelected", "gridArea", "validate", "size", "isOpenState", "isEnableOutSideClick", "shouldRenderInDrop", "placeholder", "removeSelected", "reverse"]);

  var _useState = useState(valueProp),
      internalValue = _useState[0],
      updateInternalValue = _useState[1];

  var _useState2 = useState(isExcludedProp),
      internalIsExcluded = _useState2[0],
      updateInternalIsExcluded = _useState2[1];

  var _useState3 = useState(isOpenState || false),
      isOpen = _useState3[0],
      updateIsOpen = _useState3[1];

  var _useState4 = useState(''),
      search = _useState4[0],
      updateSearch = _useState4[1];

  var isExcluded = withUpdateCancelButtons ? internalIsExcluded : isExcludedProp;
  var value = withUpdateCancelButtons ? internalValue : valueProp;
  var _rest$showCount = rest.showCount,
      showCount = _rest$showCount === void 0 ? false : _rest$showCount,
      _rest$rowCount = rest.rowCount,
      rowCount = _rest$rowCount === void 0 ? 5 : _rest$rowCount;
  useEffect(function () {
    if (!isOpen && withUpdateCancelButtons) {
      updateInternalValue(valueProp);
    }
  }, [isOpen, valueProp, withUpdateCancelButtons]);

  var onClose = function onClose() {
    if (withInclusionExclusion) {
      updateInternalValue(valueProp);
      updateInternalIsExcluded(isExcludedProp);
    }

    updateIsOpen(false);
  };

  var onOpen = function onOpen() {
    if (withInclusionExclusion) {
      updateInternalValue(valueProp);
      updateInternalIsExcluded(isExcludedProp);
    }

    updateIsOpen(true);
  };

  var onIncludeExclude = function onIncludeExclude(newValue) {
    var updater = withUpdateCancelButtons ? updateInternalIsExcluded : onIncExcChange;
    updater(newValue);
  };

  var onCancelClick = function onCancelClick() {
    onClose();
  };

  var onOkClick = function onOkClick() {
    onValueChange(value);

    if (onIncExcChange) {
      onIncExcChange(isExcluded);
    }

    updateIsOpen(false);
  };

  var getValue = function getValue(index, array, param) {
    return applyKey(array[index], param);
  };

  var onSearchChange = function onSearchChange(searchInput) {
    var escapedText = searchInput.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    updateSearch(escapedText);
  };

  var getOptions = useCallback(function () {
    if (!search) {
      return options;
    }

    var exp = new RegExp(search, 'i');
    return options.filter(function (item, index) {
      return exp.test(getValue(index, options, labelKey));
    });
  }, [options, search]);
  var getOptionsNotMatchingSearch = useCallback(function () {
    if (!search) {
      return [];
    }

    var exp = new RegExp(search, 'i');
    return options.filter(function (item, index) {
      return !exp.test(getValue(index, options, labelKey));
    });
  }, [options, search]);

  var onSelectValueChange = function onSelectValueChange(_ref2) {
    var newValue = _ref2.value;
    var valuesNotMatchingSearch = getOptionsNotMatchingSearch().filter(function (item, index, opt) {
      return value.includes(getValue(index, opt, valueKey));
    }).map(function (item, index, opt) {
      return getValue(index, opt, valueKey);
    });
    var updater = withUpdateCancelButtons ? updateInternalValue : onValueChange;
    updater([].concat(valuesNotMatchingSearch, newValue));
  };

  var renderContent = function renderContent(props) {
    if (['single-column', 'double-column'].includes(layout)) {
      return /*#__PURE__*/React.createElement(ColumnSelect, _extends({
        layout: layout,
        width: width,
        height: height,
        onOk: onOkClick,
        onCancel: onCancelClick,
        onChange: onSelectValueChange,
        emptySearchMessage: emptySearchMessage,
        showSelectAll: withSelectAll,
        showOptionChips: withOptionChips,
        showControlButtons: withUpdateCancelButtons,
        inclusionExclusion: withInclusionExclusion,
        isExcluded: isExcluded,
        setIncExcVal: onIncludeExclude,
        renderSearch: searchable && !onSearch,
        searchPlaceholder: searchPlaceholder,
        searchValue: search,
        onSearchChange: onSearchChange,
        renderEmptySelected: renderEmptySelected,
        onValueChange: onValueChange,
        custom: custom,
        validate: validate,
        shouldRenderInDrop: shouldRenderInDrop,
        showCount: showCount,
        removeSelected: removeSelected,
        reverse: reverse
      }, props));
    }

    return null;
  };

  var getkeyField = function getkeyField(key) {
    return typeof key === 'object' ? getkeyField(key.key) : key;
  };

  var shouldRenderLabel = function shouldRenderLabel() {
    return !(!valueKey || !labelKey || getkeyField(valueKey) === getkeyField(labelKey));
  };

  var renderLabel = function renderLabel() {
    return /*#__PURE__*/React.createElement(ValueLabelWithIcon, {
      showCount: showCount,
      rowCount: rowCount,
      withInclusionExclusion: withInclusionExclusion,
      isExcluded: isExcluded,
      size: size,
      placeholder: placeholder,
      value: shouldRenderLabel() && !custom ? (options || []).filter(function (obj) {
        return value.includes(applyKey(obj, valueKey));
      }).map(function (optionObj) {
        return applyKey(optionObj, labelKey);
      }) : value
    });
  };

  return /*#__PURE__*/React.createElement(Box, {
    width: width,
    gridArea: gridArea
  }, /*#__PURE__*/React.createElement(Select, _extends({
    multiple: true,
    value: value,
    options: getOptions(),
    onChange: onSelectValueChange,
    open: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    closeOnChange: false,
    renderCustomContent: ['single-column', 'double-column'].includes(layout) ? function (props) {
      return renderContent(props);
    } : undefined,
    valueLabel: renderLabel(),
    labelKey: labelKey,
    valueKey: valueKey,
    onSearch: onSearch,
    searchPlaceholder: searchPlaceholder,
    emptySearchMessage: emptySearchMessage,
    isEnableOutSideClick: isEnableOutSideClick,
    shouldRenderInDrop: shouldRenderInDrop,
    size: size,
    placeholder: placeholder
  }, rest)));
};

MultiSelect.displayName = 'MultiSelect';
var MultiSelectDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  MultiSelectDoc = require('./doc').doc(MultiSelect);
}

var MultiSelectWrapper = MultiSelectDoc || MultiSelect;
export { MultiSelectWrapper as MultiSelect };
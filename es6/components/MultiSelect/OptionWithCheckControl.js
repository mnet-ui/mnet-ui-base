function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FormCheckmark } from 'grommet-icons/icons/FormCheckmark';
import { FormSubtract } from 'grommet-icons/icons/FormSubtract';
import { FormClose } from 'grommet-icons/icons/FormClose';
import { Add } from 'grommet-icons/icons/Add';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Text } from '../Text';
import { normalizeColor } from '../../utils/colors';
import { CheckBoxWrapper, CheckBox, SelectedOption } from './StyledMultiSelect';

var OptionWithCheckControl = function OptionWithCheckControl(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      onSelect = _ref.onSelect,
      removeSelected = _ref.removeSelected,
      reverse = _ref.reverse,
      index = _ref.index;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var _theme$multiselect$ch = theme.multiselect.checkbox,
      _theme$multiselect$ch2 = _theme$multiselect$ch.include,
      include = _theme$multiselect$ch2 === void 0 ? {} : _theme$multiselect$ch2,
      _theme$multiselect$ch3 = _theme$multiselect$ch.exclude,
      exclude = _theme$multiselect$ch3 === void 0 ? {} : _theme$multiselect$ch3,
      _theme$multiselect$ch4 = _theme$multiselect$ch.showUnSelected,
      showUnSelected = _theme$multiselect$ch4 === void 0 ? true : _theme$multiselect$ch4;
  var _include$background = include.background,
      incBackground = _include$background === void 0 ? 'white' : _include$background,
      _include$color = include.color,
      incColor = _include$color === void 0 ? 'black' : _include$color,
      _include$check = include.check,
      incCheck = _include$check === void 0 ? 'add' : _include$check;
  var _exclude$background = exclude.background,
      excBackground = _exclude$background === void 0 ? 'white' : _exclude$background,
      _exclude$color = exclude.color,
      excColor = _exclude$color === void 0 ? 'black' : _exclude$color,
      _exclude$check = exclude.check,
      excCheck = _exclude$check === void 0 ? 'subtract' : _exclude$check;

  var getIcon = function getIcon(check) {
    switch (check) {
      case 'check':
        return /*#__PURE__*/React.createElement(FormCheckmark, theme.multiselect.checkbox.checkmark);

      case 'close':
        return /*#__PURE__*/React.createElement(FormClose, theme.multiselect.checkbox.checkmark);

      case 'add':
        return /*#__PURE__*/React.createElement(Add, _extends({}, theme.multiselect.checkbox.checkmark, {
          color: inclusionExclusion ? theme.multiselect.includeBtn.color : 'brand',
          size: "small"
        }));

      case 'subtract':
        return /*#__PURE__*/React.createElement(FormSubtract, _extends({}, theme.multiselect.checkbox.checkmark, {
          color: theme.multiselect.excludeBtn.color,
          size: "small"
        }));

      default:
        return null;
    }
  };

  var getBackground = function getBackground(exc) {
    if (!selected && !showUnSelected && isExcluded !== null) return 'white';
    return (exc ? normalizeColor(excBackground, theme) : normalizeColor(incBackground, theme)) || 'white';
  };

  var renderCheckbox = function renderCheckbox(check, exc) {
    return /*#__PURE__*/React.createElement(CheckBoxWrapper, theme.multiselect.checkbox.box, /*#__PURE__*/React.createElement(CheckBox, _extends({
      role: "checkbox",
      "aria-label": (exc ? check : 'select') + " checkbox for " + label,
      className: "option-checkbox-" + (selected || inclusionExclusion && isExcluded === null ? 'active' : 'inactive')
    }, theme.multiselect.checkbox.check, {
      color: (!exc ? incColor : excColor) || 'black',
      active: selected || inclusionExclusion && isExcluded === null,
      isExcluded: exc,
      onClick: inclusionExclusion && isExcluded === null ? function (event) {
        return onSelect(event, exc, index);
      } : undefined,
      background: getBackground(exc)
    }), (selected || showUnSelected || inclusionExclusion && isExcluded === null) && getIcon(check)));
  };

  var optionLabel = [/*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, _extends({
    role: "option",
    "aria-label": "multiselect option value"
  }, theme.select.options.text), label)), /*#__PURE__*/React.createElement(React.Fragment, null, !inclusionExclusion && /*#__PURE__*/React.createElement(Box, null, renderCheckbox(selected ? incCheck : excCheck, null)), inclusionExclusion && (isExcluded === null || isExcluded !== null) && /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, [null, false].includes(isExcluded) && renderCheckbox(incCheck, false), [null, true].includes(isExcluded) && renderCheckbox(excCheck, true)))];

  if (reverse) {
    optionLabel.reverse();
  }

  return /*#__PURE__*/React.createElement(SelectedOption, _extends({}, selectOptionsStyle, {
    selected: selected,
    removeSelected: removeSelected
  }), /*#__PURE__*/React.createElement(Box, theme.multiselect.option, optionLabel));
};

export { OptionWithCheckControl };
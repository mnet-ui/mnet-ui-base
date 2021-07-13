function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Text';
import { defaultProps } from '../../default-props';
import { LabelText } from './StyledMultiSelect';

var ValueLabelWithIcon = function ValueLabelWithIcon(_ref) {
  var withInclusionExclusion = _ref.withInclusionExclusion,
      isExcluded = _ref.isExcluded,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      size = _ref.size,
      showCount = _ref.showCount,
      rowCount = _ref.rowCount,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select' : _ref$placeholder;
  var valueProp = value;
  valueProp = Array.isArray(valueProp) ? valueProp : [valueProp];
  var number = valueProp.length;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var _theme$multiselect$ic = theme.multiselect.icons,
      include = _theme$multiselect$ic.include,
      exclude = _theme$multiselect$ic.exclude;
  var _theme$multiselect = theme.multiselect,
      _theme$multiselect$se = _theme$multiselect.searchbox;
  _theme$multiselect$se = _theme$multiselect$se === void 0 ? {} : _theme$multiselect$se;
  var _theme$multiselect$se2 = _theme$multiselect$se.placeholder,
      placeholderProp = _theme$multiselect$se2 === void 0 ? {} : _theme$multiselect$se2,
      _theme$multiselect$la = _theme$multiselect.labelWrap,
      labelWrap = _theme$multiselect$la === void 0 ? {} : _theme$multiselect$la;
  var IncIcon = include.icon,
      incExtend = include.extend;
  var ExcIcon = exclude.icon,
      excExtend = exclude.extend;
  var _theme$multiselect$co = theme.multiselect.controls.label,
      label = _theme$multiselect$co === void 0 ? {} : _theme$multiselect$co;
  var labelProps = label[isExcluded ? 'exclude' : 'include'] || {};

  var getColor = function getColor() {
    if (withInclusionExclusion && isExcluded) return 'status-error';
    if (withInclusionExclusion && isExcluded === false) return 'status-ok';
    return 'dark-1';
  };

  return /*#__PURE__*/React.createElement(Box, _extends({
    direction: "row",
    align: "center",
    pad: {
      left: 'large'
    }
  }, labelWrap), withInclusionExclusion && isExcluded && ExcIcon && /*#__PURE__*/React.createElement(Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/React.createElement(ExcIcon, excExtend)), withInclusionExclusion && isExcluded === false && IncIcon && /*#__PURE__*/React.createElement(Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/React.createElement(IncIcon, incExtend)), showCount && (valueProp.length ? /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center"
  }, /*#__PURE__*/React.createElement(LabelText, {
    "aria-label": "Selected Label Value",
    size: size,
    weight: "bold"
  }, " ", isExcluded ? "Excluded" : "Included"), /*#__PURE__*/React.createElement(Box, {
    background: "brand",
    margin: {
      horizontal: "medium"
    },
    pad: {
      horizontal: "small",
      vertical: 'xsmall'
    },
    round: "xsmall"
  }, valueProp.length)) : /*#__PURE__*/React.createElement(LabelText, _extends({
    "aria-label": "Selected Label Value",
    color: getColor(),
    size: size,
    rowCount: rowCount
  }, labelProps), /*#__PURE__*/React.createElement(Text, placeholderProp, placeholder))), !showCount && /*#__PURE__*/React.createElement(LabelText, _extends({
    "aria-label": "Selected Label Value",
    color: getColor(),
    size: size,
    rowCount: rowCount
  }, labelProps), number ? valueProp.join(', ') : /*#__PURE__*/React.createElement(Text, placeholderProp, placeholder)));
};

export { ValueLabelWithIcon };
"use strict";

exports.__esModule = true;
exports.ValueLabelWithIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Box = require("../Box");

var _Text = require("../Text");

var _defaultProps = require("../../default-props");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

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

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    direction: "row",
    align: "center",
    pad: {
      left: 'large'
    }
  }, labelWrap), withInclusionExclusion && isExcluded && ExcIcon && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/_react["default"].createElement(ExcIcon, excExtend)), withInclusionExclusion && isExcluded === false && IncIcon && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/_react["default"].createElement(IncIcon, incExtend)), showCount && (valueProp.length ? /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row",
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.LabelText, {
    "aria-label": "Selected Label Value",
    size: size,
    weight: "bold"
  }, " ", isExcluded ? "Excluded" : "Included"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    background: "brand",
    margin: {
      horizontal: "medium"
    },
    pad: {
      horizontal: "small",
      vertical: 'xsmall'
    },
    round: "xsmall"
  }, valueProp.length)) : /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.LabelText, _extends({
    "aria-label": "Selected Label Value",
    color: getColor(),
    size: size,
    rowCount: rowCount
  }, labelProps), /*#__PURE__*/_react["default"].createElement(_Text.Text, placeholderProp, placeholder))), !showCount && /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.LabelText, _extends({
    "aria-label": "Selected Label Value",
    color: getColor(),
    size: size,
    rowCount: rowCount
  }, labelProps), number ? valueProp.join(', ') : /*#__PURE__*/_react["default"].createElement(_Text.Text, placeholderProp, placeholder)));
};

exports.ValueLabelWithIcon = ValueLabelWithIcon;
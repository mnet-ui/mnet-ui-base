"use strict";

exports.__esModule = true;
exports.Searchbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Search = require("grommet-icons/icons/Search");

var _defaultProps = require("../../default-props");

var _Text = require("../Text");

var _TextInput = require("../TextInput");

var _Button = require("../Button");

var _Box = require("../Box");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var handleChange = function handleChange(textValue) {
    if (textValue.replace(/\s/g, '').length || !textValue.length) return onValueChange(textValue);
    return null;
  };

  var CollapsibleIcon = selectIcon && selectIcon.up;

  var icons = /*#__PURE__*/_react["default"].createElement(_Search.Search, theme.multiselect.searchbox.icon);

  var collapseBtn = !shouldRenderInDrop && selectIcon && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    role: "button",
    margin: "none",
    onClick: onCancel,
    plain: true,
    style: {
      position: 'absolute',
      right: '15px'
    }
  }, /*#__PURE__*/_react["default"].createElement(CollapsibleIcon, {
    color: "dark-1",
    size: selectIcon.size
  }));

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    layout: layout
  }, theme.multiselect.searchbox.container), /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    role: "search",
    "aria-label": "multiselect searchbox",
    plain: true,
    fill: true,
    icon: icons,
    reverse: reverse,
    width: width,
    value: value,
    valueLabel: /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "value"),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    placeholder: /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.searchbox.placeholder, value ? '' : placeholder)
  }), collapseBtn);
};

exports.Searchbox = Searchbox;
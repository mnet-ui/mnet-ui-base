"use strict";

exports.__esModule = true;
exports.OptionChips = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Close = require("grommet-icons/icons/Close");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Button = require("../Button");

var _Text = require("../Text");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var renderClearButton = function renderClearButton() {
    return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      role: "button",
      a11yTitle: "Clear all selected options",
      focusIndicator: false,
      onClick: function onClick() {
        return clearAll([]);
      },
      plain: true
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      border: theme.multiselect.chips.clear.border,
      height: theme.multiselect.chips.clear.height
    }, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.chips.clear, "CLEAR ALL")));
  };

  var getSelectedOption = function getSelectedOption() {
    return options.reduce(function (acc, item, index) {
      if (isSelected(index)) acc.push(index);
      return acc;
    }, []);
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    height: height
  }, Array.isArray(value) && value.length > 0 && /*#__PURE__*/_react["default"].createElement(_Box.Box, null, inclusionExclusion && isExcluded !== null && /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    "aria-label": "Chip List header"
  }, theme.multiselect.rightPanel.incExcHeader.text), isExcluded ? 'Excluded' : 'Included'), /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.rightPanel.incExcHeader.count, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: "600"
  }, value.length)))), !inclusionExclusion && layout === 'double-column' && /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.rightPanel.incExcHeader.text, "Selected"), !showCount && /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.rightPanel.incExcHeader.count, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: "600"
  }, value.length)))), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionWrapper, _extends({
    twoColumnLayout: layout === 'double-column',
    width: width,
    height: height
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: "100%"
  }, getSelectedOption().map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionText, _extends({
      key: item,
      twoColumnLayout: layout === 'double-column'
    }, theme.multiselect.chips.option), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionLabel, _extends({
      isExcluded: isExcluded
    }, theme.multiselect.chips.label), getLabel(item)), /*#__PURE__*/_react["default"].createElement(_Close.Close, _extends({
      role: "button",
      "aria-label": "Remove selected chip " + getLabel(item),
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick(event) {
        return onRemove(event, item);
      }
    }, theme.multiselect.chips.icon)));
  }))), (!inclusionExclusion || inclusionExclusion && isExcluded !== null) && renderClearButton()), (!Array.isArray(value) || !value.length) && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    justify: "center",
    align: "center",
    height: height
  }, renderEmptySelected));
};

exports.OptionChips = OptionChips;
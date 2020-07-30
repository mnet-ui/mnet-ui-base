"use strict";

exports.__esModule = true;
exports.CustomMultiSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _TextArea = require("../TextArea");

var _Box = require("../Box");

var _Button = require("../Button");

var _Text = require("../Text");

var _FormField = require("../FormField");

var _CustomSelectedList = _interopRequireDefault(require("./CustomSelectedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CustomMultiSelect = function CustomMultiSelect(_ref) {
  var value = _ref.value,
      layout = _ref.layout,
      onValueChange = _ref.onValueChange,
      renderSearch = _ref.renderSearch,
      placeholder = _ref.placeholder,
      renderEmptySelected = _ref.renderEmptySelected,
      width = _ref.width,
      height = _ref.height,
      custom = _ref.custom,
      isExcluded = _ref.isExcluded,
      setIncExcVal = _ref.setIncExcVal,
      inclusionExclusion = _ref.inclusionExclusion,
      validate = _ref.validate;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || defaultProps.theme;

  var _React$useState = _react["default"].useState(''),
      textAreaValue = _React$useState[0],
      setTextAreaValue = _React$useState[1];

  var _React$useState2 = _react["default"].useState(true),
      isValid = _React$useState2[0],
      setIsValid = _React$useState2[1];

  var setTextAreaValueFn = function setTextAreaValueFn(value) {
    setIsValid(true);
    setTextAreaValue(value);
  };

  var setItems = function setItems(isIncExc) {
    var trimedValue = textAreaValue.trim();

    if (trimedValue && trimedValue.length) {
      var textValues = trimedValue.split('\n');
      var filteredValues = textValues.filter(function (text) {
        return text.length;
      });

      if (validate && validate.callback(filteredValues)) {
        setIncExcVal(isIncExc);
        onValueChange([].concat(value, filteredValues));
        setTextAreaValue('');
      } else {
        setIsValid(false);
      }
    }
  };

  var removeItem = (0, _react.useCallback)(function (item) {
    var lists = [].concat(value);
    var index = lists.indexOf(item);
    lists.splice(index, 1);
    onValueChange([].concat(lists));
    if (!lists.length) setIncExcVal(null);
  }, [value, onValueChange, setIncExcVal]);

  var clearAll = function clearAll() {
    setIncExcVal(null);
    onValueChange([]);
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, theme.multiselect.custom.wrapper, {
    height: height
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, theme.multiselect.custom.textAreaWrap, {
    width: width
  }), /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.custom.label, custom && custom.label || 'Label'), /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, theme.multiselect.custom.textAreaContainer, {
    width: width,
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
    error: !isValid ? validate.message : null
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: "full",
    style: {
      minHeight: theme.multiselect.custom.textAreaContainer.minHeight,
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_TextArea.TextArea, {
    value: textAreaValue,
    onChange: function onChange(event) {
      return setTextAreaValueFn(event.target.value);
    },
    resize: false,
    fill: true
  })))), /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.custom.actions.wrapper, (isExcluded === false || isExcluded === null) && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    primary: true,
    onClick: function onClick() {
      return setItems(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: 600
  }, "INCLUDE")), (isExcluded || isExcluded === null) && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    secondary: true,
    color: "brand",
    onClick: function onClick() {
      return setItems(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: 600
  }, "EXCLUDE")))), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: width
  }, /*#__PURE__*/_react["default"].createElement(_CustomSelectedList["default"], {
    layout: layout,
    selectedItems: value,
    isExcluded: isExcluded,
    renderSearch: renderSearch,
    searchPlaceholder: placeholder,
    onRemove: removeItem,
    clearAll: clearAll,
    renderEmptySelected: renderEmptySelected,
    width: width,
    height: height,
    inclusionExclusion: inclusionExclusion
  })));
};

exports.CustomMultiSelect = CustomMultiSelect;
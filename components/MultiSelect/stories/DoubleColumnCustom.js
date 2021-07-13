"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Example = function Example() {
  var _useState = (0, _react.useState)(['google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com']),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isExcluded = _useState2[0],
      setIncExc = _useState2[1];

  var validateDomains = function validateDomains(values, list) {
    var regx = /^([a-zA-Z0-9_][-_a-zA-Z0-9]{0,62}\.)+([a-zA-Z0-9]{1,10})$/;
    if (new Set(values).size !== values.length) return {
      isValid: false,
      errMsg: 'Dublicate entry not allowed'
    };
    if (values.some(function (val) {
      return list.includes(val);
    })) return {
      isValid: false,
      errMsg: 'Some of the values already exists'
    };
    return {
      isValid: values && values.every(function (val) {
        return regx.test(val);
      }),
      errMsg: 'Please Enter Correct Domains'
    };
  };

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MultiSelect, {
    value: value,
    onValueChange: function onValueChange(nextValue) {
      return setValue(nextValue);
    },
    layout: "double-column",
    width: "large",
    height: "medium",
    searchPlaceholder: "Search",
    searchable: true,
    custom: {
      label: 'Enter one domain per line'
    },
    withInclusionExclusion: true,
    isExcluded: isExcluded,
    onIncExcChange: function onIncExcChange(nextIncExc) {
      return setIncExc(nextIncExc);
    },
    renderEmptySelected: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "No domains selected"),
    validate: validateDomains,
    isEnableOutSideClick: false,
    shouldRenderInDrop: false,
    isOpenState: true
  }));
};

(0, _react2.storiesOf)('MultiSelect', module).add('Domain Double Custom', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
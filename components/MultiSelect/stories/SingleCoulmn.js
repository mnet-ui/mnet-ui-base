"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var options = [{
  id: 1,
  label: 'Test 1'
}, {
  id: 2,
  label: 'Test 2'
}, {
  id: 3,
  label: 'Test 3'
}, {
  id: 4,
  label: 'Test 4'
}, {
  id: 5,
  label: 'Test 5'
}, {
  id: 6,
  label: 'Test 6'
}, {
  id: 7,
  label: 'Test 7'
}, {
  id: 8,
  label: 'Test 8'
}, {
  id: 9,
  label: 'Test 9'
}, {
  id: 10,
  label: 'Test 10'
}];

var Example = function Example() {
  var _useState = (0, _react.useState)([]),
      value = _useState[0],
      setValue = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MultiSelect, {
    options: options,
    value: value,
    labelKey: "label",
    valueKey: {
      key: 'id',
      reduce: true
    },
    onValueChange: function onValueChange(nextValue) {
      return setValue(nextValue);
    },
    layout: "single-column",
    width: "medium",
    height: "medium",
    searchPlaceholder: "Search",
    searchable: true,
    withSelectAll: true,
    withOptionChips: true,
    withUpdateCancelButtons: true
  }));
};

(0, _react2.storiesOf)('MultiSelect', module).add('Single Column', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
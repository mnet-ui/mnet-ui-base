"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var options = [{
  id: 1,
  label: 'Desktop'
}, {
  id: 2,
  label: 'Mobile'
}, {
  id: 3,
  label: 'Tablet'
}, {
  id: 4,
  label: 'Television'
}, {
  id: 5,
  label: 'Bot'
}];

var Example = function Example() {
  var _useState = (0, _react.useState)(['Mobile', 'Tablet']),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isExcluded = _useState2[0],
      setIncExc = _useState2[1];

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
      key: 'label',
      reduce: true
    },
    onValueChange: function onValueChange(nextValue) {
      return setValue(nextValue);
    },
    layout: "double-column",
    width: "large",
    height: "medium",
    searchPlaceholder: "Search",
    searchable: true,
    withSelectAll: true,
    withOptionChips: true,
    withInclusionExclusion: true,
    isExcluded: isExcluded,
    onIncExcChange: function onIncExcChange(nextIncExc) {
      return setIncExc(nextIncExc);
    },
    renderEmptySelected: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "No Selection"),
    isEnableOutSideClick: true,
    shouldRenderInDrop: true,
    isOpenState: true
  }));
};

(0, _react2.storiesOf)('MultiSelect', module).add('Double Column Open State', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
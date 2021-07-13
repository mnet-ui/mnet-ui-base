"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var objectOptions = [];

for (var i = 1; i <= 5; i += 1) {
  objectOptions.push({
    label: "option " + i,
    val: i
  });
}

var Example = function Example() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    labelKey: "label",
    valueKey: "val",
    options: objectOptions
  })));
};

(0, _react2.storiesOf)('CheckBoxGroup', module).add('Object options', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
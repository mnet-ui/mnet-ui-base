"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _mnetUiBase.extendDefaultTheme)((0, _utils.deepMerge)(_themes.base, {
  global: {
    colors: {
      brand: 'red'
    }
  }
}));

var CustomDefaultProps = function CustomDefaultProps() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand",
    pad: "small"
  }, "Hello");
};

(0, _react2.storiesOf)('Theme', module).add('Extend Default', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomDefaultProps, null);
});
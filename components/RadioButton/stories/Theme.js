"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _utils.deepMerge)(_themes.mnet, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-3'
      }
    },
    check: {
      color: {
        light: 'neutral-1'
      }
    },
    icon: {
      size: '10px'
    }
  }
});

var ThemeRadioButton = function ThemeRadioButton() {
  var _React$useState = _react["default"].useState(),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RadioButton, {
    label: "option 1",
    name: "name",
    value: "option 1",
    checked: selected === 'option 1',
    onChange: function onChange(event) {
      return setSelected(event.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "clear",
    onClick: function onClick() {
      return setSelected(undefined);
    }
  })));
};

(0, _react2.storiesOf)('RadioButton', module).add('Theme', function () {
  return /*#__PURE__*/_react["default"].createElement(ThemeRadioButton, null);
});
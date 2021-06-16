"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

var _grommetIcons = require("grommet-icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var customCheckBoxTheme = {
  checkBox: {
    border: {
      color: {
        light: 'accent-2'
      },
      // width: 'xsmall',
      radius: '2px'
    },
    check: {
      extend: function extend(_ref) {
        var theme = _ref.theme,
            checked = _ref.checked;
        return "\n        " + (checked && "background-color: " + (0, _utils.normalizeColor)('neutral-1', theme) + ";") + "\n        ";
      }
    },
    color: {
      light: 'neutral-3',
      dark: 'neutral-3'
    },
    gap: 'xsmall',
    hover: {
      border: {
        color: undefined
      }
    },
    icon: {
      size: '18px',
      extend: 'stroke: white;'
    },
    icons: {
      checked: _grommetIcons.FormCheckmark
    },
    size: '18px',
    extend: "\n      color: #9C9C9C;\n    "
  }
};

var ThemedCheckBox = function ThemedCheckBox(props) {
  var _useState = (0, _react.useState)(false),
      checked = _useState[0],
      setChecked = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: (0, _utils.deepMerge)(_themes.mnet, customCheckBoxTheme)
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, _extends({}, props, {
    label: "Choice",
    checked: checked,
    onChange: function onChange(event) {
      return setChecked(event.target.checked);
    }
  }))));
};

(0, _react2.storiesOf)('CheckBox', module).add('Custom', function () {
  return /*#__PURE__*/_react["default"].createElement(ThemedCheckBox, null);
});
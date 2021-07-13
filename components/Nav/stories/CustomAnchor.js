"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var navItems = [{
  label: 'HTML',
  href: '#'
}, {
  label: 'JS',
  href: '#'
}, {
  label: 'CSS',
  href: '#'
}, {
  label: 'REACT',
  href: '#'
}];
var customTheme = (0, _utils.deepMerge)(_themes.mnet, {
  anchor: {
    textDecoration: 'none',
    fontWeight: 500,
    color: {
      dark: 'white',
      light: 'neutral-2'
    },
    hover: {
      textDecoration: 'none',
      fontWeight: 700
    }
  }
});

var CustomAnchor = function CustomAnchor() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "dark-1",
    pad: "large",
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    pad: {
      vertical: 'medium'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Nav, {
    width: "small",
    margin: {
      right: 'large'
    }
  }, navItems.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
      href: item.href,
      label: item.label,
      key: item.label
    });
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Main, null, "Place main content here"))));
};

(0, _react2.storiesOf)('Nav', module).add('Custom Anchor', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomAnchor, null);
});
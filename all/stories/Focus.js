"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _utils = require("mnet-ui-base/utils");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customFocus = (0, _utils.deepMerge)(_mnetUiBase.mnet, {
  global: {
    colors: {
      focus: 'neutral-3'
    }
  }
});

var CustomDefaultProps = function CustomDefaultProps() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customFocus
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "medium",
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Focus on the input components and notice the custom focus color"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    placeholder: "hi"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    href: ""
  }, "Anchor"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Menu, {
    label: "Menu",
    items: [{
      label: 'One',
      onClick: function onClick() {}
    }, {
      label: 'Two'
    }]
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Button",
    onClick: function onClick() {}
  })));
};

(0, _react2.storiesOf)('Theme', module).add('Focus', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomDefaultProps, null);
});
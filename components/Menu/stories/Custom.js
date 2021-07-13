"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomMenu = function CustomMenu() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    background: {
      color: 'dark-2',
      opacity: 0.7
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Menu, {
    plain: true,
    items: [{
      label: 'Launch',
      onClick: function onClick() {}
    }, {
      label: 'Abort',
      onClick: function onClick() {}
    }]
  }, function (_ref) {
    var drop = _ref.drop,
        hover = _ref.hover;
    var color = hover && !drop ? 'accent-1' : undefined;
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      direction: "row",
      gap: "small",
      pad: "small",
      background: hover && drop ? 'light-2' : undefined
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
      color: color
    }, "actions"), /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormDown, {
      color: color
    }));
  })));
};

(0, _react2.storiesOf)('Menu', module).add('Custom', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomMenu, null);
});
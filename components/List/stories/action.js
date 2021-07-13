"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActionList = function ActionList() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.List, {
    data: _data.data.slice(0, 10),
    pad: {
      left: 'small',
      right: 'none'
    },
    action: function action(item, index) {
      return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Menu, {
        key: index,
        icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.More, null),
        hoverIndicator: true,
        items: [{
          label: 'one'
        }]
      });
    }
  })));
};

(0, _react2.storiesOf)('List', module).add('action', function () {
  return /*#__PURE__*/_react["default"].createElement(ActionList, null);
});
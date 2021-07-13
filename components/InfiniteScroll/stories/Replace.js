"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _isChromatic = _interopRequireDefault(require("storybook-chromatic/isChromatic"));

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var allItems = Array(240).fill().map(function (_, i) {
  return "item " + (i + 1);
});

var InfiniteScrollReplace = function InfiniteScrollReplace(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.InfiniteScroll, _extends({
    items: allItems
  }, props), function (item) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: item,
      pad: "medium",
      border: {
        side: 'bottom'
      },
      align: "center"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, item));
  }));
};

if (!(0, _isChromatic["default"])()) {
  (0, _react2.storiesOf)('InfiniteScroll', module).add('Replace', function () {
    return /*#__PURE__*/_react["default"].createElement(InfiniteScrollReplace, {
      replace: true
    });
  });
}
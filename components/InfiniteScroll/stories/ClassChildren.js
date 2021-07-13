"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _Basics = require("./Basics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/prefer-stateless-function */
var MyItem = function MyItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    border: {
      side: 'bottom'
    },
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, item));
};

var ClassChildrenInfiniteScroll = function ClassChildrenInfiniteScroll(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.InfiniteScroll, _extends({
    items: _Basics.allItems
  }, props), function (item) {
    return /*#__PURE__*/_react["default"].createElement(MyItem, {
      key: item,
      item: item
    });
  })));
};

(0, _react2.storiesOf)('InfiniteScroll', module).add('Class Children', function () {
  return /*#__PURE__*/_react["default"].createElement(ClassChildrenInfiniteScroll, null);
});
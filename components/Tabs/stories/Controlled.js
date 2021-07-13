"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ControlledTabs = function ControlledTabs() {
  var _React$useState = _react["default"].useState(),
      index = _React$useState[0],
      setIndex = _React$useState[1];

  var onActive = function onActive(nextIndex) {
    return setIndex(nextIndex);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tabs, {
    activeIndex: index,
    onActive: onActive
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 1"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-1"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Attraction, {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 2"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.TreeOption, {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 3"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-3"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Car, {
    size: "xlarge"
  })))));
};

(0, _react2.storiesOf)('Tabs', module).add('Controlled', function () {
  return /*#__PURE__*/_react["default"].createElement(ControlledTabs, null);
});
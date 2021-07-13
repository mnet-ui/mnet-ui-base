"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LoaderButtons = function LoaderButtons(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, _extends({
    isLoading: true,
    background: "brand",
    primary: true,
    label: "Loader",
    size: "medium",
    onClick: function onClick() {}
  }, props))));
};

(0, _react2.storiesOf)('Button', module).add('Button Loader', function () {
  return /*#__PURE__*/_react["default"].createElement(LoaderButtons, null);
});
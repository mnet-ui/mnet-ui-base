"use strict";

exports.__esModule = true;
exports.RichTabTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RichTabs = function RichTabs() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tabs, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    title: /*#__PURE__*/_react["default"].createElement(RichTabTitle, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.CircleInformation, {
        color: "accent-2"
      }),
      label: "Personal Data"
    })
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    placeholder: "Enter your name..."
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    title: /*#__PURE__*/_react["default"].createElement(RichTabTitle, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Currency, {
        color: "neutral-2"
      }),
      label: "Payment"
    })
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Card Number"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    placeholder: "Enter your card number..."
  })))));
};

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, label)));
};

exports.RichTabTitle = RichTabTitle;
RichTabTitle.propTypes = {
  icon: _propTypes["default"].node.isRequired,
  label: _propTypes["default"].string.isRequired
};
(0, _react2.storiesOf)('Tabs', module).add('Rich', function () {
  return /*#__PURE__*/_react["default"].createElement(RichTabs, null);
});
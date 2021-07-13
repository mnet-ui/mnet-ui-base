"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LabelledMeter = function LabelledMeter() {
  var meterValue = 30;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Stack, {
    anchor: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Meter, {
    type: "circle",
    background: "light-2",
    values: [{
      value: meterValue
    }],
    size: "xsmall",
    thickness: "small"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: {
      bottom: 'xsmall'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "xlarge",
    weight: "bold"
  }, meterValue), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "small"
  }, "%")))));
};

(0, _react2.storiesOf)('Meter', module).add('Labelled', function () {
  return /*#__PURE__*/_react["default"].createElement(LabelledMeter, null);
});
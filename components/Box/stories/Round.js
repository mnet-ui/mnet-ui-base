"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RoundBox = function RoundBox() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    background: "brand",
    round: true,
    alignSelf: "start"
  }, "true"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    columns: "small",
    gap: "small"
  }, ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'].map(function (size) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: size,
      pad: "large",
      background: "brand",
      round: {
        size: size
      }
    }, size);
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    columns: "small",
    gap: "small"
  }, ['large', 'xlarge', 'full'].map(function (size) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      responsive: false,
      key: size,
      pad: "large",
      background: "dark-4",
      round: {
        size: size
      }
    }, size, " - Not responsive");
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    columns: "small",
    gap: "small"
  }, ['left', 'top', 'right', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].map(function (corner) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: corner,
      pad: "small",
      background: "brand",
      round: {
        corner: corner
      }
    }, corner);
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "brand",
    pad: "small",
    round: {
      corner: 'left',
      size: '15px'
    }
  }, "left rounded corner px value"))));
};

(0, _react2.storiesOf)('Box', module).add('Round', function () {
  return /*#__PURE__*/_react["default"].createElement(RoundBox, null);
});
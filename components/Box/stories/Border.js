"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BorderBox = function BorderBox() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    border: true
  }, "true"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    gap: "small"
  }, ['horizontal', 'vertical', 'left', 'top', 'right', 'bottom'].map(function (border) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: border,
      pad: "small",
      border: border
    }, border);
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    border: [{
      size: 'medium',
      style: 'dotted',
      side: 'top'
    }, {
      size: 'medium',
      style: 'double',
      side: 'vertical'
    }]
  }, "custom top & vertical borders")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    border: {
      color: 'brand'
    }
  }, "color"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    gap: "small",
    align: "start"
  }, ['small', 'medium', 'large'].map(function (size) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: size,
      pad: "small",
      border: {
        size: size
      }
    }, size);
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    gap: "small",
    align: "start"
  }, ['small', 'medium', 'large'].map(function (size) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: size,
      pad: "small",
      responsive: false,
      border: {
        size: size
      }
    }, size);
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    gap: "small",
    align: "start"
  }, ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'].map(function (type) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: type,
      pad: "small",
      border: {
        size: 'medium',
        style: type
      }
    }, type);
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    gap: "large",
    align: "center"
  }, ['column', 'row'].map(function (direction) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      direction: direction,
      gap: "medium",
      border: "between"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "between"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, direction));
  }))));
};

(0, _react2.storiesOf)('Box', module).add('Border', function () {
  return /*#__PURE__*/_react["default"].createElement(BorderBox, null);
});
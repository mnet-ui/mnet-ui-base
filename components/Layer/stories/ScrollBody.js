"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ScrollBodyLayer = function ScrollBodyLayer() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Layer, {
    full: "vertical",
    position: "right"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    style: {
      minWidth: '378px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    as: "header",
    elevation: "small",
    justify: "between"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: {
      left: 'small'
    }
  }, "Header"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormClose, null)
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    flex: true,
    overflow: "auto",
    pad: "xsmall"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body"), /*#__PURE__*/_react["default"].createElement("span", null, "body")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    as: "footer",
    border: {
      side: 'top'
    },
    pad: "small",
    justify: "end",
    direction: "row",
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    label: "Save"
  })))));
};

(0, _react2.storiesOf)('Layer', module).add('Fixed Header, Scroll Body', function () {
  return /*#__PURE__*/_react["default"].createElement(ScrollBodyLayer, null);
});
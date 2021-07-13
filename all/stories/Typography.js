"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var paragraphFiller = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n";

var Medium = function Medium() {
  var margin = undefined;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    margin: margin
  }, "Heading 1 - Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "xlarge"
  }, "Text XLarge"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    size: "large",
    margin: margin
  }, "Paragraph - Large", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 2,
    margin: margin
  }, "Heading 2 - Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "large"
  }, "Text Large"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    margin: margin
  }, "Paragraph - Medium", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 3,
    margin: margin
  }, "Heading 3 - Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Text Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    margin: margin
  }, "Paragraph - Medium", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 4,
    margin: margin
  }, "Heading 4 - Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "small"
  }, "Text Small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    size: "small",
    margin: margin
  }, "Paragraph - Small", paragraphFiller))));
};

var Small = function Small() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    size: "small"
  }, "Heading 1 - Small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "large"
  }, "Text Large"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, null, "Paragraph - Medium", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 2,
    size: "small"
  }, "Heading 2 - Small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Text Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, null, "Paragraph - Medium", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 3,
    size: "small"
  }, "Heading 3 - Small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Text Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    size: "small"
  }, "Paragraph - Small", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 4,
    size: "small"
  }, "Heading 4 - Small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "small"
  }, "Text Small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    size: "small"
  }, "Paragraph - Small", paragraphFiller))));
};

var Large = function Large() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    size: "large"
  }, "Heading 1 - Large"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "xxlarge"
  }, "Text XXLarge"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    size: "xlarge"
  }, "Paragraph - XLarge", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 2,
    size: "large"
  }, "Heading 2 - Large"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "xlarge"
  }, "Text XLarge"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    size: "large"
  }, "Paragraph - Large", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 3,
    size: "large"
  }, "Heading 3 - Large"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "large"
  }, "Text Large"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, null, "Paragraph - Medium", paragraphFiller), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 4,
    size: "large"
  }, "Heading 4 - Large"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Text Medium"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, null, "Paragraph - Medium", paragraphFiller))));
};

(0, _react2.storiesOf)('Typography', module).add('Small', function () {
  return /*#__PURE__*/_react["default"].createElement(Small, null);
}).add('Medium', function () {
  return /*#__PURE__*/_react["default"].createElement(Medium, null);
}).add('Large', function () {
  return /*#__PURE__*/_react["default"].createElement(Large, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small'];
var paragraphFiller = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n";

var All = function All() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, sizes.map(function (size) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
      key: size,
      size: size
    }, "Paragraph " + size, paragraphFiller);
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    color: "status-critical"
  }, "This is an error message."), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, {
    fill: true
  }, "This is a full-width paragraph, using the \"fill\" property:", ' ', paragraphFiller));
};

(0, _react2.storiesOf)('Paragraph', module).add('All', function () {
  return /*#__PURE__*/_react["default"].createElement(All, null);
});
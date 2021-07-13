"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CONTENT = "\n  # Out of Breath\n\n  You know, sometimes in life it seems like there's no way out. Like\n  a sheep trapped in a maze designed by wolves. See all the\n  options [here](https://github.com/probablyup/markdown-to-jsx/)\n\n  [reference](#)\n\n```\nimport { MnetUIBase } from 'mnet-ui-base';\n```\n\n  > i carry your heart with me\n\n  ![alt text](//v2.grommet.io/assets/IMG_4245.jpg \"Markdown Image\")\n\n  Markdown | Less | Pretty\n  --- | --- | ---\n  *Still* | `renders` | **nicely**\n  1 | 2 | 3\n";

var SimpleMarkdown = function SimpleMarkdown() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Markdown, null, CONTENT)));
};

var StyledPre = _styledComponents["default"].pre.withConfig({
  displayName: "markdownstories__StyledPre",
  componentId: "sc-1bljy9e-0"
})(["background-color:#7d4cdb;"]);

var ComponentOverrideMarkdown = function ComponentOverrideMarkdown() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Markdown, {
    components: {
      pre: StyledPre
    }
  }, CONTENT)));
};

(0, _react2.storiesOf)('Markdown', module).add('Simple', function () {
  return /*#__PURE__*/_react["default"].createElement(SimpleMarkdown, null);
}).add('Component Override Markdown', function () {
  return /*#__PURE__*/_react["default"].createElement(ComponentOverrideMarkdown, null);
});
"use strict";

exports.__esModule = true;
exports.List = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var List = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledPagination__List",
  componentId: "sc-1g4tnoq-0"
})(["&.disabled{display:none;}&.active{cursor:default;background:", ";color:", ";}", ""], function (props) {
  return props.theme.pagination.active.background;
}, function (props) {
  return props.theme.pagination.active.color;
}, function (props) {
  return props.theme.pagination && props.theme.pagination.extend;
});
exports.List = List;
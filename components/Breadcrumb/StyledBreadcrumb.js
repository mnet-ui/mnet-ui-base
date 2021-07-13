"use strict";

exports.__esModule = true;
exports.StyledBreadcrumbText = exports.StyledBreadcrumbItem = exports.StyledBreadcrumb = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBreadcrumb = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledBreadcrumb",
  componentId: "sc-1lly2wl-0"
})(["", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.breadcrumb && theme.breadcrumb.extend;
});
exports.StyledBreadcrumb = StyledBreadcrumb;
var StyledBreadcrumbItem = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledBreadcrumb__StyledBreadcrumbItem",
  componentId: "sc-1lly2wl-1"
})(["", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.breadcrumb.item && theme.breadcrumb.item.extend;
});
exports.StyledBreadcrumbItem = StyledBreadcrumbItem;
var StyledBreadcrumbText = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "StyledBreadcrumb__StyledBreadcrumbText",
  componentId: "sc-1lly2wl-2"
})(["", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.breadcrumb.content && theme.breadcrumb.content.extend;
});
exports.StyledBreadcrumbText = StyledBreadcrumbText;
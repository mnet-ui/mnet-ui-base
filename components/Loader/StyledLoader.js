"use strict";

exports.__esModule = true;
exports.StyledLoader = exports.LoaderWrap = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = require("../Box");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultSize = 28;

var getSize = function getSize(props, size) {
  return props.theme.global.size[size] || size;
};

var widthStyle = (0, _styledComponents.css)(["width:", ";"], function (props) {
  return getSize(props, props.width || defaultSize + "px");
});
var heightStyle = (0, _styledComponents.css)(["height:", ";"], function (props) {
  return getSize(props, props.height || defaultSize + "px");
});
var beforeWidthStyle = (0, _styledComponents.css)(["width:", ";"], function (props) {
  return props.width && getSize(props, props.width) && getSize(props, props.width).split('px')[0] / 2 + "px" || defaultSize / 2 + "px";
});
var beforeHeightStyle = (0, _styledComponents.css)(["height:", ";"], function (props) {
  return props.height && getSize(props, props.width) && getSize(props, props.height).split('px')[0] / 2 + "px" || defaultSize / 2 + "px";
});
var loading = (0, _styledComponents.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var LoaderWrap = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledLoader__LoaderWrap",
  componentId: "sc-1fl7oa6-0"
})(["height:48px;width:48px;box-shadow:0 1px 4px 0 rgba(0,0,0,0.21);"]);
exports.LoaderWrap = LoaderWrap;
var StyledLoader = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledLoader",
  componentId: "sc-1fl7oa6-1"
})(["", " ", " margin:auto;position:relative;animation:", " 1.4s infinite linear;transform:translate3d(0,0,0);border-radius:50%;&:before{", " ", " ", " border:0;position:absolute;top:0;left:0;content:'';}&:after{", " border-radius:50%;content:'';margin:auto;position:absolute;top:3px;left:3px;bottom:3px;right:3px;}"], widthStyle, heightStyle, loading, beforeWidthStyle, beforeHeightStyle, function (props) {
  return props.afterBeforeBg && (0, _utils.backgroundStyle)(props.afterBeforeBg, props.theme);
}, function (props) {
  return props.afterBeforeBg && (0, _utils.backgroundStyle)(props.afterBeforeBg, props.theme);
});
exports.StyledLoader = StyledLoader;
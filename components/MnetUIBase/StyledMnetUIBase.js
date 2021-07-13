"use strict";

exports.__esModule = true;
exports.StyledMnetUIBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fullStyle = (0, _styledComponents.css)(["width:100vw;height:100vh;overflow:auto;"]);

var StyledMnetUIBase = _styledComponents["default"].div.withConfig({
  displayName: "StyledMnetUIBase",
  componentId: "sc-17lh5y2-0"
})(["", " ", " ", " ", " ", ""], function (props) {
  return !props.plain && _utils.baseStyle;
}, function (props) {
  return props.full && fullStyle;
}, function (props) {
  return props.theme.global.font.face;
}, function (props) {
  return props.theme.mnet.extend;
}, function (props) {
  return props.cssVars && Object.keys(props.theme.global.colors).filter(function (k) {
    return typeof props.theme.global.colors[k] === 'string';
  }).map(function (k) {
    return "--" + k + ": " + props.theme.global.colors[k] + ";";
  }).join('\n');
});

exports.StyledMnetUIBase = StyledMnetUIBase;
StyledMnetUIBase.defaultProps = {};
Object.setPrototypeOf(StyledMnetUIBase.defaultProps, _defaultProps.defaultProps);
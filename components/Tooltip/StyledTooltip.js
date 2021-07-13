"use strict";

exports.__esModule = true;
exports.StyledTooltipText = exports.ArrowWrap = exports.Arrow = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = require("../Box");

var _Text = require("../Text");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ArrowStyle = function ArrowStyle(props) {
  var position = props.position,
      showArrow = props.showArrow;

  if (!showArrow) {
    return (0, _styledComponents.css)(["display:none;"]);
  }

  var _backgroundStyle = (0, _utils.backgroundStyle)((0, _utils.normalizeColor)(props.theme.tooptip && props.theme.tooptip.background || 'dark-1', props.theme), props.theme),
      tipColor = _backgroundStyle[1];

  switch (position) {
    case 'up':
      return (0, _styledComponents.css)(["border-left:solid transparent;border-right:solid transparent;border-top:solid ", ";"], tipColor);

    case 'down':
      return (0, _styledComponents.css)(["border-left:solid transparent;border-right:solid transparent;border-bottom:solid ", ";"], tipColor);

    case 'left':
      return (0, _styledComponents.css)(["border-top:solid transparent;border-bottom:solid transparent;border-left:solid ", ";"], tipColor);

    default:
      return (0, _styledComponents.css)(["border-top:solid transparent;border-bottom:solid transparent;border-right:solid ", ";"], tipColor);
  }
};

var Arrow = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledTooltip__Arrow",
  componentId: "sc-7ieemc-0"
})(["width:0;height:0;", " border-width:", ";"], function (props) {
  return ArrowStyle(props);
}, function (props) {
  return props.theme.tooptip.tipSize || '5px';
});
exports.Arrow = Arrow;

var Alignment = function Alignment(props) {
  var position = props.position;

  switch (position) {
    case 'up':
      return (0, _styledComponents.css)(["flex-direction:column-reverse;"]);

    case 'down':
      return (0, _styledComponents.css)(["flex-direction:column;"]);

    case 'left':
      return (0, _styledComponents.css)(["flex-direction:row-reverse;"]);

    default:
      return (0, _styledComponents.css)(["flex-direction:row;"]);
  }
};

var ArrowWrap = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledTooltip__ArrowWrap",
  componentId: "sc-7ieemc-1"
})(["align-items:center;", ""], function (props) {
  return Alignment(props);
});
exports.ArrowWrap = ArrowWrap;
var StyledTooltipText = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "StyledTooltip__StyledTooltipText",
  componentId: "sc-7ieemc-2"
})(["", ";"], function (props) {
  return props.theme.tooptip.text && props.theme.tooptip.text.extend;
});
exports.StyledTooltipText = StyledTooltipText;
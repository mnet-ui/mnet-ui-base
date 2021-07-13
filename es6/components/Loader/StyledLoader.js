import styled, { css, keyframes } from 'styled-components';
import { Box } from '../Box';
import { backgroundStyle } from '../../utils';
var defaultSize = 28;

var getSize = function getSize(props, size) {
  return props.theme.global.size[size] || size;
};

var widthStyle = css(["width:", ";"], function (props) {
  return getSize(props, props.width || defaultSize + "px");
});
var heightStyle = css(["height:", ";"], function (props) {
  return getSize(props, props.height || defaultSize + "px");
});
var beforeWidthStyle = css(["width:", ";"], function (props) {
  return props.width && getSize(props, props.width) && getSize(props, props.width).split('px')[0] / 2 + "px" || defaultSize / 2 + "px";
});
var beforeHeightStyle = css(["height:", ";"], function (props) {
  return props.height && getSize(props, props.width) && getSize(props, props.height).split('px')[0] / 2 + "px" || defaultSize / 2 + "px";
});
var loading = keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
export var LoaderWrap = styled(Box).withConfig({
  displayName: "StyledLoader__LoaderWrap",
  componentId: "sc-1fl7oa6-0"
})(["height:48px;width:48px;box-shadow:0 1px 4px 0 rgba(0,0,0,0.21);"]);
export var StyledLoader = styled(Box).withConfig({
  displayName: "StyledLoader",
  componentId: "sc-1fl7oa6-1"
})(["", " ", " margin:auto;position:relative;animation:", " 1.4s infinite linear;transform:translate3d(0,0,0);border-radius:50%;&:before{", " ", " ", " border:0;position:absolute;top:0;left:0;content:'';}&:after{", " border-radius:50%;content:'';margin:auto;position:absolute;top:3px;left:3px;bottom:3px;right:3px;}"], widthStyle, heightStyle, loading, beforeWidthStyle, beforeHeightStyle, function (props) {
  return props.afterBeforeBg && backgroundStyle(props.afterBeforeBg, props.theme);
}, function (props) {
  return props.afterBeforeBg && backgroundStyle(props.afterBeforeBg, props.theme);
});
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Drop } from '../Drop';
import { ArrowWrap, Arrow, StyledTooltipText } from './StyledTooltip';
var Tooltip = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      message = _ref.message,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'right' : _ref$position,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "message", "position"]);

  var _useState = useState(),
      over = _useState[0],
      setOver = _useState[1];

  var overRef = useRef();
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var tooptip = theme.tooptip;
  var alignDrop = {
    left: 'right'
  };

  if (position === 'up') {
    alignDrop = {
      bottom: 'top'
    };
  }

  if (position === 'down') {
    alignDrop = {
      top: 'bottom'
    };
  }

  if (position === 'left') {
    alignDrop = {
      right: 'left'
    };
  }

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(Box, {
    ref: overRef,
    onMouseOver: function onMouseOver() {
      return setOver(true);
    },
    onMouseOut: function onMouseOut() {
      return setOver(false);
    },
    onFocus: function onFocus() {},
    onBlur: function onBlur() {}
  }, children), overRef.current && over && /*#__PURE__*/React.createElement(Drop, {
    direction: "row",
    align: alignDrop,
    target: overRef.current,
    elevation: "none",
    plain: true,
    style: {
      boxShadow: 'none',
      maxWidth: tooptip.maxWidth
    }
  }, /*#__PURE__*/React.createElement(ArrowWrap, {
    position: position
  }, /*#__PURE__*/React.createElement(Arrow, {
    position: position
  }), /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    background: tooptip.background || 'dark-1',
    round: tooptip.round
  }, /*#__PURE__*/React.createElement(StyledTooltipText, _extends({
    color: tooptip.color
  }, tooptip.text), message)))));
});
Tooltip.displayName = 'Tooltip';
export { Tooltip };
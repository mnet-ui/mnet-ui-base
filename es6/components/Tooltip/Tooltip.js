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
      _ref$showArrow = _ref.showArrow,
      showArrow = _ref$showArrow === void 0 ? true : _ref$showArrow,
      _ref$closeOnTooltipHo = _ref.closeOnTooltipHover,
      closeOnTooltipHover = _ref$closeOnTooltipHo === void 0 ? true : _ref$closeOnTooltipHo,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "message", "position", "showArrow", "closeOnTooltipHover"]);

  var _useState = useState(),
      over = _useState[0],
      setOver = _useState[1];

  var overRef = useRef();
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var tooptip = theme.tooptip;

  var alignDrop = _extends({}, tooptip.dropProps);

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

  var timeOut = null;

  var showToolTip = function showToolTip(show, timer) {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    if (timer) {
      timeOut = setTimeout(function () {
        setOver(show);
      }, 50);
    } else {
      setOver(show);
    }
  };

  var normalizedMouseOverfn = closeOnTooltipHover ? setOver : showToolTip;
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(Box, {
    ref: overRef,
    onMouseOver: function onMouseOver() {
      return normalizedMouseOverfn(true);
    },
    onMouseOut: function onMouseOut() {
      return normalizedMouseOverfn(false, true);
    },
    onFocus: function onFocus() {},
    onBlur: function onBlur() {}
  }, children), overRef.current && over && /*#__PURE__*/React.createElement(Drop, {
    direction: "row",
    onMouseOver: function onMouseOver() {
      return showToolTip(true);
    },
    onMouseOut: function onMouseOut() {
      return showToolTip(false, true);
    },
    align: alignDrop,
    target: overRef.current,
    elevation: "none",
    plain: true,
    style: {
      boxShadow: tooptip.boxShadow,
      maxWidth: tooptip.maxWidth
    }
  }, /*#__PURE__*/React.createElement(ArrowWrap, {
    position: position,
    background: !showArrow && (tooptip.background || 'dark-1')
  }, /*#__PURE__*/React.createElement(Arrow, {
    position: position,
    showArrow: showArrow
  }), /*#__PURE__*/React.createElement(Box, {
    pad: tooptip.pad,
    background: tooptip.background || 'dark-1',
    round: tooptip.round
  }, /*#__PURE__*/React.createElement(StyledTooltipText, _extends({
    color: tooptip.color
  }, tooptip.text), message)))));
});
Tooltip.displayName = 'Tooltip';
export { Tooltip };
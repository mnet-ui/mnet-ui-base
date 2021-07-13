import styled, { css } from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Text';
import { backgroundStyle, normalizeColor } from '../../utils';

var ArrowStyle = function ArrowStyle(props) {
  var position = props.position,
      showArrow = props.showArrow;

  if (!showArrow) {
    return css(["display:none;"]);
  }

  var _backgroundStyle = backgroundStyle(normalizeColor(props.theme.tooptip && props.theme.tooptip.background || 'dark-1', props.theme), props.theme),
      tipColor = _backgroundStyle[1];

  switch (position) {
    case 'up':
      return css(["border-left:solid transparent;border-right:solid transparent;border-top:solid ", ";"], tipColor);

    case 'down':
      return css(["border-left:solid transparent;border-right:solid transparent;border-bottom:solid ", ";"], tipColor);

    case 'left':
      return css(["border-top:solid transparent;border-bottom:solid transparent;border-left:solid ", ";"], tipColor);

    default:
      return css(["border-top:solid transparent;border-bottom:solid transparent;border-right:solid ", ";"], tipColor);
  }
};

export var Arrow = styled(Box).withConfig({
  displayName: "StyledTooltip__Arrow",
  componentId: "sc-7ieemc-0"
})(["width:0;height:0;", " border-width:", ";"], function (props) {
  return ArrowStyle(props);
}, function (props) {
  return props.theme.tooptip.tipSize || '5px';
});

var Alignment = function Alignment(props) {
  var position = props.position;

  switch (position) {
    case 'up':
      return css(["flex-direction:column-reverse;"]);

    case 'down':
      return css(["flex-direction:column;"]);

    case 'left':
      return css(["flex-direction:row-reverse;"]);

    default:
      return css(["flex-direction:row;"]);
  }
};

export var ArrowWrap = styled(Box).withConfig({
  displayName: "StyledTooltip__ArrowWrap",
  componentId: "sc-7ieemc-1"
})(["align-items:center;", ""], function (props) {
  return Alignment(props);
});
export var StyledTooltipText = styled(Text).withConfig({
  displayName: "StyledTooltip__StyledTooltipText",
  componentId: "sc-7ieemc-2"
})(["", ";"], function (props) {
  return props.theme.tooptip.text && props.theme.tooptip.text.extend;
});
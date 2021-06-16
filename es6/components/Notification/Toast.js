function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { defaultProps } from '../../default-props';
export function Toast(_ref) {
  var type = _ref.type,
      id = _ref.id,
      msg = _ref.msg,
      onClose = _ref.onClose;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var Icon = theme.notification.toast.icon[type] || theme.notification.toast.icon["default"];
  var IconSize = theme.notification.toast.icon.size;
  var IconColor = theme.notification.toast.text[type] && theme.notification.toast.text[type].color || theme.notification.toast.text["default"].color;
  var CloseIcon = theme.notification.toast.closeIcon;

  var handleClose = function handleClose() {
    onClose(id);
  };

  return /*#__PURE__*/React.createElement(Box, _extends({
    key: id
  }, theme.notification.toast["default"], theme.notification.toast[type]), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    direction: "row",
    gap: "xsmall"
  }, Icon && /*#__PURE__*/React.createElement(Icon, {
    size: IconSize,
    color: IconColor
  }), /*#__PURE__*/React.createElement(Text, theme.notification.toast.text[type] || theme.notification.toast.text["default"], msg)), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(CloseIcon, null),
    onClick: handleClose,
    plain: true,
    style: {
      display: 'flex'
    }
  }));
}
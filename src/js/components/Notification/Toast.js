import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';

import { defaultProps } from '../../default-props';

export function Toast({ type, id, msg, onClose }) {
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const Icon =
    theme.notification.toast.icon[type] ||
    theme.notification.toast.icon.default;
  const { 
    size: IconSize, 
    container: iconContainer } = theme.notification.toast.icon;
  const IconColor =
    (theme.notification.toast.text[type] &&
      theme.notification.toast.text[type].color) ||
    theme.notification.toast.text.default.color;
  const { closeIcon: CloseIcon } = theme.notification.toast;
  const handleClose = () => {
    onClose(id);
  };
  return (
    <Box
      key={id}
      {...theme.notification.toast.default}
      {...theme.notification.toast[type]}
    >
      <Box align="center" direction="row" gap="xsmall" {...iconContainer}>
        {Icon && <Icon size={IconSize} color={IconColor} />}
        <Text
          {...(theme.notification.toast.text[type] ||
            theme.notification.toast.text.default)}
        >
          {msg}
        </Text>
      </Box>
      <Button
        icon={<CloseIcon />}
        onClick={handleClose}
        color={IconColor}
        style={{ display: 'flex', padding: 0 }}
      />
    </Box>
  );
}

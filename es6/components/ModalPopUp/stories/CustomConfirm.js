import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, Text, openConfirmAlert, closeConfirmAlert } from 'mnet-ui-base';

var CustomConfirm = function CustomConfirm() {
  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "center",
    height: "100vh",
    width: "100vw"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return openConfirmAlert({
        title: /*#__PURE__*/React.createElement(Text, null, "Confirm"),
        message: /*#__PURE__*/React.createElement(Text, null, "This is a message from custom component"),
        renderButton: /*#__PURE__*/React.createElement(Button, {
          onClick: closeConfirmAlert,
          primary: true
        }, "OK")
      });
    }
  }, /*#__PURE__*/React.createElement(Text, {
    size: "large",
    weight: 600
  }, "Open Confirm Box")));
};

storiesOf('Modal Pop-up', module).add('Custom Confirm Box', function () {
  return /*#__PURE__*/React.createElement(CustomConfirm, null);
});
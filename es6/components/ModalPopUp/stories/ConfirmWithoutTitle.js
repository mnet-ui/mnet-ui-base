import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, Text, openConfirmAlert, closeConfirmAlert, modalIsLoading } from 'mnet-ui-base';

var ConfirmWithoutTitle = function ConfirmWithoutTitle() {
  var okClick = function okClick() {
    modalIsLoading(true);
    setTimeout(function () {
      modalIsLoading(false);
      closeConfirmAlert();
    }, 3000);
  };

  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "center",
    height: "100vh",
    width: "100vw"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return openConfirmAlert({
        message: 'This is a message',
        onPrimaryClick: okClick
      });
    }
  }, /*#__PURE__*/React.createElement(Text, {
    size: "large",
    weight: 600
  }, "Open Confirm Box")));
};

storiesOf('Modal Pop-up', module).add('Confirm Box Without Title', function () {
  return /*#__PURE__*/React.createElement(ConfirmWithoutTitle, null);
});
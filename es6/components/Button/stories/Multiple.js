import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button } from 'mnet-ui-base';
import { Add } from "grommet-icons/es6/icons/Add";

var MultipleButton = function MultipleButton() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(Button, {
    color: "dark-1",
    primary: true,
    icon: /*#__PURE__*/React.createElement(Add, {
      color: "accent-1"
    }),
    label: "Add",
    onClick: function onClick() {}
  })), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(Button, {
    color: "dark-1",
    primary: true,
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {}
  })), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {}
  })), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(Button, {
    color: "light-2",
    primary: true,
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {}
  }))));
};

storiesOf('Button', module).add('Multiple', function () {
  return /*#__PURE__*/React.createElement(MultipleButton, null);
});
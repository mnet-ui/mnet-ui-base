import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Menu } from 'mnet-ui-base';
import { Power } from "grommet-icons/es6/icons/Power";
import { User } from "grommet-icons/es6/icons/User";

var Reverse = function Reverse() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Menu, {
    dropProps: {
      align: {
        top: 'bottom',
        left: 'left'
      }
    },
    label: "actions",
    items: [{
      label: 'Home'
    }, {
      label: 'Profile',
      icon: /*#__PURE__*/React.createElement(User, null),
      gap: 'small'
    }, {
      label: 'Logout',
      icon: /*#__PURE__*/React.createElement(Power, null),
      reverse: true,
      gap: 'small'
    }]
  })));
};

storiesOf('Menu', module).add('Reverse', function () {
  return /*#__PURE__*/React.createElement(Reverse, null);
});
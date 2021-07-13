import React from 'react';
import { storiesOf } from '@storybook/react';
import { deepMerge } from 'mnet-ui-base/utils';
import { mnet, Anchor, Box, Button, MnetUIBase, Menu, Text, TextInput } from 'mnet-ui-base';
var customFocus = deepMerge(mnet, {
  global: {
    colors: {
      focus: 'neutral-3'
    }
  }
});

var CustomDefaultProps = function CustomDefaultProps() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customFocus
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "small",
    gap: "medium",
    width: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "Focus on the input components and notice the custom focus color"), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "hi"
  }), /*#__PURE__*/React.createElement(Anchor, {
    href: ""
  }, "Anchor"), /*#__PURE__*/React.createElement(Menu, {
    label: "Menu",
    items: [{
      label: 'One',
      onClick: function onClick() {}
    }, {
      label: 'Two'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    label: "Button",
    onClick: function onClick() {}
  })));
};

storiesOf('Theme', module).add('Focus', function () {
  return /*#__PURE__*/React.createElement(CustomDefaultProps, null);
});
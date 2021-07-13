import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Button, RadioButton } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
var theme = deepMerge(mnet, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-3'
      }
    },
    check: {
      color: {
        light: 'neutral-1'
      }
    },
    icon: {
      size: '10px'
    }
  }
});

var ThemeRadioButton = function ThemeRadioButton() {
  var _React$useState = React.useState(),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    label: "option 1",
    name: "name",
    value: "option 1",
    checked: selected === 'option 1',
    onChange: function onChange(event) {
      return setSelected(event.target.value);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    label: "clear",
    onClick: function onClick() {
      return setSelected(undefined);
    }
  })));
};

storiesOf('RadioButton', module).add('Theme', function () {
  return /*#__PURE__*/React.createElement(ThemeRadioButton, null);
});
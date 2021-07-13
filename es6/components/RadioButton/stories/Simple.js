import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, RadioButton } from 'mnet-ui-base';

var SimpleRadioButton = function SimpleRadioButton() {
  var _React$useState = React.useState(),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
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

storiesOf('RadioButton', module).add('Simple', function () {
  return /*#__PURE__*/React.createElement(SimpleRadioButton, null);
});
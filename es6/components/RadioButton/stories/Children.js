import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, RadioButton } from 'mnet-ui-base';
import { Ascend } from "grommet-icons/es6/icons/Ascend";

var ChildrenRadioButton = function ChildrenRadioButton() {
  var _React$useState = React.useState(),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    name: "name",
    value: "option 1",
    checked: selected === 'option 1',
    onChange: function onChange(event) {
      return setSelected(event.target.value);
    }
  }, function (_ref) {
    var checked = _ref.checked;
    return /*#__PURE__*/React.createElement(Ascend, {
      color: checked ? 'brand' : 'status-unknown'
    });
  }), /*#__PURE__*/React.createElement(Button, {
    label: "clear",
    onClick: function onClick() {
      return setSelected(undefined);
    }
  })));
};

storiesOf('RadioButton', module).add('Children', function () {
  return /*#__PURE__*/React.createElement(ChildrenRadioButton, null);
});
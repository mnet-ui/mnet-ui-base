import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Example = function Example() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    full: true,
    theme: mnet
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "select",
    name: "select",
    placeholder: "Select",
    options: ['one', 'two'],
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return console.log(option);
    }
  })));
};

storiesOf('Select', module).add('Uncontrolled', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});
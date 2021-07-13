import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, CheckBoxGroup, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
var objectOptions = [];

for (var i = 1; i <= 5; i += 1) {
  objectOptions.push({
    label: "option " + i,
    val: i
  });
}

var Example = function Example() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(CheckBoxGroup, {
    labelKey: "label",
    valueKey: "val",
    options: objectOptions
  })));
};

storiesOf('CheckBoxGroup', module).add('Object options', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});
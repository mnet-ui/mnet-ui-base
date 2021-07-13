import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
import { Box, Text, ThemeContext, MnetUIBase, Select } from 'mnet-ui-base';
var customTheme = deepMerge(mnet, {
  global: {
    focus: {
      border: {
        color: 'red'
      },
      shadow: {
        color: 'red'
      }
    }
  }
});

var GlobalThemeWithThemeContext = function GlobalThemeWithThemeContext() {
  var options = ['one', 'two', 'three'];

  var _useState = useState(''),
      valueRed = _useState[0],
      setValueRed = _useState[1];

  var _useState2 = useState(''),
      valueBlue = _useState2[0],
      setValueBlue = _useState2[1];

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large",
    direction: "column",
    gap: "large"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    margin: "medium"
  }, "The focus color of this select component is being altered by the custom theme that is passed into the MnetUIBase component."), /*#__PURE__*/React.createElement(Select, {
    alignSelf: "center",
    placeholder: "Select",
    value: valueRed,
    options: options,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setValueRed(option);
    }
  })), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(ThemeContext.Extend, {
    value: {
      global: {
        focus: {
          border: {
            color: 'blue'
          }
        }
      }
    }
  }, /*#__PURE__*/React.createElement(Text, {
    margin: "medium"
  }, "The focus color of this select component is being altered by ThemeContext, independent from the custom theme"), /*#__PURE__*/React.createElement(Select, {
    alignSelf: "center",
    placeholder: "Select",
    value: valueBlue,
    options: options,
    onChange: function onChange(_ref2) {
      var option = _ref2.option;
      return setValueBlue(option);
    }
  })))));
};

storiesOf('Theme', module).add('ThemeContext.Extend', function () {
  return /*#__PURE__*/React.createElement(GlobalThemeWithThemeContext, null);
});
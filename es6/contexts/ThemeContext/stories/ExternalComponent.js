import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text, ThemeContext } from 'mnet-ui-base';

var ExternalComponentWithTheme = function ExternalComponentWithTheme() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    background: "neutral-3"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "light-1"
  }, "This is a grommet component")), /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: theme.global.colors['neutral-3']
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        color: theme.global.colors['light-1']
      }
    }, "This component is leveraging the grommet theme capabilities although it is not a grommet component"));
  }));
};

storiesOf('Theme', module).add('External Components', function () {
  return /*#__PURE__*/React.createElement(ExternalComponentWithTheme, null);
});
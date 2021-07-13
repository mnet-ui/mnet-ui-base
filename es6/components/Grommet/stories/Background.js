import React from 'react';
import { storiesOf } from '@storybook/react';
import { mnet, MnetUIBase, Box, Text } from 'mnet-ui-base'; // import { neo } from 'mnet-ui-base-theme-neo';
// import { cdp } from 'mnet-ui-base-theme-cdp';

var Background = function Background() {
  // const themeColor = 'background-back';
  var hexValue = '#DCD0FF';
  var cssColor = 'gold';
  return /*#__PURE__*/React.createElement(Box, {
    gap: "medium"
  }, /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "MnetUIBase with no theme or background prop"))), /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet,
    background: hexValue
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "MnetUIBase with background as HEX value of '", hexValue, "'"))), /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet,
    background: cssColor
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "MnetUIBase with background as CSS color name of '", cssColor, "'"))), /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet,
    background: {
      color: 'pink',
      image: 'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "MnetUIBase with background as object containing color and image"))));
};

storiesOf('MnetUIBase', module).add('Background', function () {
  return /*#__PURE__*/React.createElement(Background, null);
});
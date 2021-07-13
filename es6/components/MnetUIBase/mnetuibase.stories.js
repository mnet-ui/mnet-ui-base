import React from 'react';
import { storiesOf } from '@storybook/react';
import { mnet, MnetUIBase, Anchor, Box } from 'mnet-ui-base';
import { Add } from "grommet-icons/es6/icons/Add";
var customTheme = {
  global: {
    colors: {
      custom: '#cc6633'
    }
  }
};

var Themed = function Themed() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Anchor, {
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "Add",
    color: "custom"
  })));
};

var Plain = function Plain() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MnetUIBase, {
    plain: true
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement("p", null, "Plain MnetUIBase"))), /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement("p", null, "Not plain MnetUIBase"))));
};

var MnetUIBaseVars = function MnetUIBaseVars() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet,
    cssVars: true
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    background: "var(--accent-2)",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(Box, null, "Checkout MnetUIBase variables, you can find them in the StyledMnetUIBase DOM."), /*#__PURE__*/React.createElement(Box, {
    "with": true
  }, "For example, the background color in this Box is using var(--accent-2)")));
};

storiesOf('MnetUIBase', module).add('Plain', function () {
  return /*#__PURE__*/React.createElement(Plain, null);
}).add('Theme', function () {
  return /*#__PURE__*/React.createElement(Themed, null);
}).add('Vars', function () {
  return /*#__PURE__*/React.createElement(MnetUIBaseVars, null);
});
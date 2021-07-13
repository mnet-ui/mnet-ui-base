import React from 'react';
import { storiesOf } from '@storybook/react';
import { TreeOption } from "grommet-icons/es6/icons/TreeOption";
import { Box, Heading, Tab, Tabs } from 'mnet-ui-base';

var ScrollableTabs = function ScrollableTabs() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true
  }, /*#__PURE__*/React.createElement(Tabs, {
    flex: true
  }, /*#__PURE__*/React.createElement(Tab, {
    title: "Tab 1"
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    overflow: "auto",
    pad: "xlarge",
    align: "center",
    background: "accent-1"
  }, /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"), /*#__PURE__*/React.createElement(Heading, null, "hello!"))), /*#__PURE__*/React.createElement(Tab, {
    title: "Tab 2"
  }, /*#__PURE__*/React.createElement(Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, /*#__PURE__*/React.createElement(TreeOption, {
    size: "xlarge"
  }))))));
};

storiesOf('Tabs', module).add('Scrollable', function () {
  return /*#__PURE__*/React.createElement(ScrollableTabs, null);
});
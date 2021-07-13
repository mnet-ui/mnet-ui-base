import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Grid } from 'mnet-ui-base';

var NColumnGrid = function NColumnGrid() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    columns: {
      count: 6,
      size: 'auto'
    },
    gap: "small"
  }, /*#__PURE__*/React.createElement(Box, {
    background: "brand"
  }, "Item 1"), /*#__PURE__*/React.createElement(Box, {
    background: "brand"
  }, "Item 2"), /*#__PURE__*/React.createElement(Box, {
    background: "brand"
  }, "Item 3"), /*#__PURE__*/React.createElement(Box, {
    background: "brand"
  }, "Item 4"), /*#__PURE__*/React.createElement(Box, {
    background: "brand"
  }, "Item 5"), /*#__PURE__*/React.createElement(Box, {
    background: "brand"
  }, "Item 6")));
};

storiesOf('Grid', module).add('N-column layout', function () {
  return /*#__PURE__*/React.createElement(NColumnGrid, null);
});
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button } from 'mnet-ui-base';
import { Tooltip } from '../Tooltip';

var TooltipPreview = function TooltipPreview() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "large",
    justify: "center",
    height: "100vh"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    message: "Left Side",
    position: "left",
    margin: "large"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Left"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    message: "Up Side",
    position: "up",
    margin: "large"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "UP"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    message: "Down Side",
    position: "down",
    margin: "large",
    closeOnTooltipHover: false
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Down (Prevent tooltip on hover)"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    message: "Enabling this allows bidders to drop pixels or scripts to sync \n             cookies in order to match their cookies with DSP\u2019s cookies.\n             They do this since some DSPs are most likely to bid on.",
    position: "right",
    margin: "large"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "Right"
  }))));
};

storiesOf('Tooltip', module).add('Tooltip', function () {
  return /*#__PURE__*/React.createElement(TooltipPreview, null);
});
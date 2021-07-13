import React, { useEffect, useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Drop } from 'mnet-ui-base';

var PlainDrop = function PlainDrop() {
  var targetRef = useRef();

  var _useState = useState(false),
      setShowDrop = _useState[1];

  useEffect(function () {
    return setShowDrop(true);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    background: "brand",
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    background: "dark-3",
    pad: "medium",
    align: "center",
    justify: "start",
    ref: targetRef
  }, "Target"), targetRef.current && /*#__PURE__*/React.createElement(Drop, {
    plain: true,
    align: {
      top: 'bottom',
      left: 'left'
    },
    target: targetRef.current
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "large"
  }, "No background no shadow"))));
};

storiesOf('Drop', module).add('Plain', function () {
  return /*#__PURE__*/React.createElement(PlainDrop, null);
});
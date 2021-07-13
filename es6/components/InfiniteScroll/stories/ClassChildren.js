function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, InfiniteScroll, Text } from 'mnet-ui-base';
import { allItems } from './Basics';
/* eslint-disable react/prefer-stateless-function */

var MyItem = function MyItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/React.createElement(Box, {
    pad: "medium",
    border: {
      side: 'bottom'
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Text, null, item));
};

var ClassChildrenInfiniteScroll = function ClassChildrenInfiniteScroll(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(InfiniteScroll, _extends({
    items: allItems
  }, props), function (item) {
    return /*#__PURE__*/React.createElement(MyItem, {
      key: item,
      item: item
    });
  })));
};

storiesOf('InfiniteScroll', module).add('Class Children', function () {
  return /*#__PURE__*/React.createElement(ClassChildrenInfiniteScroll, null);
});
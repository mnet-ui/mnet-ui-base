import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormPrevious } from "grommet-icons/es6/icons/FormPrevious";
import { FormNext } from "grommet-icons/es6/icons/FormNext";
import { Box } from 'mnet-ui-base';
import { Pagination } from '../Pagination';

var PaginationPreview = function PaginationPreview() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Pagination, {
    leftIcon: /*#__PURE__*/React.createElement(FormPrevious, null),
    rightIcon: /*#__PURE__*/React.createElement(FormNext, null),
    pages: 3,
    currentPage: 2,
    onClick: function onClick(page) {
      return console.log(page);
    }
  })));
};

storiesOf('Pagination', module).add('Pagination', function () {
  return /*#__PURE__*/React.createElement(PaginationPreview, null);
});
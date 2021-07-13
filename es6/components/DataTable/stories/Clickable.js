import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'mnet-ui-base'; // Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js

import { columns, DATA } from './data';

var ClickableDataTable = function ClickableDataTable() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: DATA,
    step: 10,
    onClickRow: function onClickRow(event) {
      return alert(JSON.stringify(event.datum, null, 2));
    }
  })));
};

storiesOf('DataTable', module).add('Clickable', function () {
  return /*#__PURE__*/React.createElement(ClickableDataTable, null);
});
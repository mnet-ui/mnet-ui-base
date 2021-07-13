import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'mnet-ui-base';
import { Breadcrumb } from '../Breadcrumb';

var BasicBreadcrumb = function BasicBreadcrumb(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    data: data,
    onValueSelect: function onValueSelect(_) {
      return console.log(_);
    }
  }));
};

storiesOf('Breadcrumb', module).add('Basic', function () {
  return /*#__PURE__*/React.createElement(BasicBreadcrumb, {
    data: ['Value 1', 'Value 2', 'Value 3', 'Value 4']
  });
});
storiesOf('Breadcrumb', module).add('Object Data', function () {
  return /*#__PURE__*/React.createElement(BasicBreadcrumb, {
    data: [{
      label: 'Value 1',
      id: '1'
    }, {
      label: 'Value 2',
      id: '2'
    }, {
      label: 'Value 3',
      id: '3'
    }, {
      label: 'Value 4',
      id: '4'
    }]
  });
});
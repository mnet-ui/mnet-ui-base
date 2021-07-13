"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _Breadcrumb = require("../Breadcrumb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BasicBreadcrumb = function BasicBreadcrumb(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb, {
    data: data,
    onValueSelect: function onValueSelect(_) {
      return console.log(_);
    }
  }));
};

(0, _react2.storiesOf)('Breadcrumb', module).add('Basic', function () {
  return /*#__PURE__*/_react["default"].createElement(BasicBreadcrumb, {
    data: ['Value 1', 'Value 2', 'Value 3', 'Value 4']
  });
});
(0, _react2.storiesOf)('Breadcrumb', module).add('Object Data', function () {
  return /*#__PURE__*/_react["default"].createElement(BasicBreadcrumb, {
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
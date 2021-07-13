"use strict";

exports.__esModule = true;
exports.ChildrenExample = exports.data = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = ['Boise', 'Fort Collins', 'Bay Area', 'North Carolina'];
exports.data = data;

var ChildrenExample = function ChildrenExample() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    height: "100%",
    background: "light-2"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.List, {
    data: data,
    pad: "medium"
  }, function (datum, index) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: index,
      direction: "row-responsive",
      gap: "large",
      size: "xsmall",
      align: "center"
    }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Gremlin, {
      size: "large"
    }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
      weight: "bold"
    }, datum));
  })));
};

exports.ChildrenExample = ChildrenExample;
(0, _react2.storiesOf)('List', module).add('children', function () {
  return /*#__PURE__*/_react["default"].createElement(ChildrenExample, null);
});
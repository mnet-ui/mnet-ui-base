"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _Pagination = require("../Pagination");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PaginationPreview = function PaginationPreview() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_Pagination.Pagination, {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormPrevious, null),
    rightIcon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormNext, null),
    pages: 3,
    currentPage: 2,
    onClick: function onClick(page) {
      return console.log(page);
    }
  })));
};

(0, _react2.storiesOf)('Pagination', module).add('Pagination', function () {
  return /*#__PURE__*/_react["default"].createElement(PaginationPreview, null);
});
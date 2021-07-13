"use strict";

exports.__esModule = true;
exports.Pagination = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Button = require("../Button");

var _StyledPagination = require("./StyledPagination");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Pagination = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      pages = _ref.pages,
      currentPage = _ref.currentPage,
      onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["leftIcon", "rightIcon", "pages", "currentPage", "onClick"]);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var pagination = theme.pagination;
  if (pages < 2) return null;

  var handleClick = function handleClick(_ref2) {
    var currentTarget = _ref2.currentTarget;
    return onClick(currentTarget.dataset.page);
  };

  var startPage = currentPage < 3 ? 0 : currentPage - 3;
  var endPage = currentPage < 3 ? currentPage + 5 : currentPage + 3;
  var pagesArr = new Array(pages).fill(undefined);
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    direction: "row",
    margin: {
      vertical: 'large'
    },
    ref: ref
  }, rest), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row",
    round: pagination.round,
    border: pagination.border
  }, /*#__PURE__*/_react["default"].createElement(_StyledPagination.List, _extends({
    background: pagination.icon.bgColor,
    direction: "row",
    justify: "center",
    round: {
      size: pagination.round,
      corner: 'left'
    }
  }, pagination.list), currentPage === 1 ? null : /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    "data-page": currentPage - 1,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    pad: pagination.icon.pad
  }, leftIcon))), pagesArr.map(function (a, i) {
    return i;
  }).slice(startPage, endPage).map(function (pageNo) {
    return /*#__PURE__*/_react["default"].createElement(_StyledPagination.List, _extends({
      background: pagination.background,
      justify: "center",
      key: pageNo || '0',
      className: "" + (currentPage === pageNo + 1 ? 'active' : '')
    }, pagination.list), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      "data-page": pageNo + 1,
      onClick: handleClick,
      color: "" + (currentPage === pageNo + 1 ? pagination.active.color : pagination.list && pagination.list.color)
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      pad: pagination.pad
    }, pageNo + 1)));
  }), /*#__PURE__*/_react["default"].createElement(_StyledPagination.List, {
    direction: "row",
    background: pagination.icon.bgColor,
    justify: "center",
    round: {
      size: pagination.round,
      corner: 'right'
    }
  }, currentPage === pages ? null : /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    "data-page": currentPage + 1,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    pad: pagination.icon.pad
  }, rightIcon)))));
});
exports.Pagination = Pagination;
Pagination.displayName = 'Pagination';
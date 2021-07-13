function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Button } from '../Button';
import { List } from './StyledPagination';
var Pagination = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      pages = _ref.pages,
      currentPage = _ref.currentPage,
      onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["leftIcon", "rightIcon", "pages", "currentPage", "onClick"]);

  var theme = useContext(ThemeContext) || defaultProps.theme;
  var pagination = theme.pagination;
  if (pages < 2) return null;

  var handleClick = function handleClick(_ref2) {
    var currentTarget = _ref2.currentTarget;
    return onClick(currentTarget.dataset.page);
  };

  var startPage = currentPage < 3 ? 0 : currentPage - 3;
  var endPage = currentPage < 3 ? currentPage + 5 : currentPage + 3;
  var pagesArr = new Array(pages).fill(undefined);
  return /*#__PURE__*/React.createElement(Box, _extends({
    direction: "row",
    margin: {
      vertical: 'large'
    },
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    round: pagination.round,
    border: pagination.border
  }, /*#__PURE__*/React.createElement(List, _extends({
    background: pagination.icon.bgColor,
    direction: "row",
    justify: "center",
    round: {
      size: pagination.round,
      corner: 'left'
    }
  }, pagination.list), currentPage === 1 ? null : /*#__PURE__*/React.createElement(Button, {
    "data-page": currentPage - 1,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(Box, {
    pad: pagination.icon.pad
  }, leftIcon))), pagesArr.map(function (a, i) {
    return i;
  }).slice(startPage, endPage).map(function (pageNo) {
    return /*#__PURE__*/React.createElement(List, _extends({
      background: pagination.background,
      justify: "center",
      key: pageNo || '0',
      className: "" + (currentPage === pageNo + 1 ? 'active' : '')
    }, pagination.list), /*#__PURE__*/React.createElement(Button, {
      "data-page": pageNo + 1,
      onClick: handleClick,
      color: "" + (currentPage === pageNo + 1 ? pagination.active.color : pagination.list && pagination.list.color)
    }, /*#__PURE__*/React.createElement(Box, {
      pad: pagination.pad
    }, pageNo + 1)));
  }), /*#__PURE__*/React.createElement(List, {
    direction: "row",
    background: pagination.icon.bgColor,
    justify: "center",
    round: {
      size: pagination.round,
      corner: 'right'
    }
  }, currentPage === pages ? null : /*#__PURE__*/React.createElement(Button, {
    "data-page": currentPage + 1,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(Box, {
    pad: pagination.icon.pad
  }, rightIcon)))));
});
Pagination.displayName = 'Pagination';
export { Pagination };
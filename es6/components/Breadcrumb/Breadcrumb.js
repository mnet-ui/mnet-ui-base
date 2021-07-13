function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { Button } from '../Button';
import { List } from '../List';
import { StyledBreadcrumb, StyledBreadcrumbItem, StyledBreadcrumbText } from './StyledBreadcrumb';

var Breadcrumb = function Breadcrumb(_ref) {
  var data = _ref.data,
      breadcrumbIcon = _ref.icon,
      onValueSelect = _ref.onValueSelect,
      rest = _objectWithoutPropertiesLoose(_ref, ["data", "icon", "onValueSelect"]);

  var theme = useContext(ThemeContext) || defaultProps.theme;

  var handleClick = function handleClick(item) {
    if (item && typeof item === 'object') {
      onValueSelect(item.id);
    } else {
      onValueSelect(item);
    }
  };

  var Icon = breadcrumbIcon || theme.breadcrumb.icons.separator;
  return /*#__PURE__*/React.createElement(StyledBreadcrumb, null, /*#__PURE__*/React.createElement(List, _extends({
    data: data
  }, rest), function (item, index) {
    return /*#__PURE__*/React.createElement(StyledBreadcrumbItem, _extends({
      key: index
    }, theme.breadcrumb.item), /*#__PURE__*/React.createElement(Button, {
      onClick: index !== data.length - 1 ? function () {
        return handleClick(item);
      } : undefined
    }, /*#__PURE__*/React.createElement(StyledBreadcrumbText, _extends({
      last: data.length > 1 && index === data.length - 1
    }, theme.breadcrumb.content), item && typeof item === 'object' ? item.label : item), index < data.length - 1 && /*#__PURE__*/React.createElement(Icon, theme.breadcrumb.icon)));
  }));
};

Breadcrumb.displayName = 'Breadcrumb';
var BreadcrumbDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  BreadcrumbDoc = require('./doc').doc(Breadcrumb);
}

var BreadcrumbWrapper = BreadcrumbDoc || Breadcrumb;
export { BreadcrumbWrapper as Breadcrumb };
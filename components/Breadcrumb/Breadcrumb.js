"use strict";

exports.__esModule = true;
exports.Breadcrumb = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _Button = require("../Button");

var _List = require("../List");

var _StyledBreadcrumb = require("./StyledBreadcrumb");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Breadcrumb = function Breadcrumb(_ref) {
  var data = _ref.data,
      breadcrumbIcon = _ref.icon,
      onValueSelect = _ref.onValueSelect,
      rest = _objectWithoutPropertiesLoose(_ref, ["data", "icon", "onValueSelect"]);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var handleClick = function handleClick(item) {
    if (item && typeof item === 'object') {
      onValueSelect(item.id);
    } else {
      onValueSelect(item);
    }
  };

  var Icon = breadcrumbIcon || theme.breadcrumb.icons.separator;
  return /*#__PURE__*/_react["default"].createElement(_StyledBreadcrumb.StyledBreadcrumb, null, /*#__PURE__*/_react["default"].createElement(_List.List, _extends({
    data: data
  }, rest), function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_StyledBreadcrumb.StyledBreadcrumbItem, _extends({
      key: index
    }, theme.breadcrumb.item), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      onClick: index !== data.length - 1 ? function () {
        return handleClick(item);
      } : undefined
    }, /*#__PURE__*/_react["default"].createElement(_StyledBreadcrumb.StyledBreadcrumbText, _extends({
      last: data.length > 1 && index === data.length - 1
    }, theme.breadcrumb.content), item && typeof item === 'object' ? item.label : item), index < data.length - 1 && /*#__PURE__*/_react["default"].createElement(Icon, theme.breadcrumb.icon)));
  }));
};

Breadcrumb.displayName = 'Breadcrumb';
var BreadcrumbDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  BreadcrumbDoc = require('./doc').doc(Breadcrumb);
}

var BreadcrumbWrapper = BreadcrumbDoc || Breadcrumb;
exports.Breadcrumb = BreadcrumbWrapper;
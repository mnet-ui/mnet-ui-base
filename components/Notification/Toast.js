"use strict";

exports.__esModule = true;
exports.Toast = Toast;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Box = require("../Box");

var _Text = require("../Text");

var _Button = require("../Button");

var _StyledNotification = require("./StyledNotification");

var _defaultProps = require("../../default-props");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Toast(_ref) {
  var type = _ref.type,
      id = _ref.id,
      msg = _ref.msg,
      onClose = _ref.onClose;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var Icon = theme.notification.toast.icon[type] || theme.notification.toast.icon["default"];
  var _theme$notification$t = theme.notification.toast.icon,
      IconSize = _theme$notification$t.size,
      iconWrapper = _theme$notification$t.container;
  var IconColor = theme.notification.toast.text[type] && theme.notification.toast.text[type].color || theme.notification.toast.text["default"].color;
  var CloseIcon = theme.notification.toast.closeIcon;

  var handleClose = function handleClose() {
    onClose(id);
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    key: id
  }, theme.notification.toast["default"], theme.notification.toast[type]), /*#__PURE__*/_react["default"].createElement(_StyledNotification.IconWrapper, _extends({
    align: "center",
    direction: "row",
    gap: "xsmall"
  }, iconWrapper), Icon && /*#__PURE__*/_react["default"].createElement(Icon, {
    size: IconSize,
    color: IconColor
  }), /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.notification.toast.text[type] || theme.notification.toast.text["default"], msg)), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(CloseIcon, {
      color: IconColor
    }),
    onClick: handleClose,
    style: {
      display: 'flex',
      padding: 0
    }
  }));
}
"use strict";

exports.__esModule = true;
exports.PopUpContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Text = require("../Text");

var _Button = require("../Button");

var _Heading = require("../Heading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopUpContainer = function PopUpContainer(_ref) {
  var title = _ref.title,
      message = _ref.message,
      body = _ref.body,
      onPrimaryClick = _ref.onPrimaryClick,
      renderButton = _ref.renderButton,
      isLoading = _ref.isLoading,
      onClose = _ref.onClose;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var closeIcon = theme.modalpopup.title.close;
  var CloseIcon = closeIcon && closeIcon.icon;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    role: "dialog",
    "aria-label": "modal-pop-up"
  }, theme.modalpopup.container), title && /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.modalpopup.title.wrapper, /*#__PURE__*/_react["default"].createElement(_Heading.Heading, theme.modalpopup.title.text, title), CloseIcon && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(CloseIcon, {
      color: closeIcon.color,
      size: closeIcon.size
    }),
    onClick: onClose,
    plain: true
  })), !body && message && /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.modalpopup.message.wrapper, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.modalpopup.message.text, message)), !message && body && /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.modalpopup.message.wrapper, body), renderButton || !body && /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.modalpopup.buttons.wrapper, /*#__PURE__*/_react["default"].createElement(_Button.Button, _extends({}, theme.modalpopup.buttons.button, {
    onClick: onPrimaryClick || onClose,
    isLoading: isLoading,
    background: "accent-1",
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: 600
  }, "OK")), /*#__PURE__*/_react["default"].createElement(_Button.Button, _extends({}, theme.modalpopup.buttons.button, {
    onClick: onClose,
    background: "accent-2",
    secondary: true
  }), /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    weight: 600
  }, "Cancel"))));
};

exports.PopUpContainer = PopUpContainer;
PopUpContainer.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  message: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onPrimaryClick: _propTypes["default"].func,
  renderButton: _propTypes["default"].node,
  isLoading: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  body: _propTypes["default"].node
};
PopUpContainer.defaultProps = {
  title: '',
  message: undefined,
  onPrimaryClick: undefined,
  renderButton: undefined,
  body: undefined
};
"use strict";

exports.__esModule = true;
exports.Loader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = require("../Box");

var _StyledLoader = require("./StyledLoader");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Loader = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      _ref$primaryColor = _ref.primaryColor,
      primaryColor = _ref$primaryColor === void 0 ? 'brand' : _ref$primaryColor,
      _ref$secondaryColor = _ref.secondaryColor,
      secondaryColor = _ref$secondaryColor === void 0 ? 'white' : _ref$secondaryColor,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'circle' : _ref$type,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "primaryColor", "secondaryColor", "type"]);

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    ref: ref
  }, type === 'inline' ? /*#__PURE__*/_react["default"].createElement(_StyledLoader.StyledLoader, _extends({
    afterBeforeBg: secondaryColor,
    background: primaryColor,
    align: "center",
    justify: "center"
  }, rest)) : /*#__PURE__*/_react["default"].createElement(_StyledLoader.LoaderWrap, _extends({
    align: "center",
    justify: "center",
    background: secondaryColor
  }, rest), /*#__PURE__*/_react["default"].createElement(_StyledLoader.StyledLoader, _extends({
    afterBeforeBg: secondaryColor,
    background: primaryColor
  }, rest))));
});
exports.Loader = Loader;
Loader.displayName = 'Loader';
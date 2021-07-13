function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import { Box } from '../Box';
import { LoaderWrap, StyledLoader } from './StyledLoader';
var Loader = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$primaryColor = _ref.primaryColor,
      primaryColor = _ref$primaryColor === void 0 ? 'brand' : _ref$primaryColor,
      _ref$secondaryColor = _ref.secondaryColor,
      secondaryColor = _ref$secondaryColor === void 0 ? 'white' : _ref$secondaryColor,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'circle' : _ref$type,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "primaryColor", "secondaryColor", "type"]);

  return /*#__PURE__*/React.createElement(Box, {
    ref: ref
  }, type === 'inline' ? /*#__PURE__*/React.createElement(StyledLoader, _extends({
    afterBeforeBg: secondaryColor,
    background: primaryColor,
    align: "center",
    justify: "center"
  }, rest)) : /*#__PURE__*/React.createElement(LoaderWrap, _extends({
    align: "center",
    justify: "center",
    background: secondaryColor
  }, rest), /*#__PURE__*/React.createElement(StyledLoader, _extends({
    afterBeforeBg: secondaryColor,
    background: primaryColor
  }, rest))));
});
Loader.displayName = 'Loader';
export { Loader };
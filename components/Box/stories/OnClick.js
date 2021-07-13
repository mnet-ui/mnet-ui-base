"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OnClickBox = function OnClickBox() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    justify: "center",
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    pad: "large",
    align: "center",
    round: true,
    gap: "small",
    hoverIndicator: true,
    onClick: function onClick() {
      alert('clicked');
    }
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Attraction, {
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Party"))));
};

(0, _react2.storiesOf)('Box', module).add('onClick', function () {
  return /*#__PURE__*/_react["default"].createElement(OnClickBox, null);
});
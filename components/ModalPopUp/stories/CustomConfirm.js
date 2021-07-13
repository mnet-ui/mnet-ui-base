"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomConfirm = function CustomConfirm() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    justify: "center",
    height: "100vh",
    width: "100vw"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    onClick: function onClick() {
      return (0, _mnetUiBase.openConfirmAlert)({
        title: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Confirm"),
        message: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "This is a message from custom component"),
        renderButton: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
          onClick: _mnetUiBase.closeConfirmAlert,
          primary: true
        }, "OK")
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "large",
    weight: 600
  }, "Open Confirm Box")));
};

(0, _react2.storiesOf)('Modal Pop-up', module).add('Custom Confirm Box', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomConfirm, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConfirmWithoutTitle = function ConfirmWithoutTitle() {
  var okClick = function okClick() {
    (0, _mnetUiBase.modalIsLoading)(true);
    setTimeout(function () {
      (0, _mnetUiBase.modalIsLoading)(false);
      (0, _mnetUiBase.closeConfirmAlert)();
    }, 3000);
  };

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    justify: "center",
    height: "100vh",
    width: "100vw"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    onClick: function onClick() {
      return (0, _mnetUiBase.openConfirmAlert)({
        message: 'This is a message',
        onPrimaryClick: okClick
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "large",
    weight: 600
  }, "Open Confirm Box")));
};

(0, _react2.storiesOf)('Modal Pop-up', module).add('Confirm Box Without Title', function () {
  return /*#__PURE__*/_react["default"].createElement(ConfirmWithoutTitle, null);
});
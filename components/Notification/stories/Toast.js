"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Toast = function Toast() {
  var addToastDefault = function addToastDefault() {
    (0, _.addToast)({
      msg: 'I am default toast'
    });
  };

  var addToastCritical = function addToastCritical() {
    (0, _.addToast)({
      msg: 'I am critical error',
      type: 'critical'
    });
  };

  var addToastOk = function addToastOk() {
    (0, _.addToast)({
      msg: 'I am OK',
      type: 'ok'
    });
  };

  var addToastWarning = function addToastWarning() {
    (0, _.addToast)({
      msg: 'I am just a warning',
      type: 'warning'
    });
  };

  var addToastAutoClose = function addToastAutoClose() {
    (0, _.addToast)({
      msg: 'I am default toast',
      autoClose: false
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, /*#__PURE__*/_react["default"].createElement("strong", null, "Add Default")),
    onClick: addToastDefault,
    plain: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, /*#__PURE__*/_react["default"].createElement("strong", null, "Add Critical")),
    onClick: addToastCritical,
    plain: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, /*#__PURE__*/_react["default"].createElement("strong", null, "Add OK")),
    onClick: addToastOk,
    plain: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, /*#__PURE__*/_react["default"].createElement("strong", null, "Add Warning")),
    onClick: addToastWarning,
    plain: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, /*#__PURE__*/_react["default"].createElement("strong", null, "Prevent autoClose")),
    onClick: addToastAutoClose,
    plain: true
  })));
};

(0, _react2.storiesOf)('Notifications', module).add('Toast', function () {
  return /*#__PURE__*/_react["default"].createElement(Toast, null);
});
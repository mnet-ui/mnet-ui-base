"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SizedButton = function SizedButton() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "small",
    label: "Small"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "medium",
    label: "Medium"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Default"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "large",
    label: "Large"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    size: "small",
    label: "Small"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    size: "medium",
    label: "Medium"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    label: "Default"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    size: "large",
    label: "Large"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "small",
    label: "Small",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "medium",
    label: "Medium",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Default",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "large",
    label: "Large",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "small",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "medium",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    size: "large",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }))));
};

(0, _react2.storiesOf)('Button', module).add('Sizes', function () {
  return /*#__PURE__*/_react["default"].createElement(SizedButton, {
    active: true
  });
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormLayer = function FormLayer() {
  var _React$useState = _react["default"].useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var _React$useState2 = _react["default"].useState(''),
      select = _React$useState2[0],
      setSelect = _React$useState2[1];

  var onOpen = function onOpen() {
    return setOpen(true);
  };

  var onClose = function onClose() {
    return setOpen(undefined);
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
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    onClick: onOpen
  }), open && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Layer, {
    position: "right",
    full: "vertical",
    modal: true,
    onClickOutside: onClose,
    onEsc: onClose
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    as: "form",
    fill: "vertical",
    overflow: "auto",
    width: "medium",
    pad: "medium",
    onSubmit: onClose
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    flex: false,
    direction: "row",
    justify: "between"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 2,
    margin: "none"
  }, "Add"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Close, null),
    onClick: onClose
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    flex: "grow",
    overflow: "auto",
    pad: {
      vertical: 'medium'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "First"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, null)), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Second"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
    value: select,
    onSearch: function onSearch() {},
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setSelect(option);
    }
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "Third"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextArea, null))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    flex: false,
    as: "footer",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Submit",
    onClick: onClose,
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Layer', module).add('Form', function () {
  return /*#__PURE__*/_react["default"].createElement(FormLayer, null);
});
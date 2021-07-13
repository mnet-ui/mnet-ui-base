"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var positions = ['left', 'right', 'top', 'bottom', 'center'];

var TargetLayer = function TargetLayer() {
  var _React$useState = _react["default"].useState(),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var _React$useState2 = _react["default"].useState('small'),
      gutter = _React$useState2[0],
      setGutter = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(true),
      modal = _React$useState3[0],
      setModal = _React$useState3[1];

  var _React$useState4 = _react["default"].useState(positions[0]),
      position = _React$useState4[0],
      setPosition = _React$useState4[1];

  _react["default"].useEffect(function () {
    window.dispatchEvent(new Event('resize'));
    return undefined;
  }, [gutter]);

  var ref = _react["default"].useRef();

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
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    fill: true,
    columns: [gutter, 'flex', gutter],
    rows: [gutter, 'flex', gutter],
    areas: [{
      name: 'main',
      start: [1, 1],
      end: [1, 1]
    }]
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    ref: ref,
    gridArea: "main",
    fill: true,
    align: "center",
    justify: "center",
    gap: "medium",
    background: "brand"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    options: positions,
    value: position,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setPosition(option);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
    toggle: true,
    label: "modal",
    checked: modal,
    onChange: function onChange() {
      return setModal(!modal);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Open",
    onClick: onOpen
  }))), open && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Layer, {
    modal: modal,
    position: position,
    target: ref.current,
    onClickOutside: onClose,
    onEsc: onClose
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    gap: "small",
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Toggle gutter size",
    onClick: function onClick() {
      return setGutter(gutter === 'small' ? 'xsmall' : 'small');
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Close",
    onClick: onClose
  }))));
};

(0, _react2.storiesOf)('Layer', module).add('Target', function () {
  return /*#__PURE__*/_react["default"].createElement(TargetLayer, null);
});
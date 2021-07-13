"use strict";

exports.__esModule = true;
exports.modalIsLoading = exports.closeConfirmAlert = exports.openConfirmAlert = exports.ModalPopUp = void 0;

var _react = _interopRequireWildcard(require("react"));

var _eventEmitter = _interopRequireDefault(require("event-emitter"));

var _Box = require("../Box");

var _Layer = require("../Layer");

var _constants = require("./constants");

var _PopUpContainer = require("./PopUpContainer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var emitter = new _eventEmitter["default"]();

var ModalPopUp = function ModalPopUp() {
  var _useState = (0, _react.useState)(false),
      modalOpen = _useState[0],
      setModalOpen = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)({
    position: "center"
  }),
      position = _useState3[0],
      setPosition = _useState3[1];

  var _useState4 = (0, _react.useState)({
    title: '',
    message: '',
    body: undefined,
    onPrimaryClick: undefined,
    renderButton: undefined,
    closeOnOutSideClick: false,
    closeOnEscape: false
  }),
      popUpConfig = _useState4[0],
      setPopUpConfig = _useState4[1];

  var onClose = function onClose() {
    return setModalOpen(false);
  };

  emitter.on(_constants.OPEN_MODAL, function (config) {
    if (config.position) {
      setPosition(config.position); // eslint-disable-next-line no-param-reassign

      delete config.position;
    }

    setPopUpConfig(_extends({}, popUpConfig, config));
    setModalOpen(true);
  });
  emitter.on(_constants.CLOSE_MODAL, function () {
    return onClose();
  });
  emitter.on(_constants.MODAL_LOAD_STATE, function (value) {
    return setIsLoading(value);
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, modalOpen && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: "100vw",
    height: "100vh"
  }, /*#__PURE__*/_react["default"].createElement(_Layer.Layer, _extends({}, position, {
    onClickOutside: popUpConfig.closeOnOutSideClick ? onClose : null,
    onEsc: popUpConfig.closeOnEscape ? onClose : null
  }), /*#__PURE__*/_react["default"].createElement(_PopUpContainer.PopUpContainer, _extends({
    isLoading: isLoading,
    onClose: onClose
  }, popUpConfig)))));
};

exports.ModalPopUp = ModalPopUp;

var openConfirmAlert = function openConfirmAlert(config) {
  return emitter.emit(_constants.OPEN_MODAL, config);
};

exports.openConfirmAlert = openConfirmAlert;

var closeConfirmAlert = function closeConfirmAlert() {
  return emitter.emit(_constants.CLOSE_MODAL);
};

exports.closeConfirmAlert = closeConfirmAlert;

var modalIsLoading = function modalIsLoading(value) {
  return emitter.emit(_constants.MODAL_LOAD_STATE, value);
};

exports.modalIsLoading = modalIsLoading;
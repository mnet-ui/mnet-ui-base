function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import EventEmitter from 'event-emitter';
import { Box } from '../Box';
import { Layer } from '../Layer';
import { OPEN_MODAL, CLOSE_MODAL, MODAL_LOAD_STATE } from './constants';
import { PopUpContainer } from './PopUpContainer';
var emitter = new EventEmitter();

var ModalPopUp = function ModalPopUp() {
  var _useState = useState(false),
      modalOpen = _useState[0],
      setModalOpen = _useState[1];

  var _useState2 = useState(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = useState({
    title: '',
    message: '',
    body: undefined,
    onPrimaryClick: undefined,
    renderButton: undefined
  }),
      popUpConfig = _useState3[0],
      setPopUpConfig = _useState3[1];

  var onClose = function onClose() {
    return setModalOpen(false);
  };

  emitter.on(OPEN_MODAL, function (config) {
    setPopUpConfig(_extends({}, config));
    setModalOpen(true);
  });
  emitter.on(CLOSE_MODAL, function () {
    return onClose();
  });
  emitter.on(MODAL_LOAD_STATE, function (value) {
    return setIsLoading(value);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, modalOpen && /*#__PURE__*/React.createElement(Box, {
    width: "100vw",
    height: "100vh"
  }, /*#__PURE__*/React.createElement(Layer, {
    position: "center",
    onClickOutside: onClose,
    onEsc: onClose
  }, /*#__PURE__*/React.createElement(PopUpContainer, _extends({
    isLoading: isLoading,
    onClose: onClose
  }, popUpConfig)))));
};

var openConfirmAlert = function openConfirmAlert(config) {
  return emitter.emit(OPEN_MODAL, config);
};

var closeConfirmAlert = function closeConfirmAlert() {
  return emitter.emit(CLOSE_MODAL);
};

var modalIsLoading = function modalIsLoading(value) {
  return emitter.emit(MODAL_LOAD_STATE, value);
};

export { ModalPopUp, openConfirmAlert, closeConfirmAlert, modalIsLoading };
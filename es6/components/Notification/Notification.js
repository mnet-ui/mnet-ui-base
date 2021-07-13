function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useContext } from 'react';
import EventEmitter from 'event-emitter';
import { v1 as uuid } from 'uuid';
import { ThemeContext } from 'styled-components';
import { Layer } from '../Layer';
import { defaultProps } from '../../default-props';
import { Toast } from './Toast';
var emitter = new EventEmitter();
var timeoutId;
export var addNotification = function addNotification(type, config) {
  var id = uuid();
  emitter.emit('addNotification', id, type, _extends({
    autoClose: true
  }, config));
  return id;
};
export var addToast = function addToast(config) {
  return addNotification('toast', config);
};
export var removeNotification = function removeNotification(id) {
  emitter.emit('removeNotification', id);
};
export function Notification() {
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var _useState = useState([]),
      notifications = _useState[0],
      setNotifications = _useState[1];

  var deleteNotification = function deleteNotification(deleteId) {
    setNotifications(notifications.filter(function (_ref) {
      var id = _ref.id;
      return deleteId !== id;
    }));
  };

  var deleteLast = function deleteLast() {
    if (notifications.length) {
      var index = notifications.findIndex(function (_ref2) {
        var autoClose = _ref2.config.autoClose;
        return autoClose;
      });
      if (index >= 0) deleteNotification(notifications[index].id);
    }
  };

  var autoRemoveNotification = function autoRemoveNotification(timeout) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      return deleteLast();
    }, timeout);
  };

  emitter.on('removeNotification', function (id) {
    deleteNotification(id);
  });
  emitter.on('addNotification', function (id, type, config) {
    setNotifications([].concat(notifications, [{
      id: id,
      type: type,
      config: config
    }]));
  });

  if (!notifications.length) {
    return null;
  }

  if (notifications.some(function (_ref3) {
    var autoClose = _ref3.config.autoClose;
    return autoClose;
  })) {
    autoRemoveNotification(theme.notification.toast.timeout || 2000);
  }

  return /*#__PURE__*/React.createElement(Layer, {
    position: theme.notification.toast.position,
    modal: false,
    margin: {
      vertical: 'medium',
      horizontal: 'small'
    },
    onEsc: deleteLast,
    responsive: false,
    style: {
      zIndex: theme.notification.toast.zIndex,
      maxWidth: theme.notification.toast.width
    },
    plain: true
  }, notifications.map(function (_ref4) {
    var id = _ref4.id,
        _ref4$config = _ref4.config,
        msg = _ref4$config.msg,
        type = _ref4$config.type;
    return /*#__PURE__*/React.createElement(Toast, {
      id: id,
      msg: msg,
      type: type,
      onClose: deleteNotification
    });
  }));
}
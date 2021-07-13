"use strict";

exports.__esModule = true;
exports.Notification = Notification;
exports.removeNotification = exports.addToast = exports.addNotification = void 0;

var _react = _interopRequireWildcard(require("react"));

var _eventEmitter = _interopRequireDefault(require("event-emitter"));

var _uuid = require("uuid");

var _styledComponents = require("styled-components");

var _Layer = require("../Layer");

var _defaultProps = require("../../default-props");

var _Toast = require("./Toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var emitter = new _eventEmitter["default"]();
var timeoutId;

var addNotification = function addNotification(type, config) {
  var id = (0, _uuid.v1)();
  emitter.emit('addNotification', id, type, _extends({
    autoClose: true
  }, config));
  return id;
};

exports.addNotification = addNotification;

var addToast = function addToast(config) {
  return addNotification('toast', config);
};

exports.addToast = addToast;

var removeNotification = function removeNotification(id) {
  emitter.emit('removeNotification', id);
};

exports.removeNotification = removeNotification;

function Notification() {
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var _useState = (0, _react.useState)([]),
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

  return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
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
    return /*#__PURE__*/_react["default"].createElement(_Toast.Toast, {
      id: id,
      msg: msg,
      type: type,
      onClose: deleteNotification
    });
  }));
}
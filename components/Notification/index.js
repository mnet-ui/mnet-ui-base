"use strict";

exports.__esModule = true;

var _Notification = require("./Notification");

Object.keys(_Notification).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Notification[key]) return;
  exports[key] = _Notification[key];
});
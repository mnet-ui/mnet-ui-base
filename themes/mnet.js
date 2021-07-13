"use strict";

exports.__esModule = true;
exports.mnet = void 0;

var _styledComponents = require("styled-components");

var _object = require("../utils/object");

var p = 'https://fonts.gstatic.com/s/opensans/v17';
var mnet = (0, _object.deepFreeze)({
  global: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#1f2024'
      }
    },
    font: {
      family: "'Open Sans', Arial, sans-serif",
      face: "\n        @font-face {\n          font-family: 'Open Sans';\n          src:\n            font-display: swap,\n            local('Open Sans Regular'),\n            local('OpenSans-Regular'),\n            url(\"" + p + "//mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2\") format('woff2'),\n            unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n        }\n      "
    }
  },
  button: {
    extend: (0, _styledComponents.css)(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});
exports.mnet = mnet;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { normalizeColor } from "../../utils";

var getColor = function getColor(type, checked, disabled, theme) {
  var _theme$switch$type = theme["switch"][type],
      activeColor = _theme$switch$type.active,
      inactiveColor = _theme$switch$type.inactive,
      _theme$switch$type$di = _theme$switch$type.disabled,
      _theme$switch$type$di2 = _theme$switch$type$di.active,
      disabledActiveColor = _theme$switch$type$di2 === void 0 ? activeColor : _theme$switch$type$di2,
      _theme$switch$type$di3 = _theme$switch$type$di.inactive,
      disabledInactiveColor = _theme$switch$type$di3 === void 0 ? inactiveColor : _theme$switch$type$di3;

  if (disabled && checked) {
    return disabledActiveColor;
  }

  if (disabled && !checked) {
    return disabledInactiveColor;
  }

  if (!disabled && checked) {
    return activeColor;
  }

  return inactiveColor;
};

var getSwitchTheme = function getSwitchTheme() {
  return {
    radioButton: {
      extend: function extend(_ref) {
        var checked = _ref.checked,
            disabled = _ref.disabled,
            theme = _ref.theme;
        return _extends({
          backgroundColor: normalizeColor(getColor('background', checked, disabled, theme), theme),
          color: normalizeColor(getColor('text', checked, disabled, theme), theme),
          '&>div': {
            display: 'none'
          }
        }, theme["switch"]);
      }
    }
  };
};

export default getSwitchTheme;
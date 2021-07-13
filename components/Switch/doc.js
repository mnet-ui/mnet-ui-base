"use strict";

exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Switch) {
  var DocumentedSwitch = (0, _reactDesc.describe)(Switch).availableAt((0, _utils.getAvailableAtBadge)('Switch')).description('A control to select values, with customized radiobutton group.').usage("import { Switch } from 'mnet-ui-base';\n      <Switch />"); // We don't include svg due to a collision on the values property
  // .intrinsicElement('select');

  DocumentedSwitch.propTypes = _extends({}, _utils.genericProps, {
    disabled: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.string, _reactDesc.PropTypes.object]))]).description("Whether the entire select or individual options should be disabled.\n        An array of numbers indicates the indexes into 'options' of the\n        disabled options. An array of strings or objects work the same way\n        as the 'value' to indicate which options are disabled.").defaultValue(false),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.number]).description("The selected current value of the component"),
    options: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      label: _reactDesc.PropTypes.string,
      value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.number])
    })).description("The list of options for Switch"),
    onValueChange: _reactDesc.PropTypes.func.description("Change event is handled here")
  });
  return DocumentedSwitch;
};

exports.doc = doc;
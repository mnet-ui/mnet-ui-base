function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { genericProps, getAvailableAtBadge } from '../../utils';
export var doc = function doc(Switch) {
  var DocumentedSwitch = describe(Switch).availableAt(getAvailableAtBadge('Switch')).description('A control to select values, with customized radiobutton group.').usage("import { Switch } from 'mnet-ui-base';\n      <Switch />"); // We don't include svg due to a collision on the values property
  // .intrinsicElement('select');

  DocumentedSwitch.propTypes = _extends({}, genericProps, {
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]))]).description("Whether the entire select or individual options should be disabled.\n        An array of numbers indicates the indexes into 'options' of the\n        disabled options. An array of strings or objects work the same way\n        as the 'value' to indicate which options are disabled.").defaultValue(false),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).description("The selected current value of the component"),
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })).description("The list of options for Switch"),
    onValueChange: PropTypes.func.description("Change event is handled here")
  });
  return DocumentedSwitch;
};
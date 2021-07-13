function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { genericProps, getAvailableAtBadge } from '../../utils';
export var doc = function doc(Breadcrumb) {
  var DocumentedBreadcrumb = describe(Breadcrumb).availableAt(getAvailableAtBadge('Breadcrumb')).description('A control to select values, with customized radiobutton group.').usage("import { Breadcrumb } from 'mnet-ui-base';\n      <Breadcrumb />"); // We don't include svg due to a collision on the values property
  // .intrinsicElement('select');

  DocumentedBreadcrumb.propTypes = _extends({}, genericProps, {
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })])).description("Data for breadcrumb"),
    icon: PropTypes.node.description("Icon for separator between two breadcrumb item"),
    onValueSelect: PropTypes.func.description("On breadcrumb selection")
  });
  return DocumentedBreadcrumb;
};
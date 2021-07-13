"use strict";

exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Breadcrumb) {
  var DocumentedBreadcrumb = (0, _reactDesc.describe)(Breadcrumb).availableAt((0, _utils.getAvailableAtBadge)('Breadcrumb')).description('A control to select values, with customized radiobutton group.').usage("import { Breadcrumb } from 'mnet-ui-base';\n      <Breadcrumb />"); // We don't include svg due to a collision on the values property
  // .intrinsicElement('select');

  DocumentedBreadcrumb.propTypes = _extends({}, _utils.genericProps, {
    data: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      id: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.number]),
      label: _reactDesc.PropTypes.string
    })])).description("Data for breadcrumb"),
    icon: _reactDesc.PropTypes.node.description("Icon for separator between two breadcrumb item"),
    onValueSelect: _reactDesc.PropTypes.func.description("On breadcrumb selection")
  });
  return DocumentedBreadcrumb;
};

exports.doc = doc;
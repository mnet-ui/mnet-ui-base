"use strict";

exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = require("react-desc");

var doc = function doc(TableBody) {
  var DocumentedTableBody = (0, _reactDesc.describe)(TableBody).description('The body of a table.').usage("import { TableBody } from 'mnet-ui-base';\n<TableBody />").intrinsicElement('tbody');
  return DocumentedTableBody;
};

exports.doc = doc;
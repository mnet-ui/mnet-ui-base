import { describe } from 'react-desc';
export var doc = function doc(TableFooter) {
  var DocumentedTableFooter = describe(TableFooter).description('The footer of a table.').usage("import { TableFooter } from 'mnet-ui-base';\n<TableFooter />").intrinsicElement('tfoot');
  return DocumentedTableFooter;
};
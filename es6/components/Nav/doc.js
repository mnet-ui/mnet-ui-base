import { describe } from 'react-desc';
import { getAvailableAtBadge } from '../../utils';
export var doc = function doc(Nav) {
  var DocumentedNav = describe(Nav).availableAt(getAvailableAtBadge('Nav')).description('Is a Box container for navigation links').usage("import { Nav } from 'mnet-ui-base';\n<Nav />");
  return DocumentedNav;
};
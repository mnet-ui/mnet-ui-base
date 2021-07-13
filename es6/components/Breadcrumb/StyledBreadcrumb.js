import styled from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Text';
var StyledBreadcrumb = styled(Box).withConfig({
  displayName: "StyledBreadcrumb",
  componentId: "sc-1lly2wl-0"
})(["", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.breadcrumb && theme.breadcrumb.extend;
});
var StyledBreadcrumbItem = styled(Box).withConfig({
  displayName: "StyledBreadcrumb__StyledBreadcrumbItem",
  componentId: "sc-1lly2wl-1"
})(["", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.breadcrumb.item && theme.breadcrumb.item.extend;
});
var StyledBreadcrumbText = styled(Text).withConfig({
  displayName: "StyledBreadcrumb__StyledBreadcrumbText",
  componentId: "sc-1lly2wl-2"
})(["", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.breadcrumb.content && theme.breadcrumb.content.extend;
});
export { StyledBreadcrumb, StyledBreadcrumbItem, StyledBreadcrumbText };
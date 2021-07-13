import styled from 'styled-components';
import { Box } from '../Box';
export var List = styled(Box).withConfig({
  displayName: "StyledPagination__List",
  componentId: "sc-1g4tnoq-0"
})(["&.disabled{display:none;}&.active{cursor:default;background:", ";color:", ";}", ""], function (props) {
  return props.theme.pagination.active.background;
}, function (props) {
  return props.theme.pagination.active.color;
}, function (props) {
  return props.theme.pagination && props.theme.pagination.extend;
});
import styled from 'styled-components';
import { selectedStyle } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
var disabledStyle = "\n  opacity: 0.4;\n  cursor: not-allowed;\n  display: none;\n  box-shadow: none\n";
var CheckBoxWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__CheckBoxWrapper",
  componentId: "sc-1yaxkjp-0"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.extend;
});
var SelectedOption = styled(Box).withConfig({
  displayName: "StyledMultiSelect__SelectedOption",
  componentId: "sc-1yaxkjp-1"
})(["", ""], function (props) {
  return props.selected && props.removeSelected && disabledStyle;
});
var OptionsBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionsBox",
  componentId: "sc-1yaxkjp-2"
})(["position:relative;scroll-behavior:smooth;overflow:auto;&::-webkit-scrollbar{width:1.2em;}&::-webkit-scrollbar-thumb{background-color:#E0E0E0;border:.4em solid #FFF;border-radius:3.5px;}"]);
var OptionLabel = styled(Text).withConfig({
  displayName: "StyledMultiSelect__OptionLabel",
  componentId: "sc-1yaxkjp-3"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips && props.theme.multiselect.chips.label && props.theme.multiselect.chips.label.extend;
});
var SelectOption = styled(Button).withConfig({
  displayName: "StyledMultiSelect__SelectOption",
  componentId: "sc-1yaxkjp-4"
})(["display:block;width:100%;background:", ";"], function (props) {
  return props.active ? props.theme.select.activeColor : 'transparent';
});
var OptionBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionBox",
  componentId: "sc-1yaxkjp-5"
})(["", ""], function (props) {
  return props.selected && selectedStyle;
});
var CheckBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__CheckBox",
  componentId: "sc-1yaxkjp-6"
})(["", " ", ";"], function (props) {
  return props.background && "background: " + props.background + ";";
}, function (props) {
  return props.theme.multiselect.checkbox.check;
});
var OptionWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionWrapper",
  componentId: "sc-1yaxkjp-7"
})(["position:relative;scroll-behavior:smooth;overflow:auto;", ";&::-webkit-scrollbar{width:1.2em;}&::-webkit-scrollbar-thumb{background-color:#E0E0E0;border:.4em solid #FFF;border-radius:3.5px;}"], function (props) {
  return props.theme.multiselect.chips.wrapper.extend;
});
var OptionText = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionText",
  componentId: "sc-1yaxkjp-8"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.option.extend;
});
var TextAreaWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__TextAreaWrapper",
  componentId: "sc-1yaxkjp-9"
})(["", ";"], function (props) {
  return props.theme.multiselect.custom.textAreaWrap.extend;
});
var LabelText = styled(Text).withConfig({
  displayName: "StyledMultiSelect__LabelText",
  componentId: "sc-1yaxkjp-10"
})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:", ";-webkit-box-orient:vertical;"], function (props) {
  return props.rowCount;
});
export { CheckBoxWrapper, OptionsBox, SelectOption, OptionBox, CheckBox, OptionWrapper, OptionLabel, OptionText, SelectedOption, TextAreaWrapper, LabelText };
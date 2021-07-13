"use strict";

exports.__esModule = true;
exports.LabelText = exports.TextAreaWrapper = exports.SelectedOption = exports.OptionText = exports.OptionLabel = exports.OptionWrapper = exports.CheckBox = exports.OptionBox = exports.SelectOption = exports.OptionsBox = exports.CheckBoxWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _Box = require("../Box");

var _Button = require("../Button");

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var disabledStyle = "\n  opacity: 0.4;\n  cursor: not-allowed;\n  display: none;\n  box-shadow: none\n";
var CheckBoxWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__CheckBoxWrapper",
  componentId: "sc-1yaxkjp-0"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.extend;
});
exports.CheckBoxWrapper = CheckBoxWrapper;
var SelectedOption = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__SelectedOption",
  componentId: "sc-1yaxkjp-1"
})(["", ""], function (props) {
  return props.selected && props.removeSelected && disabledStyle;
});
exports.SelectedOption = SelectedOption;
var OptionsBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionsBox",
  componentId: "sc-1yaxkjp-2"
})(["position:relative;scroll-behavior:smooth;overflow:auto;&::-webkit-scrollbar{width:1.2em;}&::-webkit-scrollbar-thumb{background-color:#E0E0E0;border:.4em solid #FFF;border-radius:3.5px;}"]);
exports.OptionsBox = OptionsBox;
var OptionLabel = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "StyledMultiSelect__OptionLabel",
  componentId: "sc-1yaxkjp-3"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips && props.theme.multiselect.chips.label && props.theme.multiselect.chips.label.extend;
});
exports.OptionLabel = OptionLabel;
var SelectOption = (0, _styledComponents["default"])(_Button.Button).withConfig({
  displayName: "StyledMultiSelect__SelectOption",
  componentId: "sc-1yaxkjp-4"
})(["display:block;width:100%;background:", ";"], function (props) {
  return props.active ? props.theme.select.activeColor : 'transparent';
});
exports.SelectOption = SelectOption;
var OptionBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionBox",
  componentId: "sc-1yaxkjp-5"
})(["", ""], function (props) {
  return props.selected && _utils.selectedStyle;
});
exports.OptionBox = OptionBox;
var CheckBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__CheckBox",
  componentId: "sc-1yaxkjp-6"
})(["", " ", ";"], function (props) {
  return props.background && "background: " + props.background + ";";
}, function (props) {
  return props.theme.multiselect.checkbox.check;
});
exports.CheckBox = CheckBox;
var OptionWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionWrapper",
  componentId: "sc-1yaxkjp-7"
})(["position:relative;scroll-behavior:smooth;overflow:auto;", ";&::-webkit-scrollbar{width:1.2em;}&::-webkit-scrollbar-thumb{background-color:#E0E0E0;border:.4em solid #FFF;border-radius:3.5px;}"], function (props) {
  return props.theme.multiselect.chips.wrapper.extend;
});
exports.OptionWrapper = OptionWrapper;
var OptionText = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionText",
  componentId: "sc-1yaxkjp-8"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.option.extend;
});
exports.OptionText = OptionText;
var TextAreaWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__TextAreaWrapper",
  componentId: "sc-1yaxkjp-9"
})(["", ";"], function (props) {
  return props.theme.multiselect.custom.textAreaWrap.extend;
});
exports.TextAreaWrapper = TextAreaWrapper;
var LabelText = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "StyledMultiSelect__LabelText",
  componentId: "sc-1yaxkjp-10"
})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:", ";-webkit-box-orient:vertical;"], function (props) {
  return props.rowCount;
});
exports.LabelText = LabelText;
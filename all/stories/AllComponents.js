"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _base = require("mnet-ui-base/themes/base");

var _utils = require("mnet-ui-base/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { neo } from 'mnet-ui-base-theme-neo';
// import { hb } from 'mnet-ui-base-theme-hb';
// import { cdp } from 'mnet-ui-base-theme-cdp';
var themes = {
  // hb,
  // neo,
  // cdp,
  dark: _themes.dark
};

var Components = function Components() {
  var _useState = (0, _react.useState)(16),
      baseSize = _useState[0],
      setBaseSize = _useState[1];

  var _useState2 = (0, _react.useState)(true),
      checkBox = _useState2[0],
      setCheckBox = _useState2[1];

  var _useState3 = (0, _react.useState)('RadioButton 1'),
      radioButton = _useState3[0],
      setRadioButton = _useState3[1];

  var _useState4 = (0, _react.useState)([1, 2]),
      rangeSelector = _useState4[0],
      setRangeSelector = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      themeMode = _useState5[0],
      setThemeMode = _useState5[1];

  var _useState6 = (0, _react.useState)('mnet'),
      themeName = _useState6[0],
      setThemeName = _useState6[1];

  var _useState7 = (0, _react.useState)(undefined),
      background = _useState7[0],
      setBackground = _useState7[1];

  var _useState8 = (0, _react.useState)(0),
      tabIndex = _useState8[0],
      setTabIndex = _useState8[1];

  var theme = (0, _react.useMemo)(function () {
    return (0, _utils.deepMerge)((0, _base.generate)(baseSize), themes[themeName]);
  }, [baseSize, themeName]);
  var themeCanMode = (0, _react.useMemo)(function () {
    return theme && theme.global.colors.background && theme.global.colors.background.dark;
  }, [theme]);
  var content = [/*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    key: "type",
    align: "start",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    margin: {
      top: 'none'
    }
  }, "Heading"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Paragraph, null, "Paragraph"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Text"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
    href: ""
  }, "Anchor"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Menu, {
    label: "Menu",
    items: [{
      label: 'One',
      onClick: function onClick() {}
    }, {
      label: 'Two'
    }]
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Button",
    onClick: function onClick() {}
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    plain: true,
    onClick: function onClick() {}
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "plain button"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    key: "input",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    placeholder: "Select",
    options: ['One', 'Two'],
    onChange: function onChange() {}
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
    name: "check",
    checked: checkBox,
    label: "CheckBox",
    onChange: function onChange(event) {
      return setCheckBox(event.target.checked);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
    name: "toggle",
    toggle: true,
    checked: checkBox,
    label: "CheckBox toggle",
    onChange: function onChange(event) {
      return setCheckBox(event.target.checked);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RadioButtonGroup, {
    name: "radio",
    options: ['RadioButton 1', 'RadioButton 2'],
    value: radioButton,
    onChange: function onChange(event) {
      return setRadioButton(event.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    placeholder: "TextInput"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextArea, {
    placeholder: "TextArea"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RangeInput, {
    value: 24,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Stack, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    justify: "between"
  }, [0, 1, 2, 3].map(function (value) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: value,
      pad: "small"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
      style: {
        fontFamily: 'monospace'
      }
    }, value));
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RangeSelector, {
    direction: "horizontal",
    invert: false,
    min: 0,
    max: 3,
    size: "style={{ width: '100vw', height: '100vh', overflow: 'auto' }}",
    round: "small",
    values: rangeSelector,
    onChange: function onChange(values) {
      return setRangeSelector(values);
    }
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    label: "FormField"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    placeholder: "TextInput"
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    key: "time",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Calendar, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Clock, {
    type: "digital",
    className: "chromatic-ignore"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Clock, {
    className: "chromatic-ignore"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    key: "dataTable",
    alignSelf: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.DataTable, {
    columns: [{
      property: 'name',
      header: 'Name'
    }, {
      property: 'color',
      header: 'Color'
    }],
    data: [{
      name: 'Alan',
      color: 'blue'
    }, {
      name: 'Chris',
      color: 'purple'
    }, {
      name: 'Eric',
      color: 'orange'
    }],
    sortable: true
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    key: "accordion"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Accordion, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.AccordionPanel, {
    label: "Accordion Panel 1"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Accordion panel 1 content"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.AccordionPanel, {
    label: "Accordion Panel 2"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Accordion panel 2 content"))))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    key: "tabs"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tabs, {
    activeIndex: tabIndex,
    onActive: function onActive(index) {
      return setTabIndex(index);
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 1"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Tab 1 content"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 2"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Tab 2 content")))))];
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row-responsive",
    gap: "medium",
    justify: "end",
    align: "center",
    margin: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    basis: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    plain: true,
    size: "small",
    options: Object.keys(themes).map(function (val) {
      return val.toUpperCase();
    }),
    value: themeName,
    onChange: function onChange(event) {
      return setThemeName(event.option.toLowerCase());
    }
  })), themeCanMode && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
    label: "dark",
    checked: themeMode === 'dark',
    onChange: function onChange() {
      return setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }
  }), !themeCanMode && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    basis: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    plain: true,
    placeholder: "background",
    size: "small",
    options: ['default', 'dark-1', 'light-1'],
    value: background,
    onChange: function onChange(event) {
      return setBackground(event.option);
    }
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    basis: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RangeInput, {
    min: 16,
    max: 36,
    step: 2,
    value: baseSize,
    onChange: function onChange(event) {
      return setBaseSize(parseInt(event.target.value, 10));
    }
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "small"
  }, baseSize + "px base spacing"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: theme,
    themeMode: themeMode,
    style: {
      flex: '1 1'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    pad: "medium",
    background: background || theme.global.colors.background,
    overflow: "auto"
  }, _mnetUiBase.Grid.available ? /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Grid, {
    columns: "small",
    gap: "medium"
  }, content) : /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    wrap: true,
    align: "start",
    gap: "large"
  }, content))));
};

(0, _react2.storiesOf)('All', module).add('All', function () {
  return /*#__PURE__*/_react["default"].createElement(Components, null);
});
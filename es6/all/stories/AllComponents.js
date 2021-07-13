import React, { useMemo, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion, AccordionPanel, Anchor, Box, Button, Calendar, CheckBox, Clock, DataTable, FormField, Grid, Heading, Menu, Paragraph, RadioButtonGroup, RangeInput, RangeSelector, Select, Stack, Tab, Tabs, Text, TextArea, TextInput, MnetUIBase } from 'mnet-ui-base';
import { mnet, dark } from 'mnet-ui-base/themes';
import { generate } from 'mnet-ui-base/themes/base';
import { deepMerge } from 'mnet-ui-base/utils'; // import { neo } from 'mnet-ui-base-theme-neo';
// import { hb } from 'mnet-ui-base-theme-hb';
// import { cdp } from 'mnet-ui-base-theme-cdp';

var themes = {
  // hb,
  // neo,
  // cdp,
  dark: dark
};

var Components = function Components() {
  var _useState = useState(16),
      baseSize = _useState[0],
      setBaseSize = _useState[1];

  var _useState2 = useState(true),
      checkBox = _useState2[0],
      setCheckBox = _useState2[1];

  var _useState3 = useState('RadioButton 1'),
      radioButton = _useState3[0],
      setRadioButton = _useState3[1];

  var _useState4 = useState([1, 2]),
      rangeSelector = _useState4[0],
      setRangeSelector = _useState4[1];

  var _useState5 = useState(),
      themeMode = _useState5[0],
      setThemeMode = _useState5[1];

  var _useState6 = useState('mnet'),
      themeName = _useState6[0],
      setThemeName = _useState6[1];

  var _useState7 = useState(undefined),
      background = _useState7[0],
      setBackground = _useState7[1];

  var _useState8 = useState(0),
      tabIndex = _useState8[0],
      setTabIndex = _useState8[1];

  var theme = useMemo(function () {
    return deepMerge(generate(baseSize), themes[themeName]);
  }, [baseSize, themeName]);
  var themeCanMode = useMemo(function () {
    return theme && theme.global.colors.background && theme.global.colors.background.dark;
  }, [theme]);
  var content = [/*#__PURE__*/React.createElement(Box, {
    key: "type",
    align: "start",
    gap: "small"
  }, /*#__PURE__*/React.createElement(Heading, {
    margin: {
      top: 'none'
    }
  }, "Heading"), /*#__PURE__*/React.createElement(Paragraph, null, "Paragraph"), /*#__PURE__*/React.createElement(Text, null, "Text"), /*#__PURE__*/React.createElement(Anchor, {
    href: ""
  }, "Anchor"), /*#__PURE__*/React.createElement(Menu, {
    label: "Menu",
    items: [{
      label: 'One',
      onClick: function onClick() {}
    }, {
      label: 'Two'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    label: "Button",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(Button, {
    plain: true,
    onClick: function onClick() {}
  }, /*#__PURE__*/React.createElement(Text, null, "plain button"))), /*#__PURE__*/React.createElement(Box, {
    key: "input",
    gap: "small"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select",
    options: ['One', 'Two'],
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement(CheckBox, {
    name: "check",
    checked: checkBox,
    label: "CheckBox",
    onChange: function onChange(event) {
      return setCheckBox(event.target.checked);
    }
  }), /*#__PURE__*/React.createElement(CheckBox, {
    name: "toggle",
    toggle: true,
    checked: checkBox,
    label: "CheckBox toggle",
    onChange: function onChange(event) {
      return setCheckBox(event.target.checked);
    }
  }), /*#__PURE__*/React.createElement(RadioButtonGroup, {
    name: "radio",
    options: ['RadioButton 1', 'RadioButton 2'],
    value: radioButton,
    onChange: function onChange(event) {
      return setRadioButton(event.target.value);
    }
  }), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "TextInput"
  }), /*#__PURE__*/React.createElement(TextArea, {
    placeholder: "TextArea"
  }), /*#__PURE__*/React.createElement(RangeInput, {
    value: 24,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    justify: "between"
  }, [0, 1, 2, 3].map(function (value) {
    return /*#__PURE__*/React.createElement(Box, {
      key: value,
      pad: "small"
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        fontFamily: 'monospace'
      }
    }, value));
  })), /*#__PURE__*/React.createElement(RangeSelector, {
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
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "FormField"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "TextInput"
  }))), /*#__PURE__*/React.createElement(Box, {
    key: "time",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(Calendar, {
    size: "small"
  }), /*#__PURE__*/React.createElement(Clock, {
    type: "digital",
    className: "chromatic-ignore"
  }), /*#__PURE__*/React.createElement(Clock, {
    className: "chromatic-ignore"
  })), /*#__PURE__*/React.createElement(Box, {
    key: "dataTable",
    alignSelf: "start"
  }, /*#__PURE__*/React.createElement(DataTable, {
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
  })), /*#__PURE__*/React.createElement(Box, {
    key: "accordion"
  }, /*#__PURE__*/React.createElement(Accordion, null, /*#__PURE__*/React.createElement(AccordionPanel, {
    label: "Accordion Panel 1"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "small"
  }, /*#__PURE__*/React.createElement(Text, null, "Accordion panel 1 content"))), /*#__PURE__*/React.createElement(AccordionPanel, {
    label: "Accordion Panel 2"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "small"
  }, /*#__PURE__*/React.createElement(Text, null, "Accordion panel 2 content"))))), /*#__PURE__*/React.createElement(Box, {
    key: "tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeIndex: tabIndex,
    onActive: function onActive(index) {
      return setTabIndex(index);
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    title: "Tab 1"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "small"
  }, /*#__PURE__*/React.createElement(Text, null, "Tab 1 content"))), /*#__PURE__*/React.createElement(Tab, {
    title: "Tab 2"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "small"
  }, /*#__PURE__*/React.createElement(Text, null, "Tab 2 content")))))];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: mnet,
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row-responsive",
    gap: "medium",
    justify: "end",
    align: "center",
    margin: "small"
  }, /*#__PURE__*/React.createElement(Box, {
    basis: "small"
  }, /*#__PURE__*/React.createElement(Select, {
    plain: true,
    size: "small",
    options: Object.keys(themes).map(function (val) {
      return val.toUpperCase();
    }),
    value: themeName,
    onChange: function onChange(event) {
      return setThemeName(event.option.toLowerCase());
    }
  })), themeCanMode && /*#__PURE__*/React.createElement(CheckBox, {
    label: "dark",
    checked: themeMode === 'dark',
    onChange: function onChange() {
      return setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }
  }), !themeCanMode && /*#__PURE__*/React.createElement(Box, {
    basis: "small"
  }, /*#__PURE__*/React.createElement(Select, {
    plain: true,
    placeholder: "background",
    size: "small",
    options: ['default', 'dark-1', 'light-1'],
    value: background,
    onChange: function onChange(event) {
      return setBackground(event.option);
    }
  })), /*#__PURE__*/React.createElement(Box, {
    basis: "small"
  }, /*#__PURE__*/React.createElement(RangeInput, {
    min: 16,
    max: 36,
    step: 2,
    value: baseSize,
    onChange: function onChange(event) {
      return setBaseSize(parseInt(event.target.value, 10));
    }
  })), /*#__PURE__*/React.createElement(Text, {
    size: "small"
  }, baseSize + "px base spacing"))), /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: theme,
    themeMode: themeMode,
    style: {
      flex: '1 1'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    pad: "medium",
    background: background || theme.global.colors.background,
    overflow: "auto"
  }, Grid.available ? /*#__PURE__*/React.createElement(Grid, {
    columns: "small",
    gap: "medium"
  }, content) : /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    wrap: true,
    align: "start",
    gap: "large"
  }, content))));
};

storiesOf('All', module).add('All', function () {
  return /*#__PURE__*/React.createElement(Components, null);
});
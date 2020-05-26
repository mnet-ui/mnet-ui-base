"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
  var _React$useState = _react["default"].useState(''),
      name = _React$useState[0],
      setName = _React$useState[1];

  var _React$useState2 = _react["default"].useState(''),
      email = _React$useState2[0],
      setEmail = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
      subscribe = _React$useState3[0],
      setSubscribe = _React$useState3[1];

  var _React$useState4 = _react["default"].useState(''),
      ampm = _React$useState4[0],
      setAmpm = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(''),
      size = _React$useState5[0],
      setSize = _React$useState5[1];

  var _React$useState6 = _react["default"].useState(''),
      comments = _React$useState6[0],
      setComments = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(''),
      age = _React$useState7[0],
      setAge = _React$useState7[1];

  _react["default"].useEffect(function () {
    setName('initial');
    setEmail('initial@my.com');
    setSubscribe(true);
    setAmpm('evening');
    setSize('large');
    setComments('initial');
    setAge(60);
  }, []);

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Form, {
    onChange: function onChange(value) {
      return console.log('Change', value);
    },
    onReset: function onReset() {
      setName('');
      setEmail('');
      setSubscribe(false);
      setAmpm('');
      setSize('');
      setComments('');
      setAge('');
    },
    onSubmit: function onSubmit(event) {
      return console.log('Submit', event.value, event.touched);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name"
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    name: "name",
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    }
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Email",
    name: "email",
    required: true
  }, _react["default"].createElement(_mnetUiBase.MaskedInput, {
    name: "email",
    mask: [{
      regexp: /^[\w\-_.]+$/,
      placeholder: 'example'
    }, {
      fixed: '@'
    }, {
      regexp: /^[\w]+$/,
      placeholder: 'my'
    }, {
      fixed: '.'
    }, {
      regexp: /^[\w]+$/,
      placeholder: 'com'
    }],
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    }
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    name: "subscribe"
  }, _react["default"].createElement(_mnetUiBase.CheckBox, {
    name: "subscribe",
    label: "Subscribe?",
    checked: subscribe,
    onChange: function onChange(event) {
      return setSubscribe(event.target.checked);
    }
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    name: "ampm"
  }, _react["default"].createElement(_mnetUiBase.RadioButtonGroup, {
    name: "ampm",
    options: ['morning', 'evening'],
    value: ampm,
    onChange: function onChange(event) {
      return setAmpm(event.target.value);
    }
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Size",
    name: "size"
  }, _react["default"].createElement(_mnetUiBase.Select, {
    name: "size",
    options: ['small', 'medium', 'large'],
    value: size,
    onChange: function onChange(event) {
      return setSize(event.option);
    }
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Comments",
    name: "comments"
  }, _react["default"].createElement(_mnetUiBase.TextArea, {
    name: "comments",
    value: comments,
    onChange: function onChange(event) {
      return setComments(event.target.value);
    }
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Age",
    name: "age",
    pad: true
  }, _react["default"].createElement(_mnetUiBase.RangeInput, {
    name: "age",
    min: 15,
    max: 75,
    value: age,
    onChange: function onChange(event) {
      return setAge(event.target.value);
    }
  })), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    justify: "between",
    margin: {
      top: 'medium'
    }
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "reset",
    label: "Reset"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('Controlled Input lazy', function () {
  return _react["default"].createElement(Example, null);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("jest-styled-components");

var _MnetUIBase = require("../../MnetUIBase");

var _ = require("..");

var _TextInput = require("../../TextInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomFormField = (0, _styledComponents["default"])(_.FormField).withConfig({
  displayName: "FormField-test__CustomFormField",
  componentId: "sc-8onemw-0"
})(["font-size:40px;"]);
test('renders', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, null), _react["default"].createElement(_.FormField, null, _react["default"].createElement(_TextInput.TextInput, null))));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders label', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, {
    label: "test label"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders help', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, {
    help: "test help"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders error', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, {
    error: "test error"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders htmlFor', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, {
    htmlFor: "test-id"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders custom margin', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, {
    margin: "medium"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('forces empty margin', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, {
    margin: "none"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders pad', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(_.FormField, {
    pad: true
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders abut correctly', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, {
    theme: {
      formField: {
        border: {
          color: 'border',
          error: {
            color: {
              dark: 'white',
              light: 'status-critical'
            }
          },
          size: 'large',
          position: 'outer',
          side: 'all'
        },
        margin: {
          bottom: 'small'
        }
      }
    }
  }, _react["default"].createElement(_.FormField, {
    htmlFor: "test-id"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders abut with forced margin', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, {
    theme: {
      formField: {
        border: {
          color: 'border',
          error: {
            color: {
              dark: 'white',
              light: 'status-critical'
            }
          },
          size: 'large',
          position: 'outer',
          side: 'all'
        },
        margin: {
          bottom: 'small'
        }
      }
    }
  }, _react["default"].createElement(_.FormField, {
    margin: "medium",
    htmlFor: "test-id"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders custom formfield', function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_MnetUIBase.MnetUIBase, null, _react["default"].createElement(CustomFormField, {
    htmlFor: "test-id"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
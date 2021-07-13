"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var darks = [false, true];
var kinds = [{
  name: 'default',
  props: {}
}, {
  name: 'primary',
  props: {
    primary: true
  }
}, {
  name: 'secondary',
  props: {
    secondary: true
  }
}];
var states = [{}, {
  active: true
}, {
  disabled: true
}, {
  color: 'teal'
}, {
  color: '#9999ff'
}, {
  color: '#333399'
}, {
  hoverIndicator: 'teal'
}];
var contents = [{
  icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.User, null)
}, {
  label: 'label'
}, {
  icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.User, null),
  label: 'label'
}, {
  plain: true,
  children: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xsmall"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    color: "orange"
  }, "label"))
}];

var Example = function Example() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "medium"
  }, kinds.map(function (kind) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: kind.name,
      flex: false
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
      level: 3,
      size: "small"
    }, kind.name), states.map(function (state, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_mnetUiBase.Box, {
          key: index,
          direction: "row",
          align: "center"
        }, darks.map(function (dark) {
          return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
            key: dark,
            direction: dark ? 'row-reverse' : 'row',
            align: "center",
            gap: "small",
            background: {
              color: 'background',
              dark: dark
            },
            pad: "small"
          }, contents.map(function (content, index2) {
            return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button // eslint-disable-next-line react/no-array-index-key
            , _extends({
              key: index2
            }, kind.props, content, state));
          }));
        }))
      );
    }));
  }))));
};

(0, _react2.storiesOf)('Button', module).add('Kind', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});
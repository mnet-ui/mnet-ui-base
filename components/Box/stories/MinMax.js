"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MinMaxSizesBox = function MinMaxSizesBox() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max-height=small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max-height=small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max-height=small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max-height=small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, Array(20).fill().map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement(_mnetUiBase.Text, {
        key: i
      }, "Small (" + i + ")")
    );
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      max: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, Array(20).fill().map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement(_mnetUiBase.Text, {
        key: i
      }, "Small (" + i + ")")
    );
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      min: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "min-height=100px")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "min-height=small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "min-height=small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "min-height=small"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "min-height=small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, Array(20).fill().map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement(_mnetUiBase.Text, {
        key: i
      }, "Small (" + i + ")")
    );
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max-width=small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max-width=small, max-width=small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      max: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "max-width=100px, max-width=100px"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      min: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "100px")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "min-width=small")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "min-width=small, min-width=small")))));
};

(0, _react2.storiesOf)('Box', module).add('Min/Max sizes', function () {
  return /*#__PURE__*/_react["default"].createElement(MinMaxSizesBox, null);
});
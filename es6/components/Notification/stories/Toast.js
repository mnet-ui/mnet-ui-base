import React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from "grommet-icons/es6/icons/Add";
import { Box, Button, Text } from 'mnet-ui-base';
import { addToast } from '..';

var Toast = function Toast() {
  var addToastDefault = function addToastDefault() {
    addToast({
      msg: 'I am default toast'
    });
  };

  var addToastCritical = function addToastCritical() {
    addToast({
      msg: 'I am critical error',
      type: 'critical'
    });
  };

  var addToastOk = function addToastOk() {
    addToast({
      msg: 'I am OK',
      type: 'ok'
    });
  };

  var addToastWarning = function addToastWarning() {
    addToast({
      msg: 'I am just a warning',
      type: 'warning'
    });
  };

  var addToastAutoClose = function addToastAutoClose() {
    addToast({
      msg: 'I am default toast',
      autoClose: false
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("strong", null, "Add Default")),
    onClick: addToastDefault,
    plain: true
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("strong", null, "Add Critical")),
    onClick: addToastCritical,
    plain: true
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("strong", null, "Add OK")),
    onClick: addToastOk,
    plain: true
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("strong", null, "Add Warning")),
    onClick: addToastWarning,
    plain: true
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("strong", null, "Prevent autoClose")),
    onClick: addToastAutoClose,
    plain: true
  })));
};

storiesOf('Notifications', module).add('Toast', function () {
  return /*#__PURE__*/React.createElement(Toast, null);
});
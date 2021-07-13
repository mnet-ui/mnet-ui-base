"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

require("@testing-library/jest-dom/extend-expect");

var _react2 = require("@testing-library/react");

var _portal = require("../../../utils/portal");

var _ModalPopUp = require("../ModalPopUp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ModalPopUp', function () {
  var openButtonText = 'TEST OPEN MODAL';
  var title = 'TEST MODAL';
  var message = 'TEST MESSAGE CONTENT';
  var okLabel = 'OK';
  var cancelLabel = 'Cancel';
  var clicks = {
    okButtonClick: jest.fn()
  };
  var okButtonClickSpy = jest.spyOn(clicks, 'okButtonClick');

  var getPopUpPayload = function getPopUpPayload(type) {
    /*
     * Type Values
     * 
     * 0 - basic
     * 1 - without title
     * 2 - custom message
     * 3 - custom body
     * 4 - without onPrimaryClick
     * 
     */
    // eslint-disable-next-line default-case
    switch (type) {
      case 0:
        return {
          title: title,
          message: message,
          onPrimaryClick: clicks.okButtonClick
        };

      case 1:
        return {
          message: message,
          onPrimaryClick: clicks.okButtonClick
        };

      case 2:
        return {
          title: /*#__PURE__*/_react["default"].createElement("span", null, title),
          message: /*#__PURE__*/_react["default"].createElement("span", null, message),
          renderButton: /*#__PURE__*/_react["default"].createElement("button", {
            type: "button",
            onClick: clicks.okButtonClick
          }, okLabel)
        };

      case 3:
        return {
          title: /*#__PURE__*/_react["default"].createElement("span", null, title),
          body: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, message)),
          renderButton: /*#__PURE__*/_react["default"].createElement("button", {
            type: "button",
            onClick: clicks.okButtonClick
          }, okLabel)
        };

      case 4:
        return {
          title: title,
          message: message
        };
    }

    ;
    return null;
  };

  beforeEach(_portal.createPortal);
  afterEach(function () {
    jest.clearAllMocks();
    (0, _react2.cleanup)();
  });
  /* Snapshot Tests */

  it('Before opening pop-up', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    })),
        baseElement = _render.baseElement;

    expect(baseElement).toMatchSnapshot();
  });
  it('Basic', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(0));
      }
    }, openButtonText))),
        baseElement = _render2.baseElement,
        getByText = _render2.getByText;

    _react2.fireEvent.click(getByText(openButtonText));

    expect(baseElement).toMatchSnapshot();
  });
  it('Without Title', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(1));
      }
    }, openButtonText))),
        baseElement = _render3.baseElement,
        getByText = _render3.getByText;

    _react2.fireEvent.click(getByText(openButtonText));

    expect(baseElement).toMatchSnapshot();
  });
  it('Custom render elements', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(2));
      }
    }, openButtonText))),
        baseElement = _render4.baseElement,
        getByText = _render4.getByText;

    _react2.fireEvent.click(getByText(openButtonText));

    expect(baseElement).toMatchSnapshot();
  });
  it('Custom render elements - custom body', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(3));
      }
    }, openButtonText))),
        baseElement = _render5.baseElement,
        getByText = _render5.getByText;

    _react2.fireEvent.click(getByText(openButtonText));

    expect(baseElement).toMatchSnapshot();
  });
  /* Unit Test Cases */

  it('Pop-up open and close', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(0));
      }
    }, openButtonText), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: _ModalPopUp.closeConfirmAlert
    }, cancelLabel, "_modal_close"))),
        getByText = _render6.getByText,
        queryByRole = _render6.queryByRole;

    expect(queryByRole('dialog', {
      name: 'modal-pop-up'
    })).toBeNull();

    _react2.fireEvent.click(getByText(openButtonText));

    expect(queryByRole('dialog', {
      name: 'modal-pop-up'
    })).toBeInTheDocument();

    _react2.fireEvent.click(getByText(cancelLabel + "_modal_close"));

    (0, _react2.waitForElementToBeRemoved)(function () {
      return queryByRole('dialog', {
        name: 'modal-pop-up'
      });
    }).then(function () {
      expect(queryByRole('dialog', {
        name: 'modal-pop-up'
      })).toBeNull();
    });
  });
  it('Basic - OK Click', function () {
    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(0));
      }
    }, openButtonText))),
        getByText = _render7.getByText;

    _react2.fireEvent.click(getByText(openButtonText));

    _react2.fireEvent.click(getByText(okLabel));

    expect(okButtonClickSpy).toHaveBeenCalledTimes(1);
  });
  it('Custom elements - OK Click', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(0));
      }
    }, openButtonText))),
        getByText = _render8.getByText;

    _react2.fireEvent.click(getByText(openButtonText));

    _react2.fireEvent.click(getByText(okLabel));

    expect(okButtonClickSpy).toHaveBeenCalledTimes(1);
  });
  it('Basic - OK Click - without onPrimaryClick option', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(4));
      }
    }, openButtonText))),
        getByText = _render9.getByText,
        queryByRole = _render9.queryByRole;

    _react2.fireEvent.click(getByText(openButtonText));

    _react2.fireEvent.click(getByText(okLabel));

    (0, _react2.waitForElementToBeRemoved)(function () {
      return queryByRole('dialog', {
        name: 'modal-pop-up'
      });
    }).then(function () {
      expect(queryByRole('dialog', {
        name: 'modal-pop-up'
      })).toBeNull();
    });
  });
  it('Cancel click', function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(0));
      }
    }, openButtonText))),
        getByText = _render10.getByText,
        queryByRole = _render10.queryByRole;

    _react2.fireEvent.click(getByText(openButtonText));

    _react2.fireEvent.click(getByText(cancelLabel));

    (0, _react2.waitForElementToBeRemoved)(function () {
      return queryByRole('dialog', {
        name: 'modal-pop-up'
      });
    }).then(function () {
      expect(queryByRole('dialog', {
        name: 'modal-pop-up'
      })).toBeNull();
    });
  });
  it('Loading state', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalPopUp.ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.openConfirmAlert)(getPopUpPayload(0));
      }
    }, openButtonText), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.modalIsLoading)(true);
      }
    }, "SET_LOADER"), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return (0, _ModalPopUp.modalIsLoading)(false);
      }
    }, "RESET_LOADER"))),
        getByText = _render11.getByText,
        queryByRole = _render11.queryByRole;

    _react2.fireEvent.click(getByText(openButtonText));

    expect(queryByRole('alert', {
      name: 'button-loader'
    })).toBeNull();

    _react2.fireEvent.click(getByText('SET_LOADER'));

    expect(queryByRole('alert', {
      name: 'button-loader'
    })).toBeInTheDocument();

    _react2.fireEvent.click(getByText('RESET_LOADER'));

    expect(queryByRole('alert', {
      name: 'button-loader'
    })).toBeNull();
  });
});
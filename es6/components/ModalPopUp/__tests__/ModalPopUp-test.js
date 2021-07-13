import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { createPortal } from '../../../utils/portal';
import { closeConfirmAlert, modalIsLoading, ModalPopUp, openConfirmAlert } from '../ModalPopUp';
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
          title: /*#__PURE__*/React.createElement("span", null, title),
          message: /*#__PURE__*/React.createElement("span", null, message),
          renderButton: /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: clicks.okButtonClick
          }, okLabel)
        };

      case 3:
        return {
          title: /*#__PURE__*/React.createElement("span", null, title),
          body: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, message)),
          renderButton: /*#__PURE__*/React.createElement("button", {
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

  beforeEach(createPortal);
  afterEach(function () {
    jest.clearAllMocks();
    cleanup();
  });
  /* Snapshot Tests */

  it('Before opening pop-up', function () {
    var _render = render( /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    })),
        baseElement = _render.baseElement;

    expect(baseElement).toMatchSnapshot();
  });
  it('Basic', function () {
    var _render2 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(0));
      }
    }, openButtonText))),
        baseElement = _render2.baseElement,
        getByText = _render2.getByText;

    fireEvent.click(getByText(openButtonText));
    expect(baseElement).toMatchSnapshot();
  });
  it('Without Title', function () {
    var _render3 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(1));
      }
    }, openButtonText))),
        baseElement = _render3.baseElement,
        getByText = _render3.getByText;

    fireEvent.click(getByText(openButtonText));
    expect(baseElement).toMatchSnapshot();
  });
  it('Custom render elements', function () {
    var _render4 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(2));
      }
    }, openButtonText))),
        baseElement = _render4.baseElement,
        getByText = _render4.getByText;

    fireEvent.click(getByText(openButtonText));
    expect(baseElement).toMatchSnapshot();
  });
  it('Custom render elements - custom body', function () {
    var _render5 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(3));
      }
    }, openButtonText))),
        baseElement = _render5.baseElement,
        getByText = _render5.getByText;

    fireEvent.click(getByText(openButtonText));
    expect(baseElement).toMatchSnapshot();
  });
  /* Unit Test Cases */

  it('Pop-up open and close', function () {
    var _render6 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(0));
      }
    }, openButtonText), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: closeConfirmAlert
    }, cancelLabel, "_modal_close"))),
        getByText = _render6.getByText,
        queryByRole = _render6.queryByRole;

    expect(queryByRole('dialog', {
      name: 'modal-pop-up'
    })).toBeNull();
    fireEvent.click(getByText(openButtonText));
    expect(queryByRole('dialog', {
      name: 'modal-pop-up'
    })).toBeInTheDocument();
    fireEvent.click(getByText(cancelLabel + "_modal_close"));
    waitForElementToBeRemoved(function () {
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
    var _render7 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(0));
      }
    }, openButtonText))),
        getByText = _render7.getByText;

    fireEvent.click(getByText(openButtonText));
    fireEvent.click(getByText(okLabel));
    expect(okButtonClickSpy).toHaveBeenCalledTimes(1);
  });
  it('Custom elements - OK Click', function () {
    var _render8 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(0));
      }
    }, openButtonText))),
        getByText = _render8.getByText;

    fireEvent.click(getByText(openButtonText));
    fireEvent.click(getByText(okLabel));
    expect(okButtonClickSpy).toHaveBeenCalledTimes(1);
  });
  it('Basic - OK Click - without onPrimaryClick option', function () {
    var _render9 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(4));
      }
    }, openButtonText))),
        getByText = _render9.getByText,
        queryByRole = _render9.queryByRole;

    fireEvent.click(getByText(openButtonText));
    fireEvent.click(getByText(okLabel));
    waitForElementToBeRemoved(function () {
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
    var _render10 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(0));
      }
    }, openButtonText))),
        getByText = _render10.getByText,
        queryByRole = _render10.queryByRole;

    fireEvent.click(getByText(openButtonText));
    fireEvent.click(getByText(cancelLabel));
    waitForElementToBeRemoved(function () {
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
    var _render11 = render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalPopUp, {
      id: "test-modal-pop-up"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return openConfirmAlert(getPopUpPayload(0));
      }
    }, openButtonText), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return modalIsLoading(true);
      }
    }, "SET_LOADER"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return modalIsLoading(false);
      }
    }, "RESET_LOADER"))),
        getByText = _render11.getByText,
        queryByRole = _render11.queryByRole;

    fireEvent.click(getByText(openButtonText));
    expect(queryByRole('alert', {
      name: 'button-loader'
    })).toBeNull();
    fireEvent.click(getByText('SET_LOADER'));
    expect(queryByRole('alert', {
      name: 'button-loader'
    })).toBeInTheDocument();
    fireEvent.click(getByText('RESET_LOADER'));
    expect(queryByRole('alert', {
      name: 'button-loader'
    })).toBeNull();
  });
});
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { findAll } from 'styled-components/test-utils';
import { createPortal } from '../../../utils/portal';
import { MultiSelect } from '..';
import { OptionLabel } from '../StyledMultiSelect';
var options = [{
  id: 1,
  label: 'Test 1'
}, {
  id: 2,
  label: 'Test 2'
}, {
  id: 3,
  label: 'Test 3'
}, {
  id: 4,
  label: 'Test 4'
}, {
  id: 5,
  label: 'Test 5'
}, {
  id: 10,
  label: 'Test 10'
}, {
  id: 11,
  label: 'Test 11'
}, {
  id: 12,
  label: 'Test 12'
}];
var labelKey = 'label';
var valueKey = {
  key: 'id',
  reduce: true
};
describe('MultiSelect', function () {
  var setValues = jest.fn();
  var setIncExc = jest.fn();
  var useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(function (value) {
    return [value, setValues];
  });
  useStateSpy.mockImplementation(function (incExc) {
    return [incExc, setIncExc];
  });
  beforeEach(createPortal);
  afterEach(function () {
    jest.clearAllMocks();
    cleanup();
  });
  it('basic', function () {
    var props = {
      value: [],
      options: options,
      labelKey: labelKey,
      valueKey: valueKey
    };
    var component = renderer.create( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect"
    }, props)));
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('double-column', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };
    var component = renderer.create( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      isExcluded: null,
      onValueChange: setValues,
      onIncExcChange: setIncExc,
      withOptionChips: true,
      withUpdateCancelButtons: true,
      withInclusionExclusion: true
    }, props)));
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Single Column - Passing value externally - Value Label', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 3],
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render.getByLabelText;

    expect(getByLabelText('Selected Label Value')).toHaveTextContent(/^Selected$/);
    expect(getByLabelText('Selected Label Count')).toHaveTextContent(/^2$/);
  });
  it('Single Coulmn - Passing value externally - Option Chips', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };
    var value = [1, 3];

    var _render2 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: value,
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render2.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var chipsElements = findAll(document.body, OptionLabel); // Match no. of options which are selected

    expect(chipsElements.length).toBe(2); // Match the option labels which are selected

    chipsElements.forEach(function (el, index) {
      expect(el).toHaveTextContent(new RegExp("^Test " + value[index] + "$"));
    });
  });
  it('Single Column - Passing value externally - Verify checkbox check', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };
    var value = [1, 3];

    var _render3 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: value,
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render3.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    value.forEach(function (_) {
      expect(getByLabelText("select checkbox for Test " + _)).toHaveClass('option-checkbox-active');
    });
  });
  it('Single Column - No values selected - Value Label', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render4 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        queryAllByLabelText = _render4.queryAllByLabelText;

    var _queryAllByLabelText = queryAllByLabelText('Selected Label Value'),
        selectLabel = _queryAllByLabelText[0];

    var count = queryAllByLabelText('Selected Label Count');
    expect(selectLabel).toHaveTextContent(/^Select$/);
    expect(count.length).toBe(0);
  });
  it('Single Column - No values selected - Option Chips', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render5 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render5.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var chipsElements = findAll(document.body, OptionLabel); // Match no. of options which are selected

    expect(chipsElements.length).toBe(0);
  });
  it('Single Column - No values selected - Verify checkbox check', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render6 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render6.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    options.forEach(function (_) {
      expect(getByLabelText("select checkbox for Test " + _.id)).toHaveClass('option-checkbox-inactive');
    });
  });
  it('Single Column - Search - Value match', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render7 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      withOptionChips: true,
      searchable: true,
      searchPlaceholder: "Search"
    }, props))),
        getByRole = _render7.getByRole,
        getByLabelText = _render7.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var searchElement = getByRole('search', {
      name: 'multiselect searchbox'
    });
    fireEvent.change(searchElement, {
      target: {
        value: 'Test 1'
      }
    });
    expect(searchElement.value).toBe('Test 1');
  });
  it('Single Column - Search - Option match', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render8 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      withOptionChips: true,
      searchable: true,
      searchPlaceholder: "Search"
    }, props))),
        getByRole = _render8.getByRole,
        getByLabelText = _render8.getByLabelText,
        queryAllByRole = _render8.queryAllByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var searchElement = getByRole('search', {
      name: 'multiselect searchbox'
    }); // Initial Option count check

    expect(queryAllByRole('option', {
      name: 'multiselect option value'
    }).length).toBe(8);
    fireEvent.change(searchElement, {
      target: {
        value: 'Test 1'
      }
    });
    var filteredOptions = queryAllByRole('option', {
      name: 'multiselect option value'
    });
    expect(filteredOptions.length).toBe(4);
    filteredOptions.forEach(function (option, index) {
      expect(option).toHaveTextContent(new RegExp("^" + options.filter(function (_) {
        return _.label.includes('Test 1');
      })[index].label + "$"));
    });
  });
  it('Single Column - Select Option - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render9 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render9.getByLabelText,
        getByRole = _render9.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select Option with id 2

    fireEvent.click(getByRole('menuitem', {
      name: 'option id - 2'
    }));
    expect(setValues).toHaveBeenCalledWith([2]);
  });
  it('Single Column - Deselect Option - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render10 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render10.getByLabelText,
        getByRole = _render10.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select Option with id 2

    fireEvent.click(getByRole('menuitem', {
      name: 'option id - 2'
    }));
    expect(setValues).toHaveBeenCalledWith([1, 3]);
  });
  it('Single Column - Select All Option - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render11 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      withOptionChips: true,
      withSelectAll: true
    }, props))),
        getByLabelText = _render11.getByLabelText,
        getByRole = _render11.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select all option checkbox

    fireEvent.click(getByRole('menuitem', {
      name: 'select all options'
    }));
    expect(setValues).toHaveBeenCalledWith(options.map(function (_) {
      return _.id;
    }));
  });
  it('Single Column - Deselect All Option - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render12 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: options.map(function (_) {
        return _.id;
      }),
      onValueChange: setValues,
      withOptionChips: true,
      withSelectAll: true
    }, props))),
        getByLabelText = _render12.getByLabelText,
        getByRole = _render12.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select all option checkbox

    fireEvent.click(getByRole('menuitem', {
      name: 'select all options'
    }));
    expect(setValues).toHaveBeenCalledWith([]);
  });
  it('Single Column - Clear All Option - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render13 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      withOptionChips: true,
      withSelectAll: true
    }, props))),
        getByLabelText = _render13.getByLabelText,
        getByRole = _render13.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select all option checkbox

    fireEvent.click(getByRole('button', {
      name: 'Clear all selected options'
    }));
    expect(setValues).toHaveBeenCalledWith([]);
  });
  it('Single Column - OK Button', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render14 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      withOptionChips: true,
      withUpdateCancelButtons: true
    }, props))),
        getByLabelText = _render14.getByLabelText,
        getByRole = _render14.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select Option with id 2

    fireEvent.click(getByRole('menuitem', {
      name: 'option id - 2'
    }));
    expect(setValues).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button', {
      name: 'OK button (Update selected values)'
    }));
    expect(setValues).toHaveBeenCalledWith([1, 3]);
  });
  it('Single Column - Cancel Button', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render15 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      withOptionChips: true,
      withUpdateCancelButtons: true
    }, props))),
        getByLabelText = _render15.getByLabelText,
        getByRole = _render15.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select Option with id 2

    fireEvent.click(getByRole('menuitem', {
      name: 'option id - 2'
    }));
    expect(setValues).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button', {
      name: 'Cancel button'
    }));
    expect(setValues).toHaveBeenCalledTimes(0);
  });
  it('Single Column - Remove Chip - Without update and cancel buttons', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render16 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      withOptionChips: true
    }, props))),
        getByLabelText = _render16.getByLabelText,
        getByRole = _render16.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Remove Option Test 2

    fireEvent.click(getByRole('button', {
      name: 'Remove selected chip Test 2'
    }));
    expect(setValues).toHaveBeenCalledWith([1, 3]);
  });
  it('Single Column - Remove Chip - With update button', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render17 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      withOptionChips: true,
      withUpdateCancelButtons: true
    }, props))),
        getByLabelText = _render17.getByLabelText,
        getByRole = _render17.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Remove Option Test 2

    fireEvent.click(getByRole('button', {
      name: 'Remove selected chip Test 2'
    }));
    expect(setValues).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button', {
      name: 'OK button (Update selected values)'
    }));
    expect(setValues).toHaveBeenCalledWith([1, 3]);
  });
  it('Single Column - Remove Chip - With cancel button', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'single-column'
    };

    var _render18 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      withOptionChips: true,
      withUpdateCancelButtons: true
    }, props))),
        getByLabelText = _render18.getByLabelText,
        getByRole = _render18.getByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Remove Option Test 2

    fireEvent.click(getByRole('button', {
      name: 'Remove selected chip Test 2'
    }));
    expect(setValues).toHaveBeenCalledTimes(0);
    fireEvent.click(getByRole('button', {
      name: 'Cancel button'
    }));
    expect(setValues).toHaveBeenCalledTimes(0);
  });
  it('Double Column - Passing value externally - Value Label - Included', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render19 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 3],
      isExcluded: false,
      onValueChange: setValues,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true
    }, props))),
        getByLabelText = _render19.getByLabelText;

    expect(getByLabelText('Selected Label Value')).toHaveTextContent(/^Included$/);
    expect(getByLabelText('Selected Label Count')).toHaveTextContent(/^2$/);
  });
  it('Double Column - Passing value externally - Value Label - Excluded', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render20 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 3],
      isExcluded: true,
      onValueChange: setValues,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true
    }, props))),
        getByLabelText = _render20.getByLabelText;

    expect(getByLabelText('Selected Label Value')).toHaveTextContent(/^Excluded$/);
    expect(getByLabelText('Selected Label Count')).toHaveTextContent(/^2$/);
  });
  it('Double Coulmn - Passing inc value externally - Option Chips', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };
    var value = [1, 3];

    var _render21 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: value,
      onValueChange: setValues,
      isExcluded: false,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true,
      withOptionChips: true
    }, props))),
        getByLabelText = _render21.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var chipsElements = findAll(document.body, OptionLabel);
    var chipListHeader = getByLabelText('Chip List header'); // Match no. of options which are selected

    expect(chipsElements.length).toBe(2); // Match the option labels which are selected

    chipsElements.forEach(function (el, index) {
      expect(el).toHaveTextContent(new RegExp("^Test " + value[index] + "$"));
    });
    expect(chipListHeader).toHaveTextContent(/^Included List$/);
  });
  it('Double Coulmn - Passing exc value externally - Option Chips', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };
    var value = [1, 3];

    var _render22 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: value,
      onValueChange: setValues,
      isExcluded: true,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true,
      withOptionChips: true
    }, props))),
        getByLabelText = _render22.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var chipsElements = findAll(document.body, OptionLabel);
    var chipListHeader = getByLabelText('Chip List header'); // Match no. of options which are selected

    expect(chipsElements.length).toBe(2); // Match the option labels which are selected

    chipsElements.forEach(function (el, index) {
      expect(el).toHaveTextContent(new RegExp("^Test " + value[index] + "$"));
    });
    expect(chipListHeader).toHaveTextContent(/^Excluded List$/);
  });
  it('Double Column - Passing inc value externally - Verify checkbox check', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };
    var value = [1, 3];

    var _render23 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: value,
      onValueChange: setValues,
      isExcluded: false,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true,
      withOptionChips: true
    }, props))),
        getByLabelText = _render23.getByLabelText,
        queryByLabelText = _render23.queryByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    options.map(function (_) {
      return _.id;
    }).forEach(function (_) {
      expect(queryByLabelText("cross checkbox for Test " + _)).toBe(null);
      var selectCheck = getByLabelText("select checkbox for Test " + _);

      if (value.includes(_)) {
        expect(selectCheck).toHaveClass('option-checkbox-active');
      } else {
        expect(selectCheck).toHaveClass('option-checkbox-inactive');
      }
    });
  });
  it('Double Column - Passing exc value externally - Verify checkbox check', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };
    var value = [1, 3];

    var _render24 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: value,
      onValueChange: setValues,
      isExcluded: true,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true,
      withOptionChips: true
    }, props))),
        getByLabelText = _render24.getByLabelText,
        queryByLabelText = _render24.queryByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    options.map(function (_) {
      return _.id;
    }).forEach(function (_) {
      expect(queryByLabelText("select checkbox for Test " + _)).toBe(null);
      var selectCheck = getByLabelText("cross checkbox for Test " + _);

      if (value.includes(_)) {
        expect(selectCheck).toHaveClass('option-checkbox-active');
      } else {
        expect(selectCheck).toHaveClass('option-checkbox-inactive');
      }
    });
  });
  it('Double Column - Passing no value externally - Verify checkbox check', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };
    var value = [];

    var _render25 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: value,
      onValueChange: setValues,
      isExcluded: null,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true,
      withOptionChips: true
    }, props))),
        getByLabelText = _render25.getByLabelText,
        getByRole = _render25.getByRole,
        queryByLabelText = _render25.queryByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    options.map(function (_) {
      return _.id;
    }).forEach(function (_) {
      expect(queryByLabelText("select checkbox for Test " + _)).toBe(null);
      expect(queryByLabelText("cross checkbox for Test " + _)).toBe(null);
    }); // Hover option with id 2

    fireEvent.mouseOver(getByRole('menuitem', {
      name: 'option id - 2'
    }));
    expect(getByLabelText("select checkbox for Test 2")).toHaveClass('option-checkbox-active');
    expect(getByLabelText("cross checkbox for Test 2")).toHaveClass('option-checkbox-active');
  });
  it('Double Column - No values selected - Value Label', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render26 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      isExcluded: null,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true,
      withOptionChips: true
    }, props))),
        queryAllByLabelText = _render26.queryAllByLabelText;

    var _queryAllByLabelText2 = queryAllByLabelText('Selected Label Value'),
        selectLabel = _queryAllByLabelText2[0];

    var count = queryAllByLabelText('Selected Label Count');
    expect(selectLabel).toHaveTextContent(/^Select$/);
    expect(count.length).toBe(0);
  });
  it('Double Column - No values selected - Option Chips', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render27 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      isExcluded: null,
      onIncExcChange: setIncExc,
      withInclusionExclusion: true,
      withOptionChips: true
    }, props))),
        getByLabelText = _render27.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var chipsElements = findAll(document.body, OptionLabel); // Match no. of options which are selected

    expect(chipsElements.length).toBe(0);
  });
  it('Double Column - Search - Option match', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render28 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      isExcluded: null,
      onIncExcChange: setIncExc,
      withOptionChips: true,
      searchable: true,
      withInclusionExclusion: true,
      searchPlaceholder: "Search"
    }, props))),
        getByRole = _render28.getByRole,
        getByLabelText = _render28.getByLabelText,
        queryAllByRole = _render28.queryAllByRole; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    var searchElement = getByRole('search', {
      name: 'multiselect searchbox'
    }); // Initial Option count check

    expect(queryAllByRole('option', {
      name: 'multiselect option value'
    }).length).toBe(8);
    fireEvent.change(searchElement, {
      target: {
        value: 'Test 1'
      }
    });
    var filteredOptions = queryAllByRole('option', {
      name: 'multiselect option value'
    });
    expect(filteredOptions.length).toBe(4);
    filteredOptions.forEach(function (option, index) {
      expect(option).toHaveTextContent(new RegExp("^" + options.filter(function (_) {
        return _.label.includes('Test 1');
      })[index].label + "$"));
    });
  });
  it('Double Column - Select Option (include) - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render29 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      isExcluded: null,
      onIncExcChange: setIncExc,
      withOptionChips: true,
      withInclusionExclusion: true
    }, props))),
        getByRole = _render29.getByRole,
        getByLabelText = _render29.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Hover option with id 2

    fireEvent.mouseOver(getByRole('menuitem', {
      name: 'option id - 2'
    })); // Select Option with id 2

    fireEvent.click(getByRole('checkbox', {
      name: 'select checkbox for Test 2'
    }));
    expect(setValues).toHaveBeenCalledWith([2]);
    expect(setIncExc).toHaveBeenCalledWith(false);
  });
  it('Double Column - Select Option (exclude) - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render30 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      isExcluded: null,
      onIncExcChange: setIncExc,
      withOptionChips: true,
      withInclusionExclusion: true
    }, props))),
        getByRole = _render30.getByRole,
        getByLabelText = _render30.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Hover option with id 2

    fireEvent.mouseOver(getByRole('menuitem', {
      name: 'option id - 2'
    })); // Select Option with id 2

    fireEvent.click(getByRole('checkbox', {
      name: 'cross checkbox for Test 2'
    }));
    expect(setValues).toHaveBeenCalledWith([2]);
    expect(setIncExc).toHaveBeenCalledWith(true);
  });
  it('Double Column - Clear All - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render31 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [1, 2, 3],
      onValueChange: setValues,
      isExcluded: false,
      onIncExcChange: setIncExc,
      withOptionChips: true,
      withInclusionExclusion: true
    }, props))),
        getByRole = _render31.getByRole,
        getByLabelText = _render31.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop'));
    fireEvent.click(getByRole('button', {
      name: 'Clear all selected options'
    }));
    expect(setValues).toHaveBeenCalledWith([]);
  });
  it('Double Column - Select All Option - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render32 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: [],
      onValueChange: setValues,
      isExcluded: null,
      onIncExcChange: setIncExc,
      withOptionChips: true,
      withInclusionExclusion: true,
      withSelectAll: true
    }, props))),
        getByRole = _render32.getByRole,
        getByLabelText = _render32.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Hover option Select All

    fireEvent.mouseOver(getByRole('menuitem', {
      name: 'select all options'
    })); // Select Option Select All

    fireEvent.click(getByRole('checkbox', {
      name: 'cross checkbox for Select All'
    }));
    expect(setValues).toHaveBeenCalledWith(options.map(function (_) {
      return _.id;
    }));
    expect(setIncExc).toHaveBeenCalledWith(true);
  });
  it('Double Column - Deselect All Option - Verify', function () {
    var props = {
      options: options,
      labelKey: labelKey,
      valueKey: valueKey,
      layout: 'double-column'
    };

    var _render33 = render( /*#__PURE__*/React.createElement(MultiSelect, _extends({
      id: "test-multiselect",
      value: options.map(function (_) {
        return _.id;
      }),
      onValueChange: setValues,
      isExcluded: false,
      onIncExcChange: setIncExc,
      withOptionChips: true,
      withInclusionExclusion: true,
      withSelectAll: true
    }, props))),
        getByRole = _render33.getByRole,
        getByLabelText = _render33.getByLabelText; // Open the multiselect dropdown


    fireEvent.click(getByLabelText('Open Drop')); // Select all option checkbox

    fireEvent.click(getByRole('menuitem', {
      name: 'select all options'
    }));
    expect(setValues).toHaveBeenCalledWith([]);
    expect(setIncExc).toHaveBeenCalledWith(null);
  });
});
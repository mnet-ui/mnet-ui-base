import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MnetUIBase } from '../../MnetUIBase';
import { RangeInput } from '..';
test('RangeInput renders', function () {
  var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(RangeInput, {
    value: "50"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
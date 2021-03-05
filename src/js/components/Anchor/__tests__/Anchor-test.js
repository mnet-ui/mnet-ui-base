import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { findAllByType } from '../../../utils';

import { MnetUIBase } from '../../MnetUIBase';
import { Anchor } from '..';

describe('Anchor', () => {
  afterEach(cleanup);

  test('renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Anchor />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders with children', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Anchor href="#">children</Anchor>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('warns about invalid label render', () => {
    const warnSpy = jest.spyOn(console, 'warn');
    const component = renderer.create(
      <MnetUIBase>
        <Anchor href="#" label="Test">
          invalid
        </Anchor>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Anchor should not have children if icon or label is provided',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
  });

  test('warns about invalid icon render', () => {
    const warnSpy = jest.spyOn(console, 'warn');
    const component = renderer.create(
      <MnetUIBase>
        <Anchor href="#" icon={<svg />}>
          invalid
        </Anchor>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Anchor should not have children if icon or label is provided',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
  });

  test('primary renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Anchor href="#" primary label="Test" />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('focus renders', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <Anchor href="#" label="Test" />
      </MnetUIBase>,
    );
    fireEvent.focus(getByText('Test'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('disabled renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Anchor disabled />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('icon label renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Anchor icon={<svg />} label="Test" onClick={() => {}} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reverse icon label renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Anchor reverse icon={<svg />} label="Test" onClick={() => {}} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('is clickable', () => {
    const onClick = jest.fn();
    const component = renderer.create(
      <MnetUIBase>
        <Anchor href="#" label="Test" onClick={onClick} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();

    const anchor = findAllByType(tree, 'a');
    anchor[0].props.onClick();
    expect(onClick).toBeCalled();
  });

  test('renders tag', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Anchor href="#" label="Test" as="span" />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

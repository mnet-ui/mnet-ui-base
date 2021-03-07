import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Box } from '../../Box';
import { Card } from '../Card';
import { CardBody } from '../../CardBody';
import { CardFooter } from '../../CardFooter';
import { CardHeader } from '../../CardHeader';
import { MnetUIBase } from '../../MnetUIBase';
import { Text } from '../../Text';

const customTheme = {
  global: {
    font: {
      family: `-apple-system,
           BlinkMacSystemFont, 
           "Segoe UI"`,
    },
  },
  card: {
    container: {
      background: 'brand',
      elevation: 'large',
    },
    body: {
      pad: 'small',
      background: 'light-1',
    },
    header: {
      justify: 'start',
      pad: 'small',
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF27',
    },
  },
};

describe('Card', () => {
  afterEach(cleanup);

  test('renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Card />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('header', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Card>
          <CardHeader>header</CardHeader>
        </Card>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('footer', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Card>
          <CardFooter>footer</CardFooter>
        </Card>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('children', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Card>
          <Box>
            <Text>test</Text>
          </Box>
        </Card>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('all', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Card>
          <CardHeader>header</CardHeader>
          <CardBody>body</CardBody>
          <CardFooter>footer</CardFooter>
        </Card>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Themed', () => {
    const component = renderer.create(
      <MnetUIBase theme={customTheme}>
        <Card width="small">
          <CardHeader>header</CardHeader>
          <CardBody>body</CardBody>
          <CardFooter>footer</CardFooter>
        </Card>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

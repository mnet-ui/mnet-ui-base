import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';

import { MnetUIBase } from '..';
import { Heading } from '../../Heading';
import { AnnounceContext, ResponsiveContext } from '../../../contexts';
import { mnet } from '../../../themes/mnet';

const TestAnnouncer = ({ announce }) => {
  React.useEffect(() => announce('hello', 'assertive'));
  return <div>hi</div>;
};

const customBreakpointsTheme = {
  global: {
    deviceBreakpoints: {
      phone: 'small',
      tablet: 'medium',
      computer: 'large',
    },
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 800,
      },
      large: {
        value: 1000,
      },
    },
  },
};

const SSRTester = ({ ua }) => {
  return (
    <MnetUIBase theme={customBreakpointsTheme} userAgent={ua}>
      <ResponsiveContext.Consumer>
        {size => <Heading>{`Received size ${size} for ${ua}`}</Heading>}
      </ResponsiveContext.Consumer>
    </MnetUIBase>
  );
};

describe('MnetUIBase', () => {
  afterEach(cleanup);

  test('basic', () => {
    const component = renderer.create(<MnetUIBase />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('mnet theme', () => {
    const component = renderer.create(<MnetUIBase theme={mnet} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('themeMode', () => {
    const component = renderer.create(
      <MnetUIBase theme={mnet} themeMode="dark" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('cssVars', () => {
    const component = renderer.create(
      <MnetUIBase cssVars>MnetUIBase App</MnetUIBase>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('full', () => {
    const component = renderer.create(
      <MnetUIBase full>MnetUIBase App</MnetUIBase>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('background', () => {
    const component = renderer.create(
      <MnetUIBase full background="#0000ff">
        MnetUIBase App
      </MnetUIBase>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('announce', done => {
    const { container } = render(
      <MnetUIBase>
        <AnnounceContext.Consumer>
          {announce => <TestAnnouncer announce={announce} />}
        </AnnounceContext.Consumer>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    // no style, no need for expectPortal
    expect(document.body.querySelector('[aria-live]')).toMatchSnapshot();

    setTimeout(() => {
      // should clear the aria-live container
      expect(document.body.querySelector('[aria-live]')).toMatchSnapshot();
      done();
    }, 600); // wait the aria-live container to clear
  });

  [
    /* eslint-disable max-len */
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1 PTST/396',
    'Mozilla/5.0 (iPad; CPU OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 [FBAN/FBIOS;FBAV/156.0.0.41.97;FBBV/89172188;FBDV/iPad5,3;FBMD/iPad;FBSN/iOS;FBSV/11.2.1;FBSS/2;FBCR/;FBID/tablet;FBLC/en_GB;FBOP/5;FBRV/0]',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
    /* eslint-enable max-len */
  ].forEach(ua => {
    test(`ssr rendering ${ua.substring(0, 25)}`, () => {
      const component = renderer.create(<SSRTester ua={ua} />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});

import React from 'react';

import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Add } from 'grommet-icons';

import { MnetUIBase, Button } from '../..';
import { buttonKindTheme } from './theme/buttonKindTheme';

describe('Button kind', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container, getByText } = render(
      <MnetUIBase
        theme={{
          button: { default: {} },
        }}
      >
        <Button a11yTitle="Test button" label="Test" onClick={() => {}} />
      </MnetUIBase>,
    );

    fireEvent.click(getByText('Test'));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('default button', () => {
    const { container } = render(
      <MnetUIBase theme={buttonKindTheme}>
        <Button />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('button with icon and align', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              color: undefined, // needed use case for the test coverage
            },
          },
        }}
      >
        <Button icon={<Add />} align="start" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('button icon colors', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              background: {
                color: '#666666',
              },
              border: {
                color: '#666666',
              },
              color: undefined, // needed use case for the test coverage
            },
          },
        }}
      >
        <Button icon={<Add />} color="#000" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`mouseOver and mouseOut events`, async () => {
    const { container, getByText } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              background: '#000',
            },
          },
        }}
      >
        <Button label="label" icon={<Add />} />
      </MnetUIBase>,
    );
    fireEvent.mouseOver(getByText('label'));
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOut(getByText('label'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('primary button', () => {
    const { container } = render(
      <MnetUIBase theme={buttonKindTheme}>
        <Button primary />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('secondary button', () => {
    const { container } = render(
      <MnetUIBase theme={buttonKindTheme}>
        <Button secondary />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border on default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              border: {
                color: 'green',
                width: '2px',
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('no border on default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              border: false,
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('extend on default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              extend: {
                color: 'green',
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('fill', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: { default: {} },
        }}
      >
        <Button label="Test" fill />
        <Button label="Test" fill="vertical" />
        <Button label="Test" fill="horizontal" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('font on button default', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              font: {
                weight: 700,
                height: '20px',
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('font undefined', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              font: {
                weight: undefined,
                height: undefined,
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('hover on default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              hover: {
                color: 'white',
                background: 'green',
              },
            },
          },
        }}
      >
        <Button label="Test" plain hoverIndicator onClick={() => {}} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('opacity on default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              opacity: true,
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('padding on default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              padding: {
                horizontal: '12px',
                vertical: '6px',
              },
              background: {
                color: 'green',
              },
              color: 'text',
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('render of children', () => {
    const { container } = render(
      <MnetUIBase theme={buttonKindTheme}>
        <Button>Test</Button>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('no padding on default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              padding: '0px',
              color: 'text',
              border: {
                color: false,
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('size of default button', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {
              size: {
                small: {
                  border: {
                    radius: '4px',
                  },
                  pad: {
                    vertical: '4px',
                    horizontal: '8px',
                  },
                },
              },
            },
          },
        }}
      >
        <Button label="Test" size="small" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`disabled state cursor should indicate the button cannot be 
  clicked`, () => {
    const { getByText } = render(
      <MnetUIBase
        theme={{
          button: { default: {} },
        }}
      >
        <Button disabled label="Button" />
      </MnetUIBase>,
    );

    const button = getByText('Button');
    // eslint-disable-next-line no-underscore-dangle
    const cursorStyle = window.getComputedStyle(button)._values.cursor;
    expect(cursorStyle).not.toBe('pointer');
    expect(cursorStyle).toBe('default');
  });

  test(`disabled with hoverIndicator should not hover`, () => {
    const { container, getByText } = render(
      <MnetUIBase
        theme={{
          button: { default: {} },
        }}
      >
        <Button disabled hoverIndicator label="Button" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOver(getByText('Button'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should apply styling according to theme size definitions`, () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          button: {
            default: {},
            size: {
              small: {
                border: {
                  radius: '4px',
                },
                pad: {
                  vertical: '4px',
                  horizontal: '8px',
                },
              },
              medium: {
                border: {
                  radius: '4px',
                },
                pad: {
                  vertical: '6px',
                  horizontal: '12px',
                },
              },
              large: {
                border: {
                  radius: '6px',
                },
                pad: {
                  vertical: '6px',
                  horizontal: '16px',
                },
              },
            },
          },
        }}
      >
        <Button label="Button" size="small" />
        {/* button with no size specified should have medium styling applied
        by default */}
        <Button label="Button" />
        <Button label="Button" size="medium" />
        <Button label="Button" size="large" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

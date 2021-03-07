import React from 'react';

import { Box, MnetUIBase, Heading, ResponsiveContext } from 'mnet-ui-base';

const customBreakpoints = {
  global: {
    breakpoints: {
      xsmall: {
        value: 375,
      },
      small: {
        value: 568,
        edgeSize: {
          none: '0px',
          small: '6px',
          medium: '12px',
          large: '24px',
        },
      },
      medium: {
        value: 768,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      large: {
        value: 1024,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      xlarge: {
        value: 1366,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
    },
  },
};

export const CustomBreakpoints = () => (
  <MnetUIBase theme={customBreakpoints} full>
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill background="brand">
          <Heading>{`Hi, I'm ${size}, resize me!`}</Heading>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </MnetUIBase>
);

CustomBreakpoints.storyName = 'Custom breakpoints';

export default {
  title: 'Utilities/ResponsiveContext/Custom breakpoints',
};

import React from 'react';

import { Add } from 'grommet-icons';

import { Box, Button, Text, MnetUIBase } from 'mnet-ui-base';

export const Plain = () => (
  <Box pad="large" gap="large">
    {/* Out of the Box Button */}
    <>
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}}>
          {/*  When Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Add</Text>
          </Box>
        </Button>
      </Box>
    </>
    {/* Kind Button */}
    <MnetUIBase
      theme={{
        global: {
          font: {
            family: `-apple-system, BlinkMacSystemFont`,
          },
        },
        button: { default: {} }, // enabling kind button functionality
      }}
    >
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}}>
          {/*  When kind Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Kind</Text>
          </Box>
        </Button>
      </Box>
    </MnetUIBase>
  </Box>
);

export default {
  title: 'Controls/Button/Plain',
};

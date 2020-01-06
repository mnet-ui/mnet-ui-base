import React from 'react';

import { Add } from 'grommet-icons';

import { Box, Button, MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Plain = () => (
  <Box pad="large" gap="large">
    {/* Out of the Box Button */}
    <MnetUIBase theme={mnet}>
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}}>
          {/*  When Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Add</Text>
          </Box>
        </Button>
      </Box>
    </MnetUIBase>
    {/* Kind Button */}
    <Grommet
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
    </Grommet>
  </Box>
);

export default {
  title: 'Controls/Button/Plain',
};

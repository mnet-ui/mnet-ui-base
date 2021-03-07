import React from 'react';
import { Gremlin } from 'grommet-icons';

import { Box, DropButton, Text } from 'mnet-ui-base';

const renderItems = () => (
  <Box>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
  </Box>
);

const MenuItem = () => (
  <Box height="36px" width="36px" align="center">
    <Gremlin />
  </Box>
);

const GremlinDropButton = () => (
  <DropButton
    alignSelf="center"
    margin={{ vertical: 'small' }}
    dropContent={renderItems()}
    dropProps={{ align: { top: 'bottom' } }}
  >
    <MenuItem />
  </DropButton>
);

const MenuDropButton = () => (
  <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
    <Box fill>
      <Box fill="vertical" width="xxsmall" background="dark-2">
        <GremlinDropButton />
        <Box flex />
        <GremlinDropButton />
      </Box>
    </Box>
  </div>
);

export const Menu = () => <MenuDropButton />;
Menu.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/DropButton/Menu',
};

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grid } from 'mnet-ui-base';

const GridAreasAlternative = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Grid
        rows={['xxsmall', 'medium', 'xsmall']}
        columns={['1/4', '3/4']}
        areas={[
          ['header', 'header'],
          ['sidebar', 'main'],
          ['footer', 'footer'],
        ]}
        gap="small"
      >
        <Box background="brand" gridArea="header">
          Header
        </Box>

        <Box background="light-5" gridArea="sidebar">
          Sidebar
        </Box>

        <Box background="light-2" gridArea="main">
          Main
        </Box>

        <Box background="dark-2" gridArea="footer">
          Footer
        </Box>
      </Grid>
    </div>
  );
};

storiesOf('Grid', module).add('Areas prop alternative', () => (
  <GridAreasAlternative />
));

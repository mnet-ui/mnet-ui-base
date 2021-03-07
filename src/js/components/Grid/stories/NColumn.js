import React from 'react';

import { Box, Grid } from 'mnet-ui-base';

export const NColumnGrid = () => (
  <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
    <Grid
      columns={{
        count: 6,
        size: 'auto',
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </div>
);

NColumnGrid.storyName = 'N-column layout';

export default {
  title: 'Layout/Grid/N-column layout',
};

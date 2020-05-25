import React from 'react';

import { Box, Layer, Text } from 'mnet-ui-base';

export const PlainLayer = () => (
  <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
    <Box fill background="dark-3">
      <Layer margin="medium" plain>
        <Box pad="large" border={{ color: 'accent-1', size: 'large' }}>
          <Text color="accent-2">Text</Text>
        </Box>
      </Layer>
    </Box>
  </div>
);

PlainLayer.storyName = 'Plain';

export default {
  title: 'Layout/Layer/Plain',
};

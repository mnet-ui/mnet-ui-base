import React from 'react';

import { Box, MnetUIBase, Layer, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const PlainLayer = () => (
  <MnetUIBase theme={mnet} full>
    <Box fill background="dark-3">
      <Layer margin="medium" plain>
        <Box pad="large" border={{ color: 'accent-1', size: 'large' }}>
          <Text color="accent-2">Text</Text>
        </Box>
      </Layer>
    </Box>
  </MnetUIBase>
);

PlainLayer.storyName = 'Plain';

export default {
  title: 'Layout/Layer/Plain',
};

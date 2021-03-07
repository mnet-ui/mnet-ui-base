import React from 'react';

import { Box, CheckBoxGroup, MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Disabled = () => (
  <MnetUIBase theme={mnet}>
    <Box pad="medium" gap="large">
      <Box>
        <Text margin={{ vertical: 'small' }}>Disabled Group</Text>
        <CheckBoxGroup disabled options={['First', 'Second', 'Third']} />
      </Box>
      <Box>
        <Text margin={{ vertical: 'small' }}> Disabled Individuals</Text>
        <CheckBoxGroup
          options={[
            { label: 'Maui', disabled: true },
            { label: 'Jerusalem' },
            { label: 'Wuhan', disabled: true },
          ]}
        />
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Input/CheckBoxGroup/Disabled',
};

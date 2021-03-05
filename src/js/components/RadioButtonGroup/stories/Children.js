import React, { useState } from 'react';

import { Box, MnetUIBase, RadioButtonGroup } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { Ascend, Descend } from 'grommet-icons';

export const Children = () => {
  const [value, setValue] = useState();

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <RadioButtonGroup
          name="radio"
          direction="row"
          gap="xsmall"
          options={['asc', 'desc']}
          value={value}
          onChange={event => setValue(event.target.value)}
        >
          {(option, { checked, hover }) => {
            const Icon = option === 'asc' ? Ascend : Descend;
            let background;
            if (checked) background = 'brand';
            else if (hover) background = 'light-4';
            else background = 'light-2';
            return (
              <Box background={background} pad="xsmall">
                <Icon />
              </Box>
            );
          }}
        </RadioButtonGroup>
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/RadioButtonGroup/Children',
};

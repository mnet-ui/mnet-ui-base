import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button } from 'mnet-ui-base';
import { Tooltip } from '../Tooltip';

const TooltipPreview = () => {
  return (
    <div>
      <Box
        direction="row"
        align="center"
        pad="large"
        justify="center"
        height="100vh"
      >
        <Tooltip message="Left Side" position="left" margin="large">
          <Button label="Left" />
        </Tooltip>
        <Tooltip message="Up Side" position="up" margin="large">
          <Button label="UP" />
        </Tooltip>
        <Tooltip message="Down Side" position="down" margin="large">
          <Button label="Down" />
        </Tooltip>
        <Tooltip message="Right Side" position="right" margin="large">
          <Button label="Right" />
        </Tooltip>
      </Box>
    </div>
  );
};

storiesOf('Tooltip', module).add('Tooltip', () => <TooltipPreview />);

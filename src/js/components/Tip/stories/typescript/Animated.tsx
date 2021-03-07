import React from 'react';

import { mnet, Box, Button, MnetUIBase, Tip } from 'mnet-ui-base';
import { UserFemale, Info } from 'grommet-icons';

const Circle = ({ ...rest }) => (
  <Box
    animation={['fadeIn', 'pulse']} // double animation
    round="full"
    background="linear-gradient(102.77deg, #FD6FFF -9.18%, #ffdde2 209.09%)"
    {...rest}
  />
);

export const Animated = () => {
  return (
    <MnetUIBase full theme={mnet}>
      <Box
        align="center"
        justify="center"
        fill
        background="dark-1"
        gap="medium"
      >
        <Tip
          plain
          dropProps={{ align: { left: 'right' } }}
          content={
            <Box align="start" margin={{ bottom: 'xlarge' }} pad="xsmall">
              <Circle margin={{ left: 'large' }} pad="small">
                <Info color="accent-1" />
              </Circle>
              <Circle margin={{ left: 'medium' }} pad="small" />
              <Circle pad="xsmall" />
            </Box>
          }
        >
          <Button icon={<UserFemale color="accent-1" size="large" />} />
        </Tip>
        Double animation of 'fadeIn' and 'pulse'
      </Box>
    </MnetUIBase>
  );
};

Animated.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Tip/Animated',
};

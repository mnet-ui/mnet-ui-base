import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const Round = () => {
  const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

  return (
    <MnetUIBase theme={mnet}>
      <Box direction="row" alignContent="center" gap="small" pad="large">
        <Avatar size="large" src={src} round={false} />
        <Avatar size="large" src={src} round="xsmall" />
        <Avatar size="large" src={src} round="small" />
        <Avatar size="large" src={src} round="medium" />
        <Avatar size="large" src={src} round="large" />
        <Avatar size="large" src={src} />
      </Box>
    </MnetUIBase>
  );
};

storiesOf('Avatar', module).add('Round', () => <Round />);

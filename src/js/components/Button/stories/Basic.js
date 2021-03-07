import React from 'react';

import { Box, Button } from 'mnet-ui-base';

export const Basic = props => (
  <div>
    <Box align="center" pad="medium">
      <Button
        primary
        label="Primary"
        size="medium"
        onClick={() => {}}
        {...props}
      />
    </Box>
    <Box align="center" pad="medium">
      <Button
        secondary
        size="medium"
        label="Secondary"
        onClick={() => {}}
        {...props}
      />
    </Box>
    <Box align="center" pad="medium">
      <Button
        tertiary
        size="medium"
        label="Tertiary"
        onClick={() => {}}
        {...props}
      />
    </Box>
    <Box align="center" pad="medium">
      <Button size="medium" label="Default" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button size="medium" label="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button
        size="medium"
        disabled
        label="Disabled"
        onClick={() => {}}
        {...props}
      />
    </Box>
    <Box align="center" pad="medium">
      <Button
        primary
        label="Active Primary"
        active
        onClick={() => {}}
        {...props}
      />
    </Box>
  </div>
);

export default {
  title: 'Controls/Button/Basic',
};

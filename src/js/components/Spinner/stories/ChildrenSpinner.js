import React from 'react';
import styled from 'styled-components';
import { Favorite, Nodes } from 'grommet-icons';

import { mnet, Box, MnetUIBase, Spinner, Text } from 'mnet-ui-base';

const FavoriteFilled = styled(Favorite)`
  path[fill='none'] {
    fill: red;
  }
`;

export const Children = () => (
  <MnetUIBase theme={mnet} full>
    <Box margin="large" align="center">
      <Box align="center" direction="row" gap="small" pad="small">
        <Spinner align="center" justify="center" size="large">
          <Nodes size="large" color="graph-0" />
        </Spinner>
        <Text> Spinner with an icon child</Text>
      </Box>
      <Box direction="row" gap="large" pad="small">
        <Spinner
          animation={{ type: 'pulse', duration: 650, size: 'medium' }}
          justify="center"
        >
          <FavoriteFilled color="red" size="large" />
        </Spinner>
        <Text margin={{ horizontal: 'small' }}> Loading with LOVE...</Text>
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Spinner/Children',
};

import React from 'react';

import { Box, Meter, Stack, Text } from 'mnet-ui-base';

export const Labelled = () => {
  const meterValue = 30;

  return (
    <>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[{ value: meterValue }]}
            size="xsmall"
            thickness="small"
          />
          <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
            <Text size="xlarge" weight="bold">
              {meterValue}
            </Text>
            <Text size="small">%</Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default {
  title: 'Visualizations/Meter/Labelled',
};

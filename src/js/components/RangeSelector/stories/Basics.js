import React, { useState } from 'react';

import { Box, RangeSelector, Stack, Text } from 'mnet-ui-base';

export const Simple = ({ direction = 'horizontal' }) => {
  const [range, setRange] = useState([12, 16]);
  const onChange = values => {
    setRange(values);
  };

  return (
    <>
      <Box align="center" pad="large">
        <Stack>
          <Box
            direction={direction === 'vertical' ? 'column' : 'row'}
            justify="between"
          >
            {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(value => (
              <Box
                key={value}
                width="xxsmall"
                height="xxsmall"
                align="center"
                pad="small"
                border={false}
              >
                <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction={direction}
            min={10}
            max={20}
            size="full"
            values={range}
            onChange={onChange}
          />
        </Stack>
      </Box>
    </>
  );
};

export default {
  title: 'Input/RangeSelector/Simple',
};

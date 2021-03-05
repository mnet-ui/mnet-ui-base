import React, { useState } from 'react';
import { deepMerge } from 'mnet-ui-base/utils';

import { Box, Calendar, MnetUIBase, mnet } from 'mnet-ui-base';

const customHeading = deepMerge(mnet, {
  calendar: {
    heading: {
      level: '3',
    },
  },
});

export const CustomSizeCalendar = () => {
  const [date, setDate] = useState();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <MnetUIBase theme={customHeading}>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          onSelect={onSelect}
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
    </MnetUIBase>
  );
};

CustomSizeCalendar.storyName = 'Heading size';

export default {
  title: `Visualizations/Calendar/Heading size`,
};

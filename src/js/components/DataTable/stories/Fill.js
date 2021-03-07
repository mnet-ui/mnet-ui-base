import React from 'react';
import { MnetUIBase, Box, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, data } from './data';

const pinnedColumns = columns.map(c => ({ ...c }));
pinnedColumns[0].pin = true;

const myTheme = deepMerge(mnet, {
  table: {
    footer: {
      background: {
        color: 'background-back',
      },
    },
  },
  dataTable: {
    pinned: {
      header: {
        background: {
          opacity: 'medium',
        },
        extend: `backdrop-filter: blur(8px);`,
      },
      footer: {
        background: { color: 'light-2' },
      },
    },
  },
});

export const Fill = () => (
  <MnetUIBase theme={myTheme} full>
    <Box fill="vertical">
      <DataTable
        columns={pinnedColumns}
        data={data}
        step={10}
        fill
        pin
        background={{
          pinned: { color: 'background-contrast' },
        }}
      />
    </Box>
  </MnetUIBase>
);

Fill.storyName = 'Fill and pin';

export default {
  title: 'Visualizations/DataTable/Fill and pin',
};

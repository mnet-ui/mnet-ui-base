import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, MultiSelect } from 'mnet-ui-base';

const options = [
  {
    "id": 977,
    "label": "1x1",
  },
  {
    "id": 1,
    "label": "300x250",
  },
  {
    "id": 4,
    "label": "728x90",
  },
  {
    "id": 7,
    "label": "336x280",
  },
  {
    "id": 18,
    "label": "300x600",
  },
  {
    "id": 268,
    "label": "300x50",
  },
  {
    "id": 228,
    "label": "320x50",
  },
  {
    "id": 2,
    "label": "160x600",
  },
  {
    "id": 5,
    "label": "250x250",
  },
  {
    "id": 15046,
    "label": "320x100",
  },
  {
    "id": 15062,
    "label": "970x250",
  },
  {
    "id": 152,
    "label": "0x0",
  },
  {
    "id": 2139,
    "label": "1x7",
  },
  {
    "id": 2067,
    "label": "1x9",
  },
  {
    "id": 2109,
    "label": "2x2",
  },
  {
    "id": 2244,
    "label": "4x4",
  },
  {
    "id": 2124,
    "label": "10x10",
  },
  {
    "id": 2024,
    "label": "11x11",
  },
  {
    "id": 1337,
    "label": "20x620",
  },
  {
    "id": 1394,
    "label": "58x140",
  },
  {
    "id": 1460,
    "label": "60x468",
  },
  {
    "id": 665,
    "label": "65x60",
  },
  {
    "id": 1759,
    "label": "70x70",
  },
  {
    "id": 1760,
    "label": "80x62",
  },
  {
    "id": 2029,
    "label": "84x474",
  },
  {
    "id": 153,
    "label": "87x994",
  },
  {
    "id": 15039,
    "label": "88x91",
  },
  {
    "id": 1464,
    "label": "90x740",
  },
  {
    "id": 1428,
    "label": "90x810",
  },
  {
    "id": 1466,
    "label": "90x1158",
  },
  {
    "id": 2070,
    "label": "100x100",
  },
  {
    "id": 1349,
    "label": "105x355",
  },
  {
    "id": 409,
    "label": "111x960",
  },
  {
    "id": 1898,
    "label": "118x109",
  },
  {
    "id": 15038,
    "label": "120x30",
  },
  {
    "id": 15,
    "label": "120x60",
  },
  {
    "id": 14,
    "label": "120x90",
  },
  {
    "id": 391,
    "label": "120x200",
  },
  {
    "id": 16,
    "label": "120x240",
  },
  {
    "id": 114,
    "label": "120x300",
  },
  {
    "id": 1478,
    "label": "120x557",
  },
  {
    "id": 1306,
    "label": "120x576",
  },
  {
    "id": 3,
    "label": "120x600",
  },
  {
    "id": 2433,
    "label": "120x607",
  },
  {
    "id": 1387,
    "label": "120x800",
  },
  {
    "id": 15094,
    "label": "123x123",
  },
  {
    "id": 15106,
    "label": "123x456",
  },
  {
    "id": 2202,
    "label": "126x126",
  },
  {
    "id": 804,
    "label": "130x140",
  },
  {
    "id": 1347,
    "label": "130x640",
  },
  {
    "id": 2342,
    "label": "131x600",
  },
  {
    "id": 1990,
    "label": "135x170",
  },
  {
    "id": 1992,
    "label": "135x190",
  },
  {
    "id": 1395,
    "label": "140x58",
  },
  {
    "id": 15061,
    "label": "140x75",
  },
  {
    "id": 811,
    "label": "140x140",
  },
  {
    "id": 564,
    "label": "140x600",
  },
  {
    "id": 397,
    "label": "140x740",
  },
  {
    "id": 1343,
    "label": "145x800",
  },
  {
    "id": 1468,
    "label": "150x90",
  },
  {
    "id": 76,
    "label": "150x150",
  },
  {
    "id": 1956,
    "label": "150x180",
  },
  {
    "id": 1991,
    "label": "150x205",
  },
  {
    "id": 1993,
    "label": "150x225",
  },
  {
    "id": 132,
    "label": "150x250",
  },
  {
    "id": 75,
    "label": "150x300",
  },
  {
    "id": 1351,
    "label": "150x520",
  },
  {
    "id": 1350,
    "label": "150x550",
  },
  {
    "id": 221,
    "label": "155x250",
  },
  {
    "id": 1900,
    "label": "156x203",
  },
  {
    "id": 429,
    "label": "156x280",
  },
  {
    "id": 2327,
    "label": "156x620",
  },
  {
    "id": 203,
    "label": "159x270",
  },
  {
    "id": 2036,
    "label": "160x55",
  },
  {
    "id": 21,
    "label": "160x90",
  },
  {
    "id": 15092,
    "label": "160x175",
  },
  {
    "id": 2179,
    "label": "160x185",
  },
  {
    "id": 15085,
    "label": "160x350",
  },
  {
    "id": 2434,
    "label": "160x607",
  },
  {
    "id": 2437,
    "label": "160x609",
  },
  {
    "id": 1422,
    "label": "160x749",
  },
  {
    "id": 1400,
    "label": "160x900",
  },
  {
    "id": 2578,
    "label": "162x91",
  },
  {
    "id": 438,
    "label": "165x360",
  },
  {
    "id": 477,
    "label": "165x640",
  },
  {
    "id": 1341,
    "label": "167x77",
  },
  {
    "id": 2579,
    "label": "169x95",
  },
  {
    "id": 2374,
    "label": "170x710",
  },
  {
    "id": 1390,
    "label": "170x944",
  },
  {
    "id": 2131,
    "label": "174x98",
  },
  {
    "id": 193,
    "label": "175x270",
  },
  {
    "id": 2160,
    "label": "175x311",
  },
  {
    "id": 1775,
    "label": "175x840",
  },
  {
    "id": 870,
    "label": "179x245",
  },
  {
    "id": 149,
    "label": "180x45",
  },
  {
    "id": 32,
    "label": "180x140",
  },
  {
    "id": 8,
    "label": "180x150",
  },
  {
    "id": 150,
    "label": "180x170",
  },
  {
    "id": 64,
    "label": "182x200",
  },
  {
    "id": 376,
    "label": "182x263",
  },
  {
    "id": 408,
    "label": "185x35",
  },
  {
    "id": 2032,
    "label": "186x24",
  },
  {
    "id": 2153,
    "label": "189x270",
  },
  {
    "id": 1627,
    "label": "190x90",
  },
  {
    "id": 148,
    "label": "190x253",
  },
  {
    "id": 1749,
    "label": "190x673",
  },
  {
    "id": 124,
    "label": "191x283",
  },
  {
    "id": 1878,
    "label": "195x722",
  },
];

const Example = () => {
  const [value, setValue] = useState([]);
  const [isExcluded, setIncExc] = useState(null);

  return (
    <Box fill align="center" justify="start" pad="large">
      <MultiSelect
        options={options}
        value={value}
        labelKey="label"
        valueKey={{ key: 'label', reduce: true }}
        onValueChange={nextValue => {setValue(nextValue)}}
        layout="double-column"
        width="large"
        height="medium"
        searchPlaceholder="Search"
        searchable
        withOptionChips
        withInclusionExclusion
        isExcluded={isExcluded}
        onIncExcChange={nextIncExc => setIncExc(nextIncExc)}
        renderEmptySelected={<span>Empty</span>}
        withSelectAll
        multiSearchDelimiter=","
      />
    </Box>
  );
};

storiesOf('MultiSelect', module).add(
  'MultiSearch',
  () => <Example />,
);
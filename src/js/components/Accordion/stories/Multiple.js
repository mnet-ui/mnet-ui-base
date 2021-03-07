import React from 'react';

import { Accordion, AccordionPanel, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Multiple = () => (
  <MnetUIBase theme={mnet}>
    <Box>
      <Accordion multiple>
        <AccordionPanel label="Panel 1">
          <Box background="light-2" overflow="auto" height="medium">
            <Box height="large" flex={false}>
              Panel 1 contents
            </Box>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 2">
          <Box background="light-2" style={{ height: '50px' }}>
            Panel 2 contents
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 3">
          <Box background="light-2" style={{ height: '300px' }}>
            Panel 3 contents
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  </MnetUIBase>
);

Multiple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Accordion/Multiple',
};

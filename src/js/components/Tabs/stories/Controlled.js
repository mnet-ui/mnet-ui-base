import React from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Box, Tab, Tabs } from 'mnet-ui-base';

const ControlledTabs = () => {
  const [index, setIndex] = React.useState();

  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <>
      <Tabs activeIndex={index} onActive={onActive}>
        <Tab title="Tab 1">
          <Box margin="small" pad="large" align="center" background="accent-1">
            <Attraction size="xlarge" />
          </Box>
        </Tab>
        <Tab title="Tab 2">
          <Box margin="small" pad="large" align="center" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
        </Tab>
        <Tab title="Tab 3">
          <Box margin="small" pad="large" align="center" background="accent-3">
            <Car size="xlarge" />
          </Box>
        </Tab>
      </Tabs>
    </>
  );
};

storiesOf('Tabs', module).add('Controlled', () => <ControlledTabs />);

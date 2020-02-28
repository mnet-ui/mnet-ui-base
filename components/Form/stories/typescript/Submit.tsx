import React from 'react';
import { storiesOf } from '@storybook/react';
import isChromatic from 'storybook-chromatic/isChromatic';

import {
  Box,
  Button,
  CheckBox,
  MnetUIBase,
  Form,
  FormField,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
} from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const Example = () => (
  <MnetUIBase full theme={mnet}>
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          onReset={event => console.log(event)}
          //   onSubmit={({ value }) => console.log('Submit', value)}
        >
          <FormField
            label="Name"
            name="name"
            required
            validate={{ regexp: /^[a-z]/i }}
          />
          <FormField label="Email" name="email" type="email" required />
          <FormField
            label="Employee ID"
            name="employeeId"
            required
            validate={{ regexp: /^[0-9]{4,6}$/, message: '4-6 digits' }}
          />
          <FormField
            name="subscribe"
            component={CheckBox}
            pad
            label="Subscribe?"
          />
          <FormField
            name="ampm"
            component={RadioButtonGroup}
            pad
            options={['morning', 'evening']}
          />
          <FormField
            label="Size"
            name="size"
            component={Select}
            onChange={event => console.log(event)}
            options={['small', 'medium', 'large', 'xlarge']}
          />
          <FormField label="Comments" name="comments" component={TextArea} />
          <FormField
            label="Age"
            name="age"
            component={RangeInput}
            pad
            min={15}
            max={75}
          />
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </MnetUIBase>
);

if (!isChromatic()) {
  storiesOf('TypeScript/Form', module).add('All FormFields', () => <Example />);
}

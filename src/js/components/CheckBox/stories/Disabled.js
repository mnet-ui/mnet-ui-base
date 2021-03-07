import React, { useState } from 'react';

import { Box, CheckBox } from 'mnet-ui-base';

const SimpleCheckBox = ({ checked: checkedProp, ...rest }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = event => setChecked(event.target.checked);

  return (
    <>
      <Box align="center" pad="large">
        <CheckBox {...rest} checked={checked} onChange={onChange} />
      </Box>
    </>
  );
};

export const Disabled = () => (
  <SimpleCheckBox label="Choice" checked disabled />
);

export default {
  title: 'Input/CheckBox/Disabled',
};

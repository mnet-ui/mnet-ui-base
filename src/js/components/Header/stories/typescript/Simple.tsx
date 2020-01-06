import React from 'react';

import { Avatar, Anchor, Nav, MnetUIBase, Header } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const gravatarLink =
  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

export const Simple = () => (
  <MnetUIBase theme={mnet}>
    <Header background="light-4" pad="small">
      <Avatar src={gravatarLink} />
      <Nav direction="row">
        <Anchor label="Home" href="#" />
        <Anchor label="Profile" href="#" />
      </Nav>
    </Header>
  </MnetUIBase>
);

export default {
  title: 'Layout/Header/Simple',
};

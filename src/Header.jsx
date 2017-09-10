import React from 'react';
import { Grid, Menu, Icon } from 'semantic-ui-react';

function Header() {
  return (
    <Grid>
      <Grid.Column>
        <Menu pointing secondary size="huge">
          <Menu.Item><Icon name="sidebar" /></Menu.Item>
          <Menu.Item header>Recipitopia</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
}

export default Header;


import React from 'react';
import { Grid, Menu, Input } from 'semantic-ui-react';

function Header() {
  return (
    <Grid>
      <Grid.Column>
        <Menu pointing secondary size="huge" stackable>
          <Menu.Item header>
            Recipitopia
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              Create Recipe
            </Menu.Item>
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                focus
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </Grid>
  );
}

export default Header;


import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Menu, Input, Icon } from 'semantic-ui-react';

function Header(props) {
  return (
    <Grid>
      <Grid.Column>
        <Menu pointing secondary size="huge" stackable>
          <Menu.Item header>
            <Icon name="sidebar" onClick={props.toggleVisibility} />
            Recipitopia
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                icon={{ name: 'search', circular: true, link: true }}
                placeholder="Search for recipe..."
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </Grid>
  );
}

Header.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
};

export default Header;


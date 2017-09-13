import React from 'react';
import { Grid, Menu, Input } from 'semantic-ui-react';


class Header extends React.Component {
  state = {
    activeItem: '',
  }

  handleItemClick = (evt, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <div>
      <Grid>
        <Grid.Column>
          <Menu pointing secondary size="huge" stackable>
            <Menu.Item header href="/" name="home" active={this.state.activeItem === 'home'} onClick={this.handleItemClick}>
              Recipitopia
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item name="create" href="/recipinator" active={this.state.activeItem === 'create'} onClick={this.handleItemClick}>
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
      {this.props.children}
      </div>
    );
  }
}

export default Header;


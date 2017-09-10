import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu } from 'semantic-ui-react';

function SideNav(props) {
  return (
    <Sidebar as={Menu} animation="push" visible={props.visible} vertical>
      <Menu.Item header>
        Recipitopia
      </Menu.Item>
      <Menu.Item>
        View Recipes
      </Menu.Item>
      <Menu.Item>
        Create Recipe
      </Menu.Item>
    </Sidebar>
  );
}

SideNav.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default SideNav;

import React from 'react';
import { Sidebar, Menu, Input } from 'semantic-ui-react';

function SideNav() {
  return (
    <Sidebar as={Menu} animation="push" vertical>
      <Menu.Item>
        <Input
          icon={{ name: 'search', circular: true, link: true }}
          placeholder="Search for recipe..."
        />
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

export default SideNav;

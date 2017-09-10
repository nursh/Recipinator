import React from 'react';
import { Sidebar, Menu, Icon, Input } from 'semantic-ui-react';

function SidebarMain() {
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

export default SidebarMain;

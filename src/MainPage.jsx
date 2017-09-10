import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';

import Header from './Header.jsx';
import RecipeForm from './Forms/RecipeForm.jsx';


function MainPage(props) {
  return (
    <Sidebar.Pusher>
      <Header toggleVisibility={props.toggleVisibility} />
      <RecipeForm />
    </Sidebar.Pusher>
  );
}

MainPage.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
};

export default MainPage;

import React from 'react';
import { Sidebar } from 'semantic-ui-react';

import Header from './Header.jsx';
// import RecipeForm from './Forms/RecipeForm.jsx';
import RecipeCardsLayout from './RecipeCardsLayout.jsx';

function MainPage() {
  return (
    <Sidebar.Pusher>
      <Header />
      <RecipeCardsLayout />
      {/* <RecipeForm /> */}
    </Sidebar.Pusher>
  );
}


export default MainPage;

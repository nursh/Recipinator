import React from 'react';
import { } from 'semantic-ui-react';

import Header from './Header.jsx';
import RecipeForm from './Forms/RecipeForm.jsx';


function MainPage() {
  return (
    <div className="pusher">
      <Header />
      <RecipeForm />
    </div>
  );
}

export default MainPage;

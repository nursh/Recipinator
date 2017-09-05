import React from 'react';


import RecipeForm from './RecipeForm.jsx';
import Header from './Header.jsx';


function MainPage() {
  return (
    <div className="pusher">
      <Header />
      <RecipeForm />
    </div>
  );
}

export default MainPage;

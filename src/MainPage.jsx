import React from 'react';
import recipes from './assets.json';

import Header from './Header.jsx';
// import RecipeForm from './Forms/RecipeForm.jsx';
// import RecipeCardsLayout from './RecipeCardsLayout.jsx';
import RecipePage from './RecipePage.jsx';

function MainPage() {
  const [, recipe] = recipes;
  return (
    <div>
      <Header />
      <RecipePage
        title={recipe.main.title}
        description={recipe.main.description}
        image={require(`${recipe.main.imageFile}`)}
        prepTime={recipe.main.prepTime}
        cookingTime={recipe.main.cookingTime}
        directions={recipe.directions}
        keywords={recipe.keywords}
        ingredients={recipe.ingredients}
      />
      {/* <RecipeCardsLayout /> */}
      {/* <RecipeForm /> */}
    </div>
  );
}


export default MainPage;

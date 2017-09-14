import React from 'react';
import { Card, Container } from 'semantic-ui-react';


import RecipeCard from './RecipeCard.jsx';
import recipes from './assets.json';


function RecipeCardsLayout() {
  const RecipeCards = recipes.map(
    (recipe, id) => (<RecipeCard
      image={require(`${recipe.main.imageFile}`)}
      header={recipe.main.title}
      description={recipe.main.description}
      key={id}
      recipe={recipe}
      id={id}
    />),
  );
  return (
    <Container>
      <Card.Group>
        {RecipeCards}
      </Card.Group>
    </Container>
  );
}

export default RecipeCardsLayout;

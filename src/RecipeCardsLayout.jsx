import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import 'whatwg-fetch';


import RecipeCard from './RecipeCard.jsx';


class RecipeCardsLayout extends React.Component {
  state = {
    recipes: [],
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }))
      .catch(err => console.error(err))
  }

  render() {
    const RecipeCards = this.state.recipes.map(
      (recipe, id) => (<RecipeCard
        image={recipe.imageUrl}
        header={recipe.main.title}
        description={recipe.main.description}
        key={id}
        recipe={recipe}
        id={recipe.id}
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
 
}

export default RecipeCardsLayout;

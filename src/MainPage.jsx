import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './Header.jsx';
import RecipeForm from './Forms/RecipeForm.jsx';
import RecipeCardsLayout from './RecipeCardsLayout.jsx';
import RecipePage from './RecipePage.jsx';

function MainPage() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={RecipeCardsLayout} />
          <Route path="/recipe/:id" component={RecipePage} />
          <Route path="/recipinator" component={RecipeForm} />
        </Switch>
      </Header>
    </Router>
  );
}


export default MainPage;

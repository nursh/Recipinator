import React, { Component } from 'react';
import Loadable from 'react-loadable';


import MainForm from './MainForm.jsx';
import { store } from './formState';

const IngredientForm = Loadable({
  loader: () => import('./IngredientForm.jsx'),
  loading: () => null,
});

const DirectionForm = Loadable({
  loader: () => import('./DirectionForm.jsx'),
  loading: () => null,
});

const KeywordForm = Loadable({
  loader: () => import('./KeywordForm.jsx'),
  loading: () => null,
});

class RecipeForm extends Component {
  state = {
    page: 1,
  };

  nextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  prevPage = () => {
    this.setState(prevState => ({ page: prevState.page - 1 }));
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert('done');

    const recipe = store.getState();
    console.log(recipe);
    // this.postData(recipe);
  }

  postData = (recipe) => {
    fetch('/recipe', {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  }

  render() {
    const formData = store.getState();
    const { main, ingredients, keywords, directions } = formData;
    return (
      <div className="ui container">
        <div className="ui grid centered">

          <div className="row">
            <div className="sixteen wide mobile twelve wide tablet eight wide computer column">
              <div className="ui very raised teal segment">

                <h2 className="ui teal horizontal divider header">
                  Recipinator
                </h2>
                { this.state.page === 1 &&
                <MainForm
                  onNextPage={this.nextPage}
                  main={main}
                /> }

                { this.state.page === 2 &&
                <IngredientForm
                  onPrevPage={this.prevPage}
                  onNextPage={this.nextPage}
                  ingredients={ingredients}
                /> }

                { this.state.page === 3 &&
                <DirectionForm
                  onPrevPage={this.prevPage}
                  onNextPage={this.nextPage}
                  directions={directions}
                /> }

                { this.state.page === 4 &&
                <KeywordForm
                  onPrevPage={this.prevPage}
                  onSubmit={this.handleSubmit}
                  keywords={keywords}
                /> }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default RecipeForm;

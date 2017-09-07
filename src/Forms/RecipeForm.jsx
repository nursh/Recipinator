import React, { Component } from 'react';
import Loadable from 'react-loadable';


import MainForm from './MainForm.jsx';

const IngredientForm = Loadable({
  loader: () => System.import('./IngredientForm.jsx'),
  loading: () => null,
});

const DirectionForm = Loadable({
  loader: () => System.import('./DirectionForm.jsx'),
  loading: () => null,
});

const KeywordForm = Loadable({
  loader: () => System.import('./KeywordForm.jsx'),
  loading: () => null,
});

class RecipeForm extends Component {
  state = {
    page: 1,
    fields: {
      title: '',
      description: '',
      imageUrl: '',
      prepTime: '',
      cookTime: '',
      ingredients: [],
      directions: [],
    },
    fieldErrors: {}
  };

  nextPage = () => this.setState(prevState => ({ page: prevState.page + 1 }));

  previousPage = () => this.setState(prevState => ({ page: prevState.page - 1 }));

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.validate()) return;

    const recipe = this.state.fields;
    this.setState({
      fields: {
        title: '',
        description: '',
        imageUrl: '',
        prepTime: '',
        cookTime: '',
        ingredients: [],
        directions: [],
      },
      fieldErrors: {},
    });
    this.postData(recipe);
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

  validate = () => {
    const recipe = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errorMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    // for (const prop in recipe) {
    //   if (prop !== 'weight') {
    //     if (!workout[prop]) return true;
    //   }
    // }

    if (errorMessages.length) return true;
    return false;
  }

  render() {
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
                <MainForm onSubmit={this.nextPage} /> }

                { this.state.page === 2 &&
                <IngredientForm onPreviousPage={this.previousPage} onSubmit={this.nextPage} /> }

                { this.state.page === 3 &&
                <DirectionForm onPreviousPage={this.previousPage} onSubmit={this.nextPage} /> }

                { this.state.page === 4 &&
                <KeywordForm onPreviousPage={this.previousPage} onSubmit={this.handleSubmit} /> }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default RecipeForm;

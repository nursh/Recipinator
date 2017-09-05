import React, { Component } from 'react';


import MainForm from './MainForm.jsx';
import IngredientForm from './IngredientForm.jsx';
import DirectionForm from './DirectionForm.jsx';
import KeywordForm from './KeywordForm.jsx';

class RecipeForm extends Component{
  
  state = {
    page: 1,
  };

  nextPage = () => this.setState((prevState) => ({ page: prevState.page + 1 }));

  previousPage = () => this.setState((prevState) => ({ page: prevState.page - 1 }));

  handleSubmit = () => alert('All Done');

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
                { this.state.page === 1 && <MainForm onSubmit={this.nextPage} /> }
                { this.state.page === 2 && <IngredientForm onPreviousPage={this.previousPage} onSubmit={this.nextPage} /> }
                { this.state.page === 3 && <DirectionForm onPreviousPage={this.previousPage} onSubmit={this.nextPage} /> }
                { this.state.page === 4 && <KeywordForm onPreviousPage={this.previousPage} onSubmit={this.handleSubmit} /> }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default RecipeForm;

import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Header, Grid, Container, Segment } from 'semantic-ui-react';
import uuid from 'uuid/v4';

import MainForm from './MainForm.jsx';
import IngredientForm from './IngredientForm.jsx';
import DirectionForm from './DirectionForm.jsx';
import KeywordForm from './KeywordForm.jsx';
import ImageUploadForm from './ImageUploadForm.jsx';
import { store } from './formState';

class RecipeForm extends Component {
  state = {
    page: 1,
    id: uuid(),
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
    const { main } = recipe;
    main.totalTime = parseInt(main.cookingTime, 10) + parseInt(main.prepTime, 10);
    recipe.main.totalTime = main.totalTime;
    recipe.id = this.state.id;
    this.postData(recipe);
  }

  postData = (recipe) => {
    fetch('/recipify', {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    this.setState({ page: 1 });
  }

  render() {
    const formData = store.getState();
    const { main, ingredients, keywords, directions, imageUrl } = formData;
    return (
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={12} computer={8}>
              <Segment color="teal" raised>

                <Header as="h2" color="teal" textAlign="center">
                  Recipinator
                </Header>

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
                  onNextPage={this.nextPage}
                  keywords={keywords}
                /> }

                { this.state.page === 5 &&
                  <ImageUploadForm
                    onPrevPage={this.prevPage}
                    onSubmit={this.handleSubmit}
                    url={imageUrl}
                    id={this.state.id}
                /> }
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default RecipeForm;

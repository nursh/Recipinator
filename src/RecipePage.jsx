import React from 'react';
import { Container,
  Grid,
  Image,
  Header,
  List,
  Divider,
  Label,
  Segment,
  Rating,
} from 'semantic-ui-react';
import 'whatwg-fetch';


class RecipePage extends React.Component {
  state = {
    recipe: '', 
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    fetch(`/api/recipe/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(recipe => this.setState({ recipe }))
      .catch(err => console.error('Recipe not found'));
  }

  render() {
    const recipe = this.state.recipe;
    if (!recipe) {
      return  <div>Loading...</div>
    } else {
      return (
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={6} tablet={12} mobile={16}>
                <Image src={recipe.imageUrl} size="large" shape="rounded" />
              </Grid.Column>
              <Grid.Column computer={6} tablet={12} mobile={16}>
                <Header as="h2">{recipe.main.title}</Header>
                <Rating icon="heart" defaultRating={5} maxRating={5} size="large" />
                <Divider hidden />
                <div>{recipe.main.description}</div>
                <Divider hidden />
                <Label.Group>
                  Keywords: {recipe.keywords.map((item, i) => (<Label key={i}>{item}</Label>))}
                </Label.Group>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column computer={8} tablet={12} mobile={16}>
                <Header as="h3" icon="time" content="Recipe prep and cooking duration" />
                <Divider hidden />
                <Segment.Group horizontal>
                  <Segment color="red">
                    <Header as="h5" content="Prep Time" />
                    {recipe.main.prepTime} mins
                  </Segment>
                  <Segment color="yellow">
                    <Header as="h5" content="Cooking Time" />
                    {recipe.main.cookingTime} mins
                  </Segment>
                  <Segment color="green">
                    <Header as="h5" content="Total Time" />
                    {recipe.main.totalTime} mins
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as="h3" icon="shopping basket" content="Ingredients" />
                <Divider hidden />
                <List bulleted>
                  {recipe.ingredients.map((item, i) => (<List.Item key={i}>{item}</List.Item>))}
                </List>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as="h3" icon="map outline" content="Directions" />
                <Divider hidden />
                <List>
                  {recipe.directions.map((item, i) => (
                    <List.Item key={i}>
                      <List.Icon name="space shuttle" />
                      <List.Content>{item}</List.Content>
                    </List.Item>),
                  )}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Container>
      );
    }
  }
}

export default RecipePage;


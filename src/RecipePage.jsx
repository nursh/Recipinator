import React from 'react';
import { Container,
  Grid,
  Image,
  Header,
  List,
  Divider,
  Label,
  Segment,
  Item,
  Rating,
} from 'semantic-ui-react';


const RecipePage = recipe => (
  <Container>
    <Grid>

      <Grid.Row>
        <Grid.Column computer={6} mobile={16}>
          <Image src={recipe.image} size="large" shape="rounded" />
        </Grid.Column>
        <Grid.Column computer={6} mobile={16}>
          <Header as="h2">{recipe.title}</Header>
          <Rating icon="heart" defaultRating={5} maxRating={5} size="large" />
          <Divider hidden />
          <div>{recipe.description}</div>
          <Divider hidden />
          <Label.Group>
            Keywords: {recipe.keywords.map((item, i) => (<Label key={i}>{item}</Label>))}
          </Label.Group>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column computer={8} mobile={16}>
          <Header as="h3" icon="time" content="Recipe Making Duration" />
          <Divider hidden />
          <Segment.Group horizontal>
            <Segment color="red">
              <Header as="h5" content="Prep Time" />
              {recipe.prepTime} mins
            </Segment>
            <Segment color="yellow">
              <Header as="h5" content="Cooking Time" />
              {recipe.cookingTime} mins
            </Segment>
            <Segment color="green">
              <Header as="h5" content="Total Time" />
              120 mins
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

export default RecipePage;


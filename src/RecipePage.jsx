import React from 'react';
import { Container, Grid, Image, Header, List, Divider } from 'semantic-ui-react';


const RecipePage = recipe => (
  <Container>
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Image src={recipe.image} size="medium" shape="rounded" bordered />
          <Header as="h3" icon="shopping basket" content="Ingredients" />
          <Divider hidden />
          <List bulleted>
            {recipe.ingredients.map((item, i) => (<List.Item key={i}>{item}</List.Item>))}
          </List>
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


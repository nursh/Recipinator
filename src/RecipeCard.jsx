import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Divider, Rating } from 'semantic-ui-react';


function RecipeCard(props) {
  return (
    <Card centered raised>
      <Image src={props.image} fluid />
      <Card.Content>
        <Card.Header>
          {props.header}
        </Card.Header>
        <Card.Meta>
          <Rating icon="heart" defaultRating={5} maxRating={5} />
        </Card.Meta>
        <Divider hidden />
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeCard;

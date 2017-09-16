import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image, Divider, Rating } from 'semantic-ui-react';


function RecipeCard(props) {
  return (
    <Card centered raised>
      <Link
        to={`/recipe/${props.id}`}
        className="card"
      >
        <Image src={props.image} fluid />
        <Card.Content>
          <Card.Header as="h4">
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
      </Link>
    </Card>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeCard;

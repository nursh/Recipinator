import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import 'whatwg-fetch';


export default class ImageUploadForm extends React.Component {

  state = {
    imageFile: '',
    id: this.props.id,
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Image submitted');
    // Upload File to firebase storage
    // get the url of the image after it has been saved
    // dispatch to store to save url
  }

  handleImage = (evt) => {
    const imageFile = evt.target.files[0];
    this.setState({ imageFile });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <Form.Field required>
          <label htmlFor="imageFile">Image File</label>
          <Input
            name="imageFile"
            type="file"
            id="imageFile"
            accept="image/*"
            onChange={this.handleImage}
          />
        </Form.Field>

        <Form.Field>
          <Button
            color="teal"
            floated="left"
            labelPosition="left"
            icon="arrow left"
            onClick={this.props.onPrevPage}
            content="Previous"
            type="button"
          />
          <Button
            color="teal"
            floated="right"
            content="Upload Image"
            type="submit"
          />
        </Form.Field>

        <Form.Field />

        <Form.Field>
          <Button
            color="teal"
            content="Create Recipe"
            fluid
            type="submit"
            onClick={this.props.onSubmit}
          />
        </Form.Field>

      </Form>
    );
  }
}

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
    console.log(this.state.imageFile);
    const formData = new FormData();
    formData.append('imageFile', this.state.imageFile);
    formData.append('id', this.state.id);

    fetch('/upload', {
      method: 'post',
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
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
            floated="right"
            content="Upload Image"
            type="submit"
          />
        </Form.Field>

        <Form.Field />
      </Form>
    );
  }
}

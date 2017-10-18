import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import 'whatwg-fetch';
import firebase from '../../firebaseConfig';
import { store } from './formState';

const storage = firebase.storage();
const storageRef = storage.ref();

export default class ImageUploadForm extends React.Component {

  state = {
    imageFile: '',
    id: this.props.id,
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Image submitted');
    const { imageFile, id: fileId } = this.state;
    const fileName = `images/${fileId}`;
    const uploadTask = storageRef.child(fileName).put(imageFile);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      error => console.log('Error during upload'),
      () => {
        const downloadURL = uploadTask.snapshot.downloadURL;
        store.dispatch({
          type: 'URL',
          imageUrl: downloadURL,
        });
      }
    )

  }

  handleImage = (evt) => {
    const imageFile = evt.target.files[0];
    this.setState({ imageFile });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
            onClick={this.handleSubmit}
            type="submit"
          />
        </Form.Field>

        <Form.Field />

        <Form.Field>
          <Button
            color="teal"
            content="Create Recipe"
            fluid
            type="button"
            onClick={this.props.onSubmit}
          />
        </Form.Field>

      </Form>
    );
  }
}

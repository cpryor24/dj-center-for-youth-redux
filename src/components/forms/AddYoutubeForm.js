import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addYoutube } from '../../redux/actions/youtube.actions';

class AddYoutubeForm extends Component {
  state = {
    video_url: ''
  }

  handleVideoURLChange = (e) => {
    this.setState({
      video_url: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addYoutube(this.state);
    this.setState({
      video_url: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="video_url">Video URL</Label>
          <Input
            type="text"
            name="video_url"
            id="video_url"
            onChange={this.handleVideoURLChange}
            value={this.state.video_url}
            placeholder="Enter Video URL" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addYoutube })(AddYoutubeForm);

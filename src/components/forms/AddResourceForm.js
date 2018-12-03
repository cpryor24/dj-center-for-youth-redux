import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addResource } from '../../redux/actions/resources.actions';

class AddResourceForm extends Component {
  state = {
    business_name: '',
    url: ''
  }

  handleNameChange = (e) => {
    this.setState({
      business_name: e.target.value
    })
  }

  handleURLChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addResource(this.state);
    this.setState({
      url: '',
      business_name: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="business_name">Business Name</Label>
          <Input
            type="text"
            name="business_name"
            id="business_name"
            onChange={this.handleNameChange}
            value={this.state.business_name}
            placeholder="Enter Business Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="url">URL</Label>
          <Input
            type="text"
            name="url"
            id="url"
            onChange={this.handleURLChange}
            value={this.state.url}
            placeholder="Enter Business URL" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addResource })(AddResourceForm);

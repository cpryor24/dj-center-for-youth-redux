import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addCommunityPartner } from '../../redux/actions/community.actions';

class AddCommunityForm extends Component {
  state = {
    company_name: '',
    url: ''
  }

  handleCompanyNameChange = (e) => {
    this.setState({
      company_name: e.target.value
    })
  }

  handleURLChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCommunityPartner(this.state)
    this.setState({
      company_name: '',
      url: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="company_name">Company Name</Label>
          <Input
            type="text"
            name="company_name"
            id="company_name"
            onChange={this.handleCompanyNameChange}
            value={this.state.company_name}
            placeholder="Enter Company Name"
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
            placeholder="Enter URL" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addCommunityPartner })(AddCommunityForm);

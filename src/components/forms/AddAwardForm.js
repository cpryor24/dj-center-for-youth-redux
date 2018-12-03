import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addAward } from '../../redux/actions/awards.actions';

class AddAwardForm extends Component {
  state = {
    year: '',
    award_name: ''
  }

  handleYearChange = (e) => {
    this.setState({
      year: e.target.value
    })
  }

  handleAwardsChange = (e) => {
    this.setState({
      award_name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addAward(this.state)
    this.setState({
      year: '',
      award_name: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="year">Year</Label>
          <Input
            type="number"
            name="year"
            id="year"
            onChange={this.handleYearChange}
            value={this.state.year}
            placeholder="Enter Year"
          />
        </FormGroup>
        <FormGroup>
          <Label for="award_name">Name of Award</Label>
          <Input
            type="text"
            name="award_name"
            id="award_name"
            onChange={this.handleAwardsChange}
            value={this.state.award_name}
            placeholder="Enter name of award" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addAward })(AddAwardForm);

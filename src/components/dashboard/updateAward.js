import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {
  deleteAward,
  editAward
} from '../../redux/actions/awards.actions';

class UpdateAward extends Component {

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
    console.log(this.state)
    this.props.editAward(this.props.award.id, this.state.year, this.state.award_name)
    // this.setState({
    //   year: '',
    //   award_name: ''
    // })
    // e.target.reset();
  }

  handleDeleteClick = (id) => {
    this.props.deleteAward(id)
  }

  render() {
    console.log('state', this.state)
    console.log('update props', this.props.award)
    return (
      <div>
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
          <Button type="submit">Edit Award</Button>
          <Button onClick={e => this.handleDeleteClick(this.props.award.id)}>Delete Award</Button>
        </Form>
        <p> </p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    award: state.awards.filter(award => award.id === Number(props.match.params.id))
  }
}

export default connect(mapStateToProps, {deleteAward, editAward})(UpdateAward)

import React from 'react';
import AddAwardForm from '../forms/AddAwardForm';
import { connect } from 'react-redux';
// import { fetchAwards } from '../../redux/actions/awards.actions';

const AwardsList = (props) => {
  // props.fetchAwards()
  return (
    <div>
      <AddAwardForm />
    </div>
  )
}

export default connect(null)(AwardsList);

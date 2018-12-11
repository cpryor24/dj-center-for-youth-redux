import React from 'react';
import AddAwardForm from '../forms/AddAwardForm';
import Award from '../single/award';
import { connect } from 'react-redux';

const AwardsList = (props) => {
  let listOfAwards = props.awards.map(award => <Award key={award.id} award={award} />)
  return (
    <div>
      <AddAwardForm />
      {listOfAwards}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    awards: state.awards
  }
}

export default connect(mapStateToProps)(AwardsList);

import React from 'react';
import { connect } from 'react-redux';
import { deleteServiceLearning } from '../../redux/actions/servicelearning.actions';

const ServiceLearning = (props) => {

  let handleClick = id => {
    props.deleteServiceLearning(id)
  }

  return (
    <div>
      <p> {props.service.title}  {props.service.description}<button onClick={() => handleClick(props.service.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, {deleteServiceLearning})(ServiceLearning);

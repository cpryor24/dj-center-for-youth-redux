import React from 'react';
import { connect } from 'react-redux';
import { deleteGrantor } from '../../redux/actions/grantors.actions';

const Grantors = (props) => {

  let handleClick = (id) => {
    props.deleteGrantor(id);
  }

  return (
    <div>
    <p> {props.grantor.title}: {props.grantor.description} <button onClick={() => handleClick(props.grantor.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, {deleteGrantor})(Grantors);

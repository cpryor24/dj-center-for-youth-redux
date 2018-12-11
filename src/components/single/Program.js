import React from 'react'
import { connect } from 'react-redux';
import { deleteProgram } from '../../redux/actions/programs.actions';

const Program = (props) => {

  let handleClick = id => {
    props.deleteProgram(id)
  }

  return (
    <div>
      <p> {props.program.title}  {props.program.description}<button onClick={() => handleClick(props.program.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, { deleteProgram})(Program);

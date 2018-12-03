import React from 'react';
import AddBoardForm from '../forms/AddBoardForm';
import { connect } from 'react-redux';

const BoardList = (props) => {
  return (
    <div>
      <AddBoardForm />
    </div>
  )
}

export default connect(null)(BoardList);

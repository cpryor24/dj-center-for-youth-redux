import React from 'react';
import AddProgramForm from '../forms/AddProgramForm';
import { connect } from 'react-redux';

const ProgramsList = (props) => {
  return (
    <div>
      <AddProgramForm />
    </div>
  )
}

export default connect(null)(ProgramsList);

import React from 'react';
import AddSecondaryProgramForm from '../forms/AddSecondaryProgramForm';
import { connect } from 'react-redux';

const SecondaryProgramsList = (props) => {
  return (
    <div>
      <AddSecondaryProgramForm />
    </div>
  )
}

export default connect(null)(SecondaryProgramsList);

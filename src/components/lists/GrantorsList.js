import React from 'react';
import AddGrantorForm from '../forms/AddGrantorForm';
import { connect } from 'react-redux';

const GrantorsList = (props) => {
  return (
    <div>
      <AddGrantorForm />
    </div>
  )
}

export default connect(null)(GrantorsList);

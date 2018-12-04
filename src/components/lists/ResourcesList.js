import React from 'react';
import AddResourceForm from '../forms/AddResourceForm';
import { connect } from 'react-redux';

const ResourcesList = () => {
  return (
    <div>
      <AddResourceForm />
    </div>
  )
}

export default connect(null)(ResourcesList);

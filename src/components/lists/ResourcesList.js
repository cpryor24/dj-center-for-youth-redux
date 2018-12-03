import React from 'react';
import AddResourceForm from '../forms/AddResourceForm';
import { connect } from 'react-redux';
// import { fetchResources } from '../../redux/actions/resources.actions';

const ResourcesList = (props) => {
  // props.fetchResources()
  return (
    <div>
      <AddResourceForm />
    </div>
  )
}

export default connect(null)(ResourcesList);

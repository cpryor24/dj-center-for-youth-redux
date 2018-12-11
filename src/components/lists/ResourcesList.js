import React from 'react';
import AddResourceForm from '../forms/AddResourceForm';
import Resource from '../single/resource';
import { connect } from 'react-redux';

const ResourcesList = (props) => {
  let listOfResources = props.resources.map(resource => <Resource key={resource.id} resource={resource} />)

  return (
    <div>
      <AddResourceForm />
      { listOfResources }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    resources: state.resources
  }
}

export default connect(mapStateToProps)(ResourcesList);

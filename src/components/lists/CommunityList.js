import React from 'react';
import AddCommunityForm from '../forms/AddCommunityForm';
import { connect } from 'react-redux';

const CommunityList = (props) => {
  return (
    <div>
      <AddCommunityForm />
    </div>
  )
}

export default connect(null)(CommunityList);

import React from 'react';
import AddServiceLearningForm from '../forms/AddServiceLearningForm';
import { connect } from 'react-redux';

const ServiceLearningList = (props) => {
  return (
    <div>
      <AddServiceLearningForm />
    </div>
  )
}

export default connect(null)(ServiceLearningList);

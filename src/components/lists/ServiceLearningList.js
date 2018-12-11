import React from 'react';
import AddServiceLearningForm from '../forms/AddServiceLearningForm';
import ServiceLearning from '../single/servicelearning';
import { connect } from 'react-redux';

const ServiceLearningList = (props) => {
  let listOfServiceLearning = props.servicelearning.map(slprogram => <ServiceLearning key={slprogram.id} service={slprogram}/>)
  return (
    <div>
      <AddServiceLearningForm />
      {listOfServiceLearning}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    servicelearning: state.serviceLearning
  }
}

export default connect(mapStateToProps)(ServiceLearningList);

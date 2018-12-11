import React from 'react';
import AddGrantorForm from '../forms/AddGrantorForm';
import Grantor from '../single/grantor';
import { connect } from 'react-redux';

const GrantorsList = (props) => {
  let listOfGrantors = props.grantors.map(grantor => <Grantor key={grantor.id} grantor={grantor} />)

  return (
    <div>
      <AddGrantorForm />
      {listOfGrantors}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    grantors: state.grantors
  }
}
export default connect(mapStateToProps)(GrantorsList);

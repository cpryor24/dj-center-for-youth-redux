import React from 'react';
import AddCommunityForm from '../forms/AddCommunityForm';
import Community from '../single/community';
import { connect } from 'react-redux';

const CommunityList = (props) => {
  let listOfCommunityPartners = props.community.map(partner => <Community key={partner.id} communityPartner={partner} /> )
  return (
    <div>
      <AddCommunityForm />
      {listOfCommunityPartners}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    community: state.communityPartners
  }
}
export default connect(mapStateToProps)(CommunityList);

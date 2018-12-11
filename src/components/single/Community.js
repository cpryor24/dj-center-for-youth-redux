import React from 'react';
import {connect} from 'react-redux';
import {deleteCommunityPartner} from '../../redux/actions/community.actions';

const Community = (props) => {

  let handleClick = (id) => {
    props.deleteCommunityPartner(id);
  }
  
  return (
    <div>
    <p> {props.communityPartner.company_name}: {props.communityPartner.url} <button onClick={() => handleClick(props.communityPartner.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, {deleteCommunityPartner})(Community);

import React from 'react';
import {connect} from 'react-redux';
import {deleteAward} from '../../redux/actions/awards.actions';
import {Link, withRouter} from 'react-router-dom';

const Award = (props) => {

  let handleClick = (id) => {
    props.deleteAward(id);
  }

  if(props.isLoggedIn !== true) {
    return (
      <div>
          <p>
            {props.award.year} <Link to={`/awards/${props.award.id}`}>{props.award.award_name}</Link> <button onClick={e => handleClick(props.award.id)}>Delete Award</button>
          </p>
      </div>
    )
  } else {
      return (
        <p>{props.award.year} {props.award.award_name}</p>
      )
  }
}

export default withRouter(
  connect(null, {deleteAward})(Award)
)

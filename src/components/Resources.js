import React from 'react';
import { connect } from 'react-redux';
import { fetchResources } from '../redux/actions/resources.actions';


const Resources = () => {
}

export default connect(null, {fetchResources})(Resources);

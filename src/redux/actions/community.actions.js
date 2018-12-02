import axios from 'axios';
export const FETCH_COMMUNITY_PARTNERS_SUCCESS = 'FETCH_COMMUNITY_PARTNERS_SUCCESS';
export const ADD_COMMUNITY_PARTNER = 'ADD_COMMUNITY_PARTNER';
export const EDIT_COMMUNITY_PARTNER = 'EDIT_COMMUNITY_PARTNER'
export const DELETE_COMMUNITY_PARTNER = 'DELETE_COMMUNITY_PARTNER';

const apiURL = 'http://localhost:8000/communitypartners';

export const addCommunityPartner= (title, url) => {
  return dispatch => {
    axios
      .post(`${apiURL}/add`, {title, url })
      .then(res => dispatch({
        type: ADD_COMMUNITY_PARTNER,
        payload: res.data
      }))
  }
}

export const deleteCommunityPartner= id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_COMMUNITY_PARTNER,
        payload: res.data
      }));
  };
}

export const editCommunityPartner= id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_COMMUNITY_PARTNER,
        payload: res.data
      }))
  }
}

export const fetchCommunityPartners = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_COMMUNITY_PARTNERS_SUCCESS,
        payload: res.data
      }));
  };
}

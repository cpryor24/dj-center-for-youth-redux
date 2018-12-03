import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT
} from '../actions/users.actions';

const initialState = {
  user: {},
  isLoggedIn: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoggedIn: true
      }

    case USER_LOGIN_FAILED:
      return {
        user: {},
        isLoggedIn: false
      }

    case USER_LOGOUT:
      return {
        user: {},
        isLoggedIn: false
      }

    default:
      return state;
  }
}

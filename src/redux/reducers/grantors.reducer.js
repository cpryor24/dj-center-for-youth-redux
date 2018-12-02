import {
    ADD_GRANTOR,
    DELETE_GRANTOR,
    EDIT_GRANTOR,
    FETCH_GRANTORS_SUCCESS
} from '../actions/grantors.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_GRANTOR:
      return [...state, action.payload];

    case DELETE_GRANTOR:
      let selectedId = action.payload;
      return state.filter(event => event.id !== Number(selectedId));

    case EDIT_GRANTOR:
      let theSelectedId = action.payload;
      return state.filter(event => event.id !== Number(theSelectedId));

    case FETCH_GRANTORS_SUCCESS:
      return action.payload;
      
    default:
      return state;
  }
}

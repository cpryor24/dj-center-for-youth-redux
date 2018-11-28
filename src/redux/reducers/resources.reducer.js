import {
  ADD_RESOURCE,
  DELETE_RESOURCE,
  EDIT_RESOURCE,
  FETCH_RESOURCES_SUCCESS
} from '../actions/resources.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {

    case ADD_RESOURCE:
      return [...state, action.payload];

    case DELETE_RESOURCE:
      let selectedItemId = action.payload;
      return state.filter(resource => resource.id !== Number(selectedItemId));

    case EDIT_RESOURCE:
      let selectedId = action.payload;
      return state.filter(resource => resource.id !== Number(selectedId))

    case FETCH_RESOURCES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

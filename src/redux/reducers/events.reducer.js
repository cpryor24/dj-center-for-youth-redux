import {
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  FETCH_EVENTS_SUCCESS
} from '../actions/events.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_EVENT:
      return [...state, action.payload];

    case DELETE_EVENT:
      let selectedId = action.payload;
      return state.filter(event => event.id !== Number(selectedId));

    case EDIT_EVENT:
      let theSelectedId = action.payload;
      return state.filter(event => event.id !== Number(theSelectedId));

    case FETCH_EVENTS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

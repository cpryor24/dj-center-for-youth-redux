import {
  ADD_YOUTUBE,
  DELETE_YOUTUBE,
  EDIT_YOUTUBE,
  FETCH_YOUTUBE_SUCCESS
} from '../actions/youtube.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_YOUTUBE:
      return [...state, action.payload];

    case DELETE_YOUTUBE:
      let selectedId = action.payload;
      return state.filter(video => video.id !== Number(selectedId));

    case EDIT_YOUTUBE:
      let theSelectedId = action.payload;
      return state.filter(video => video.id !== Number(theSelectedId));

    case FETCH_YOUTUBE_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

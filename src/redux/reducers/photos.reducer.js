import {
  ADD_PHOTO,
  DELETE_PHOTO,
  EDIT_PHOTO,
  FETCH_PHOTOS_SUCCESS
} from '../actions.photos.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PHOTO:
      return [...state, action.payload];

    case DELETE_PHOTO:
      let selectedId = action.payload;
      return state.filter(photo => photo.id !== Number(selectedId));

    case EDIT_PHOTO:
      let theSelectedId = action.payload;
      return state.filter(photo => photo.id !== Number(theSelectedId));

    case FETCH_PHOTOS_SUCCESS:
      return action.payload;
      
    default:
      return state;
  }
}

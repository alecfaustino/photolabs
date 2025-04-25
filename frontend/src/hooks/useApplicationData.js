import { useReducer } from "react";
import { ACTIONS, reducer } from "./applicatoinDataReducers";

const useApplicationData = () => {

  const initialState = {
    favorites: [],
    photos: [],
    topic: [],
    selectedPhoto: null,
    showModal: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = photoId => {
    if (state.favorites.includes(photoId)) {
      // if it is in the array, remove it
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      // if it is not, add it
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  const onPhotoSelect = photo => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, showModal: false });
  };

  const onLoadTopic = topic => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, topic });
  };

  const setPhotoData = photos => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onLoadTopic,
    setPhotoData
  };
};

export default useApplicationData;
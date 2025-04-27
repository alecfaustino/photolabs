import { useReducer, useEffect } from "react";
import { ACTIONS, reducer } from "./applicationDataReducers";

const useApplicationData = () => {

  const initialState = {
    favorites: [],
    selectedPhoto: null,
    showModal: false,
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})})
      .catch(error => console.error('Fetch error:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
      .catch(error => console.error('Fetch error:', error));
  }, []);
  
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
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
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
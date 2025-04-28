import { useReducer, useEffect } from "react";
import { ACTIONS, reducer } from "./applicationDataReducers";

const useApplicationData = () => {

  const initialState = {
    favorites: [],
    selectedPhoto: null,
    showModal: false,
    photoData: [],
    topicData: [],
    selectedTopic: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch photos on initial render
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  // fetch topics on initial render
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  
  //handling clicking fav
  const updateToFavPhotoIds = photoId => {
    if (state.favorites.includes(photoId)) {
      // if it is in the array, remove it
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      // if it is not, add it
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };
  
  // opening the modal
  const onPhotoSelect = photo => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };
  
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS, showModal: false });
  };
  
  const onTopicSelect = (topic) => {
    // update selectedTopic
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topic });
  };
  
  // fetch photos of a topic when the selectedTopic state changes
  useEffect(() => {
    if (state.selectedTopic && state.selectedTopic.id) {
      fetch(`http://localhost:8001/api/topics/${state.selectedTopic.id}/photos`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
        .catch(error => console.error('Fetch error:', error));
    }
  }, [state.selectedTopic]);

  const onDisplayFavorites = (favoritePhotos) => {
    dispatch({ type: ACTIONS.RESET_SELECTED_TOPIC })

    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: favoritePhotos});
  }

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onTopicSelect,
    onDisplayFavorites
  };
};

export default useApplicationData;
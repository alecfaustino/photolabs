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

  useEffect(() => {
    if (state.selectedTopic && state.selectedTopic.id) {
      fetch(`http://localhost:8001/api/topics/${state.selectedTopic.id}/photos`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
        .catch(error => console.error('Fetch error:', error));
    }
  }, [state.selectedTopic]);
  
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
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topic });
  };
  
  const setPhotoData = photos => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
  };
  
  const onTopicSelect = (topic) => {
    // update selectedTopic
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topic });
    // Fetch photos for that topic
    fetch(`http://localhost:8001/api/topics/${topic.id}/photos`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch(error => console.error('Fetch error:', error));
  };


  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onLoadTopic,
    setPhotoData,
    onTopicSelect
  };
};

export default useApplicationData;
import { useReducer, useEffect} from "react";
import { ACTIONS, reducer } from "./applicationDataReducers";

const useApplicationData = () => {

  const initialState = {
    favorites: [],
    selectedPhoto: null,
    showModal: false,
    photoData: [],
    topicData: [],
    selectedTopic: null,
    allPhotoData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
   

  /**
   * fetch photos on initial render
   */
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_ALL_PHOTO_DATA, payload: data });
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data});})
      .catch(error => console.error('Fetch error:', error));
  }, []);

  /**
   * fetch topics on initial render
   */
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  
  /**
   * 
   * @param {*} photoId - the key of the photo selected(it's photo ID)
   */
  const updateToFavPhotoIds = photoId => {
    if (state.favorites.includes(photoId)) {
      // if it is in the array, remove it
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      // if it is not, add it
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
      
    }
  };
  
  /**
   * opens the modal
   * @param {*} photo - a single photo object from photoData array
   */
  const onPhotoSelect = photo => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };
  
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS, showModal: false });
  };
  
  /**
   * 
   * @param {*} topic - a single topic object from the topicData array
   */
  const onTopicSelect = (topic) => {
    // update selectedTopic
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topic });
  };
  
  /**
   * fetch photos for a given topic selected
   * selectedTopic is set with onTopicSelect function 
   * re-render each time the selectedTopic state is updated. 
   */
  useEffect(() => {
    // confirm that there is a selected topic and a topic id
    if (state.selectedTopic && state.selectedTopic.id) {
      fetch(`/api/topics/${state.selectedTopic.id}/photos`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
        .catch(error => console.error('Fetch error:', error));
    }
  }, [state.selectedTopic]);

  const onDisplayFavorites = () => {
    const favoritePhotos = state.allPhotoData.filter(photo =>
      state.favorites.includes(photo.id)
    );
    dispatch({ type: ACTIONS.RESET_SELECTED_TOPIC });
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: favoritePhotos });
  };

  
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
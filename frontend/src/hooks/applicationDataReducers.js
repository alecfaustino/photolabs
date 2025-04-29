export const ACTIONS = {
  // handling favorites state
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  // fetch the photos (both initial render and topic render)
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  // fetch the topics to map into top nav
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  // handling selectedTopic state
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
  // selectedPhoto for the modal
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_ALL_PHOTO_DATA: 'SET_ALL_PHOTO_DATA'
}; 

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { 
        ...state,
        favorites: [...state.favorites, action.photoId]
       }
    case ACTIONS.FAV_PHOTO_REMOVED: 
       return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.photoId)
       }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.SET_TOPIC_DATA: 
      return {
        ...state, 
        topicData: action.payload
      }
    case ACTIONS.SELECT_PHOTO: 
      return {
        ...state, 
        selectedPhoto: action.payload,
        showModal: true
      }
    case ACTIONS.CLOSE_PHOTO_DETAILS: 
      return {
        ...state,
        showModal: action.showModal,
        selectedPhoto: null
      }
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.SET_SELECTED_TOPIC: 
      return {
        ...state, 
        selectedTopic: action.payload // Only update selectedTopic
      }
    case ACTIONS.RESET_SELECTED_TOPIC: 
      return {
        ...state,
        selectedTopic: action.payload,
      }
    case ACTIONS.SET_ALL_PHOTO_DATA:
      return {
        ...state,
        allPhotoData: action.payload
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
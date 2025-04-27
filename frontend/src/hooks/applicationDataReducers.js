export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
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
    case ACTIONS.DISPLAY_PHOTO_DETAILS: 
      return {
        ...state,
        showModal: action.showModal,
        selectedPhoto: null
      }
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
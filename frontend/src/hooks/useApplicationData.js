import { useState } from "react";

const useApplicationData = () => {
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [topic, setTopic] = useState(null);

  const updateToFavPhotoIds = photoId => {
    if (favorites.includes(photoId)) {
      // if it's part of the favorites list, remove,
      const newFavorites = [...favorites].filter((id) => id !== photoId);
      setFavorites(newFavorites);
    } else {
      // if it's not part of the favorites list, add
      setFavorites((prev) => [...prev, photoId]);
    }
  };
  const onPhotoSelect = photo => {
    setSelectedPhoto(photo);
    setShowModal(true);
  }
  
  const onClosePhotoDetailsModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  }
  
  const onLoadTopic = (newTopic) => {
    setTopic(newTopic);
  }

  return {
    state: {
      favorites,
      showModal,
      selectedPhoto,
      topic,
    },
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onLoadTopic
  }
};

export default useApplicationData;


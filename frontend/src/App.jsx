import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import { useState } from "react";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      // if it's part of the favorites list, remove,
      const newFavorites = [...favorites].filter((id) => id !== photoId);

      setFavorites(newFavorites);
    } else {
      // if it's not part of the favorites list, add
      setFavorites((prev) => [...prev, photoId]);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const toggleModal = (photo) => {
    setShowModal(!showModal);
    setSelectedPhoto(photo);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        toggleModal={toggleModal}
      />
      {showModal && selectedPhoto && (
        <PhotoDetailsModal photo={selectedPhoto} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default App;

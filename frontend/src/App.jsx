import "./App.scss";
import HomeRoute from "./components/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import { useState } from "react";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  // toggleFavorite given a photoid,
  // if it's part of the favorites list, remove,
  // if it's not part of the favorites list, add
  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      const newFavorites = [...favorites].filter((id) => id !== photoId);
      setFavorites(newFavorites);
    } else {
      setFavorites((prev) => [...prev, photoId]);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
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
      {showModal && (
        <PhotoDetailsModal photos={photos} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default App;

import "./App.scss";
import HomeRoute from "./components/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import { useState } from "react";

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

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
};

export default App;

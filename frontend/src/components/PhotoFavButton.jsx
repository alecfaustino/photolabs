import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useState } from "react";

const PhotoFavButton = () => {
  const [fav, setFav] = useState(false);
  const handleClick = () => {
    setFav(!fav);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={fav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;

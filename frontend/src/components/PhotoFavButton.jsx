import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ toggleFavorite, favorites, photoId }) => {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => toggleFavorite(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorites.includes(photoId)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;

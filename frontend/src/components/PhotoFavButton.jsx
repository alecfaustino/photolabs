import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ updateToFavPhotoIds, favorites = [], photoId }) => {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => updateToFavPhotoIds(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorites.includes(photoId)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;

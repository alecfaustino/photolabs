import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavorite, favorites, toggleModal }) => {
  return (
    <>
      <div className="photo-list__item">
        <PhotoFavButton
          toggleFavorite={toggleFavorite}
          photoId={photo.id}
          favorites={favorites}
        />
        <img
          onClick={() => toggleModal(photo)}
          className="photo-list__image"
          src={photo.urls.regular}></img>
        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={photo.user.profile}></img>
          <div className="photo-list__user-info">
            {photo.user.name}
            <div className="photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoListItem;

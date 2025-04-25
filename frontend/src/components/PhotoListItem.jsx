import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  updateToFavPhotoIds,
  favorites,
  onPhotoSelect,
}) => {
  return (
    <>
      <div className="photo-list__item">
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          photoId={photo.id}
          favorites={favorites}
        />
        <img
          onClick={() => onPhotoSelect(photo)}
          className="photo-list__image"
          src={photo.urls.regular}></img>
        {/* Photographer info */}
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

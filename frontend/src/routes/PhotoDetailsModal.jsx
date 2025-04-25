import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  favorites,
  photo,
  updateToFavPhotoIds,
  onClosePhotoDetailsModal,
}) => {
  // the data file has similar photos has objects
  // change to array
  const similarPhotosArray = Object.values(photo.similar_photos);
  return (
    <div className="photo-details-modal">
      {/* close button */}
      <button
        onClick={onClosePhotoDetailsModal}
        className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Main Image */}
      <div className="photo-details-modal__images">
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          photoId={photo.id}
          favorites={favorites}
        />
        <img className="photo-details-modal__image" src={photo.urls.full} />
        {/* Photographer Info */}
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
          />
          <div className="photo-details-modal__photographer-info">
            <div>{photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        {/* Similar Photos Heading */}
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList
          photos={similarPhotosArray}
          updateToFavPhotoIds={updateToFavPhotoIds}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

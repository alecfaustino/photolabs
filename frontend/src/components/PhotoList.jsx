import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavorite, favorites }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

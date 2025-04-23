import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          urls={photo.urls}
          user={photo.user}
          location={photo.location}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

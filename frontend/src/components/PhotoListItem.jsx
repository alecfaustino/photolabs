import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
      <div className="photo-list__item">
        <img className="photo-list__image" src={props.urls.regular}></img>
        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={props.user.profile}></img>
          <div className="photo-list__user-info">
            {props.user.name}
            <div className="photo-list__user-location">
              {props.location.city}, {props.location.country}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoListItem;

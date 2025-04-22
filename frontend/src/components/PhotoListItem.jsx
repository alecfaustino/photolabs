import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { urls, user, location } = props.data;
  return (
    <>
      <div>
        <img src={urls.full}></img>
      </div>
      <div>
        <img src={user.profile}></img>
        <p>{user.name}</p>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
    </>
  );
};

export default PhotoListItem;

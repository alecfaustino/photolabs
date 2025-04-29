import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, selected, onDisplayFavorites }) => {
  //create an array of photo objects

  return (
    <div className="fav-badge" onClick={onDisplayFavorites}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
    </div>
  );
};

export default FavBadge;

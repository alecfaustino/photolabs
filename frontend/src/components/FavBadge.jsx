import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({
  isFavPhotoExist,
  selected,
  onDisplayFavorites,
  favoritePhotos,
}) => {
  console.log("favoritePhotos in FavBadge", favoritePhotos);
  return (
    <div
      className="fav-badge"
      onClick={() => onDisplayFavorites(favoritePhotos)}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
    </div>
  );
};

export default FavBadge;

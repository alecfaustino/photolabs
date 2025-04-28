import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  photos,
  topics,
  favorites,
  updateToFavPhotoIds,
  onPhotoSelect,
  onTopicSelect,
  onDisplayFavorites,
  favoritePhotos,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        photos={photos}
        topics={topics}
        favorites={favorites}
        favoritePhotos={favoritePhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onTopicSelect={onTopicSelect}
        onDisplayFavorites={onDisplayFavorites}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  photos,
  topics,
  favorites,
  updateToFavPhotoIds,
  onPhotoSelect,
  onLoadTopic,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} />
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

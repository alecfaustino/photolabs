import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  photos,
  topics,
  favorites,
  updateToFavPhotoIds,
  onPhotoSelect,
  onTopicSelect,
  onLoadTopic,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        photos={photos}
        topics={topics}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onTopicSelect={onTopicSelect}
        onLoadTopic={onLoadTopic}
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

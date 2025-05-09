import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = ({
  topics,
  favorites,
  onTopicSelect,
  onDisplayFavorites,
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      <FavBadge
        isFavPhotoExist={favorites.length > 0}
        selected={favorites.length > 0}
        onDisplayFavorites={onDisplayFavorites}
      />
    </div>
  );
};

export default TopNavigation;

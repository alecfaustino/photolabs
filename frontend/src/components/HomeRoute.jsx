import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({ photos, topics, toggleFavorite, favorites }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
};

export default HomeRoute;

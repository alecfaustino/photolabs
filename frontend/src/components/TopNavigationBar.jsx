import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import { useState } from "react";

const TopNavigation = () => {
  const [fav, setFav] = useState(false);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={fav} />
    </div>
  );
};

export default TopNavigation;

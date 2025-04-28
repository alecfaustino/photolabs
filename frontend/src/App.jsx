import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onTopicSelect,
    onDisplayFavorites,
  } = useApplicationData();

  const { favorites, showModal, selectedPhoto } = state;

  //create an array of photo objects
  const favoritePhotos = state.photoData.filter((photo) =>
    state.favorites.includes(photo.id)
  );

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favorites={favorites}
        favoritePhotos={favoritePhotos}
        onPhotoSelect={onPhotoSelect}
        onTopicSelect={onTopicSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onDisplayFavorites={onDisplayFavorites}
      />
      {showModal && selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          favorites={favorites}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;

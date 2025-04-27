import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { favorites, showModal, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favorites={favorites}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      {showModal && selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          favorites={favorites}
          onPhotoSelect={onPhotoSelect}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;

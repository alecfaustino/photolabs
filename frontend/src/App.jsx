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
  } = useApplicationData();

  const { favorites, showModal, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favorites={favorites}
        onPhotoSelect={onPhotoSelect}
        onTopicSelect={onTopicSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
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

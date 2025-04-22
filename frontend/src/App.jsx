import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};
// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(null).map((_, i) => ({
    ...sampleDataForPhotoListItem,
    id: i + 1,
  }));
  return (
    <div className="App">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          urls={photo.urls}
          user={photo.user}
          location={photo.location}
        />
      ))}
    </div>
  );
};

export default App;

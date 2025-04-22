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
  const { urls, user, location, id } = sampleDataForPhotoListItem;
  return (
    <div className="App">
      <PhotoListItem urls={urls} user={user} location={location} id={id} />
    </div>
  );
};

export default App;

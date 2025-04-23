import PhotoList from "./components/PhotoList";
import "./App.scss";
import TopicList from "./components/TopicList";

const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;

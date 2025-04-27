import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          onTopicSelect={onTopicSelect}
        />
      ))}
    </div>
  );
};

export default TopicList;

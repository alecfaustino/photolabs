import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicSelect }) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => onTopicSelect(topic)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
  console.log("@@@@123@@@", topic);
  return (
    <div className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

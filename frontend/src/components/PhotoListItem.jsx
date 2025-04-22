import "../styles/PhotoListItem.scss";
import React from "react";

const PhotoListItem = (props) => {
  return (
    <React.Fragment key={props.id}>
      <div>
        <img src={props.urls.regular}></img>
      </div>
      <div>
        <img src={props.user.profile}></img>
        <p>{props.user.name}</p>
        <p>
          {props.location.city}, {props.location.country}
        </p>
      </div>
    </React.Fragment>
  );
};

export default PhotoListItem;

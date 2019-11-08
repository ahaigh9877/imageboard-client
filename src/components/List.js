import React from "react";
import CreateFormContainer from "./CreateFormContainer";

const List = props => {
  return (
    <div>
      <CreateFormContainer />
      {props.images.map(image => (
        <div>
          <h1>{image.title}</h1>
          <img src={image.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default List;

import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

const List = props => {
  return (
    <div>
      <LoginFormContainer />
      {props.user && <CreateFormContainer />}
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

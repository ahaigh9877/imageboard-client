import React from "react";

const CreateForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Image title: </label>
      <input
        type="text"
        onChange={props.onChange}
        value={props.values.title}
        name="title"
        placeholder="put the title in"
      />
      <label>Image url: </label>
      <input
        type="text"
        onChange={props.onChange}
        value={props.values.url}
        name="url"
        placeholder="what is the you-are-ell???"
      />
      <button type="submit">
        <em>S U B M I T ! ! !</em>
      </button>
    </form>
  );
};

export default CreateForm;

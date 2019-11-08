import React from "react";

const LoginForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>email plz: </label>
      <input
        type="text"
        onChange={props.onChange}
        value={props.values.email}
        name="email"
      />
      <label>pa$$wørd: </label>
      <input
        type="text"
        onChange={props.onChange}
        value={props.values.password}
        name="password"
      />
      <button type="submit">Suuuuubmit.</button>
    </form>
  );
};

export default LoginForm;

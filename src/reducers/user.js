import { JWT } from "../actions";

export default function(state = "", action = {}) {
  switch (action.type) {
    case JWT:
      console.log("JWT being sent to state...");
      return (state = action.payload);
    default:
      return state;
  }
}

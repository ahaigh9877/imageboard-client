import { ALL_IMAGES, NEW_IMAGE } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES:
      return (state = action.payload);
    case NEW_IMAGE:
      // this adds the payload (the new image) to the *beginning* of the state array, that's why the spread operator is at the end!!!
      return [action.payload, ...state];
    default:
      return state;
  }
}

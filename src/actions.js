import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";
export const NEW_IMAGE = "NEW_IMAGE";
export const JWT = "JWT";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://powerful-river-10775.herokuapp.com/";

// What are these things called?
function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

// this action creator is called in CreateFormContainer
export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  console.log("Anything happening?");
  console.log("user: ", user);
  request
    .post(`${baseUrl}/image`)
    // This is different from the reader. My "user" is an object with "jwt" inside. I wonder why!!!
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      console.log("what's the response?? ", response);
      const action = newImage(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

// called in ListContainer
export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

export const login = data => dispatch => {
  console.log("login data: ", data);
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = jwt(response.body);
      console.log("login function action: ", action);
      dispatch(action);
    })
    .catch(console.error);
};

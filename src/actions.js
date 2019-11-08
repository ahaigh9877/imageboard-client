import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";
export const NEW_IMAGE = "NEW_IMAGE";

const baseUrl = "http://localhost:4000";

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

export const createImage = data => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// goes to ListContainer
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

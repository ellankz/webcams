import webcamsTravel from "../apis/webcamsTravel";

export const getWebcams = () => async (dispatch, getState) => {
  const response = await webcamsTravel.get(
    "list/country=UA/orderby=popularity,desc/limit=50",
    {
      params: {
        lang: "en",
        show: "webcams:image,location,player,category"
      }
    }
  );
  dispatch({
    type: "GET_WEBCAMS",
    payload: {
      res: response.data.result.webcams,
      active: null
    }
  });
};

export const getWebcam = id => async (dispatch, getState) => {
  const response = await webcamsTravel.get(`list/webcam=${id}`, {
    params: {
      lang: "en",
      show: "webcams:image,location,player,category"
    }
  });
  dispatch({
    type: "GET_WEBCAM",
    payload: {
      res: response.data.result.webcams[0]
    }
  });
};

export const getCategoryWebcams = category => async (dispatch, getState) => {
  const response = await webcamsTravel.get(
    `list/category=${category}/country=UA/orderby=popularity,desc/limit=50`,
    {
      params: {
        lang: "en",
        show: "webcams:image,location,player,category"
      }
    }
  );
  dispatch({
    type: "GET_WEBCAMS",
    payload: {
      res: response.data.result.webcams,
      active: category
    }
  });
};

export const getCategories = () => async (dispatch, getState) => {
  const response = await webcamsTravel.get("list/country=UA", {
    params: {
      show: "categories"
    }
  });
  dispatch({
    type: "GET_CATEGORIES",
    payload: response.data.result.categories
  });
};

import { combineReducers } from "redux";
import _ from "lodash";

const webcamsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_WEBCAMS":
      return { ...state, ..._.mapKeys(action.payload.res, "id") };
    case "GET_WEBCAM":
      return { ...state, [action.payload.res.id]: action.payload.res };
    default:
      return state;
  }
};

const webcamCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

const activeCategoryReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_WEBCAMS":
      if (action.payload.active) {
        return action.payload.active;
      } else {
        return null;
      }
    default:
      return null;
  }
};

export default combineReducers({
  webcams: webcamsReducer,
  categories: webcamCategoriesReducer,
  activeCategory: activeCategoryReducer
});

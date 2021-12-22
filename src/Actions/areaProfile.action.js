import { areaProfileService } from "../Services/areaProfile.service";

export const getAreaProfile = (params) => (dispatch) => {
  dispatch({ type: "SEARCH_AREA_REQUEST", payload: params });
  return areaProfileService
    .getAreaProfile(params)
    .then((response) => {
      if (response) {
        dispatch({
          type: "SEARCH_AREA_SUCCESS",
          payload: response.data,
        });
      }
      return response;
    })
    .catch((error) => {
      if (error) {
        dispatch({
          type: "SEARCH_AREA_ERROR",
          error: error.response.data,
        });
        return error.response;
      }
      return null;
    });
};

export const addAreaProfile = (params) => (dispatch) => {
  dispatch({ type: "ADD_AREA_REQUEST", payload: params });
  return areaProfileService
    .addAreaProfile(params)
    .then((response) => {
      if (response) {
        dispatch({ type: "ADD_AREA_SUCCESS", payload: response.data });
      }
      return response;
    })
    .catch((error) => {
      if (error) {
        dispatch({
          type: "ADD_AREA_ERROR",
          error: error.response.data,
        });
        return error.response;
      }
      return null;
    });
};

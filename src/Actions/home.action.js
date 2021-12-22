import { homeService } from "../Services/home.service";

export const searchRecords = (params) => (dispatch) => {
  dispatch({ type: "SEARCH_RECORD_REQUEST", payload: params });
  return homeService
    .searchRecords(params)
    .then((response) => {
      if (response) {
        dispatch({ type: "SEARCH_RECORD_SUCCESS", payload: response.data });
      }
      return response;
    })
    .catch((error) => {
      if (error) {
        dispatch({ type: "SEARCH_RECORD_ERROR", error: error.response.data });
        return error.response;
      }
      return null;
    });
};

export const getAreaDetails = (params) => (dispatch) => {
  dispatch({ type: "GET_AREA_REQUEST", payload: params });
  return homeService
    .getAreaDetails(params)
    .then((response) => {
      if (response) {
        dispatch({ type: "GET_AREA_SUCCESS", payload: response.data });
      }
      return response;
    })
    .catch((error) => {
      if (error) {
        dispatch({ type: "GET_AREA_ERROR", error: error.response.data });
        return error.response;
      }
      return null;
    });
};

export const browseRecords = (params) => (dispatch) => {
  dispatch({ type: "BROWSE_RECORD_REQUEST", payload: params });
  return homeService
    .browseRecords(params)
    .then((response) => {
      if (response) {
        dispatch({ type: "BROWSE_RECORD_SUCCESS", payload: response.data });
      }
      return response;
    })
    .catch((error) => {
      if (error) {
        dispatch({ type: "BROWSE_RECORD_ERROR", error: error.response.data });
        return error.response;
      }
      return null;
    });
};

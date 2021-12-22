export const home = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_RECORD_REQUEST":
      return {
        ...state,
        inputParams: action.payload,
      };
    case "SEARCH_RECORD_SUCCESS":
      return {
        ...state,
        fileDetails: action.payload,
      };
    case "SEARCH_RECORD_ERROR":
      return {
        ...state,
        fileDetailsError: action.error,
      };
    case "GET_AREA_REQUEST":
      return {
        ...state,
        inputParams: action.payload,
      };
    case "GET_AREA_SUCCESS":
      return {
        ...state,
        area: action.payload,
      };
    case "GET_AREA_ERROR":
      return {
        ...state,
        getAreaError: action.error,
      };
    case "BROWSE_RECORD_REQUEST":
      return {
        ...state,
        inputParams: action.payload,
      };
    case "BROWSE_RECORD_SUCCESS":
      return {
        ...state,
        browseData: action.payload,
      };
    case "BROWSE_RECORD_ERROR":
      return {
        ...state,
        browseDataError: action.error,
      };
    default:
      return state;
  }
};

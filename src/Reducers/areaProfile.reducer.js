export const areaProfile = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_AREA_REQUEST":
      return {
        ...state,
        inputParams: action.payload,
      };
    case "SEARCH_AREA_SUCCESS":
      return {
        ...state,
        areaDetails: action.payload,
      };
    case "SEARCH_AREA_ERROR":
      return {
        ...state,
        fileDetailsError: action.error,
      };
    case "ADD_AREA_REQUEST":
      return {
        ...state,
        inputParams: action.payload,
      };
    case "ADD_AREA_SUCCESS":
      return {
        ...state,
        fileDetails: action.payload,
      };
    case "ADD_AREA_ERROR":
      return {
        ...state,
        fileDetailsError: action.error,
      };
    default:
      return state;
  }
};

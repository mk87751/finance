import Axios from "../Axios/Axios";
import { API_BASE_URL } from "../Constants/Constants";

export const homeService = {
  searchRecords,
  getAreaDetails,
  browseRecords,
};

const SEARCH_RECORDS = "/retrievedata/globalinput";
const GET_AREA_NAMES = "/getareanames";
const BROWSE_RECORDS = "/retrievedata/browsedata";

function searchRecords(inputParams) {
  return Axios.post(API_BASE_URL + SEARCH_RECORDS, inputParams);
}

function getAreaDetails(inputParams) {
  return Axios.get(API_BASE_URL + GET_AREA_NAMES);
}

function browseRecords(inputParams) {
  return Axios.post(API_BASE_URL + BROWSE_RECORDS, inputParams);
}

import Axios from "../Axios/Axios";
import { API_BASE_URL } from "../Constants/Constants";

export const areaProfileService = {
  getAreaProfile,
  addAreaProfile,
};

const AREA_PROFILE = "/area_profile";

function getAreaProfile(inputParams) {
  return Axios.get(API_BASE_URL + AREA_PROFILE, {
    params: inputParams,
  });
}

function addAreaProfile(inputParams) {
  return Axios.post(API_BASE_URL + AREA_PROFILE, inputParams);
}

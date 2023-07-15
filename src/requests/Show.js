import axios from "axios";
import { TVMAZE_BASE_PATH } from "../utils/constant";

export const searchShowByQuery = async (query = "") => {
  try {
    let res = await axios.get(`${TVMAZE_BASE_PATH}/search/shows?q=${query}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getShowById = async (showId = "") => {
  try {
    let res = await axios.get(`${TVMAZE_BASE_PATH}/shows/${showId}`);
    return res;
  } catch (error) {
    throw error;
  }
};

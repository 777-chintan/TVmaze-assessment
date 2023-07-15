import axios from "axios";
import { TVMAZE_BASE_PATH } from "../utils/constant";

export const getScheduledEpisode = async (date = "", country = "US") => {
  try {
    let res = await axios.get(
      `${TVMAZE_BASE_PATH}/schedule/web?date=${date}&country=${country}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

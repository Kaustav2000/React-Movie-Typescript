import axios from "axios";
import { selectSpecificURL } from "../utils/selectSpecificURL";

export const popularStreamingData = async (item: string) => {
  let URL = selectSpecificURL(item);
  try {
    let { data } = await axios.get(URL);

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const freeToWatchData = async (item: string) => {
  let URL = selectSpecificURL(item);
  try {
    let { data } = await axios.get(URL);

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const trendingData = async (item: string) => {
  let URL = selectSpecificURL(item);
  try {
    let { data } = await axios.get(URL);

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

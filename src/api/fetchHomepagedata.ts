import axios from "axios";
import { API_KEY } from "../config/config";
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

export const searchData = async (item: string) => {
  let URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${item}&page=1&include_adult=false`;
  try {
    let { data } = await axios.get(URL);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

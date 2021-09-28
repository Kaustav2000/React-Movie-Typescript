import { API_KEY } from "../config/config";

export const selectSpecificURL = (item: string) => {
  let url: string = "";
  if (item === "Popular")
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  else if (item === "Tv Popular")
    url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
  else if (item === "In Theatres")
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  else
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  return url;
};

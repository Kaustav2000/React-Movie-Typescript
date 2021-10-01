import { API_KEY } from "../config/config";

export const selectSpecificURL = (item: string) => {
  let url: string = "";
  if (item === "Popular")
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  else if (item === "TV Popular")
    url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
  else if (item === "In Theatres")
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  else if (item === "TV")
    url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`;
  else if (item === "Today")
    url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  else if (item === "This Week")
    url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
  else
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  return url;
};

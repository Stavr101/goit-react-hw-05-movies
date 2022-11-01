import axios from 'axios';

export const API_KEY = 'ac5600b2efedade991061633454c276d';
export const BASE_URL = 'https://api.themoviedb.org/3/';

// список самых популярных фильмов на сегодня

export const getTrending = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return data;
};

// поиск кинофильма по ключевому слову

export const getSearch = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );

  return data;
};
// запрос полной информации о фильме

export const getMovieId = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

// запрос информации о актёрском составе

export const getMovieCredits = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

// запрос обзоров

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};

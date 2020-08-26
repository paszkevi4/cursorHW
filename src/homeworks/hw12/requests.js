import * as axios from 'axios';

let instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getMoviesInfo = {};

export const getPlanets = (page, wookiee) => {
  return instance
    .get(`planets/?page=1${wookiee ? '&format=wookiee' : ''}`)
    .then((response) => response.data);
};

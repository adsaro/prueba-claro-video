import axios from 'axios';

export const GET_URL_REQUESTED = 'GET_URL_REQUESTED';
export const GET_URL_REJECTED = 'GET_URL_REJECTED';
export const GET_URL_FULFILLED = 'GET_URL_FULFILLED';

export const GET_MOVIES_REQUESTED = 'GET_MOVIES_REQUESTED';
export const GET_MOVIES_REJECTED = 'GET_MOVIES_REJECTED';
export const GET_MOVIES_FULFILLED = 'GET_MOVIES_FULFILLED';

export const GET_MOVIE_INFORMATION_REQUESTED = 'GET_MOVIE_INFORMATION_REQUESTED';
export const GET_MOVIE_INFORMATION_REJECTED = 'GET_MOVIE_INFORMATION_REJECTED';
export const GET_MOVIE_INFORMATION_FULFILLED = 'GET_MOVIE_INFORMATION_FULFILLED';

const baseURL = 'https://mfwkweb-api.clarovideo.net/';

const initialUrl = '/services/cms/level?api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5qq76r3g6sg4jb90l38us52&isCacheable=true&node=gen_accion&domain=https%3A%2F%2Fmfwkweb-api.clarovideo.net%2F&origin=https3A%2F%2Fwww.clarovideo.com%2F&MOVIES_id=22822863';

const sufixURL = 'api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52';

const movieInformationUrl = 'https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=';

function getUrlRequestedAction() {
  return {
    type: GET_URL_REQUESTED,
  };
}

function getUrlRejectedAction(error) {
  return {
    type: GET_URL_REJECTED,
    error,
  };
}

function getUrlFulfilledAction(data) {
  return {
    type: GET_URL_FULFILLED,
    payload:
      data.response.modules.module[0].components.component[2].properties.url,
  };
}

export function getUrl(url = `${baseURL}${initialUrl}`) {
  return (dispatch) => {
    dispatch(getUrlRequestedAction());
    return axios
      .get(url)
      .then((response) => dispatch(getUrlFulfilledAction(response.data)))
      .catch((error) => dispatch(getUrlRejectedAction(error)));
  };
}

function getMoviesRequestedAction() {
  return {
    type: GET_MOVIES_REQUESTED,
    inProgress: true,
  };
}

function getMoviesRejectedAction(error) {
  return {
    type: GET_MOVIES_REJECTED,
    inProgress: false,
    success: false,
    error,
  };
}

function getMoviesFulfilledAction(data) {
  return {
    type: GET_MOVIES_FULFILLED,
    payload: data.response.groups,
    success: true,
    inProgress: false,
    error: false,
  };
}

export function getMovies(url) {
  return (dispatch) => {
    dispatch(getMoviesRequestedAction());
    return axios
      .get(`${baseURL}${url}${sufixURL}`)
      .then((response) => dispatch(getMoviesFulfilledAction(response.data)))
      .catch((error) => dispatch(getMoviesRejectedAction(error)));
  };
}

function getMovieInformationRequestedAction() {
  return {
    type: GET_MOVIE_INFORMATION_REQUESTED,
    inProgress: true,
  };
}

function getMovieInformationRejectedAction(error) {
  return {
    type: GET_MOVIE_INFORMATION_REJECTED,
    inProgress: false,
    success: false,
    error,
  };
}

function getMovieInformationFulfilledAction(data) {
  return {
    type: GET_MOVIE_INFORMATION_FULFILLED,
    payload: data.response.group.common,
    success: true,
    inProgress: false,
    error: false,
  };
}

export function getMovieInformation(id) {
  return (dispatch) => {
    dispatch(getMovieInformationRequestedAction());
    axios
      .get(`${movieInformationUrl}${id}`)
      .then((response) => dispatch(getMovieInformationFulfilledAction(response.data)))
      .catch((error) => dispatch(getMovieInformationRejectedAction(error)));
  };
}

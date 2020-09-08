import movies from './movies';
import {
  GET_URL_REQUESTED,
  GET_URL_REJECTED,
  GET_URL_FULFILLED,
  GET_MOVIES_REQUESTED,
  GET_MOVIES_REJECTED,
  GET_MOVIES_FULFILLED,
  GET_MOVIE_INFORMATION_REQUESTED,
  GET_MOVIE_INFORMATION_REJECTED,
  GET_MOVIE_INFORMATION_FULFILLED,
} from '../actions/movies';

const initialState = {
  url: {
    inProgress: false,
    data: null,
    error: false,
    success: false,
  },
  list: {
    inProgress: false,
    data: null,
    error: false,
    success: false,
  },
  movieSelected: {
    inProgress: false,
    data: null,
    error: false,
    success: false,
  },
};

describe('Testing the movies reducer', () => {
  it('Testing with no action', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });

  describe('Testing the url functions', () => {
    it('Testing the url request', () => {
      const urlFinal = {
        inProgress: true,
        data: null,
        error: false,
        success: false,
      };
      expect(movies(initialState, { type: GET_URL_REQUESTED }).url).toEqual(
        urlFinal
      );
    });

    it('Testing the url success', () => {
      const data = 'data';
      const urlFinal = {
        inProgress: false,
        data,
        error: false,
        success: true,
      };
      expect(
        movies(initialState, { type: GET_URL_FULFILLED, payload: data }).url
      ).toEqual(urlFinal);
    });

    it('Testing the url failure', () => {
      const error = 'Network error';
      const urlFinal = {
        inProgress: false,
        data: null,
        error,
        success: false,
      };
      expect(
        movies(initialState, { type: GET_URL_REJECTED, error }).url
      ).toEqual(urlFinal);
    });
  });

  describe('Testing the movies functions', () => {
    it('Testing the movies request', () => {
      const listFinal = {
        inProgress: true,
        data: null,
        error: false,
        success: false,
      };
      expect(movies(initialState, { type: GET_MOVIES_REQUESTED }).list).toEqual(
        listFinal
      );
    });

    it('Testing the movies success', () => {
      const data = [ 'movie 1', 'movie 2' ];
      const listFinal = {
        inProgress: false,
        data,
        error: false,
        success: true,
      };
      expect(
        movies(initialState, { type: GET_MOVIES_FULFILLED, payload: data }).list
      ).toEqual(listFinal);
    });

    it('Testing the movies failure', () => {
      const error = 'Network error';
      const listFinal = {
        inProgress: false,
        data: null,
        error,
        success: false,
      };
      expect(
        movies(initialState, { type: GET_MOVIES_REJECTED, error }).list
      ).toEqual(listFinal);
    });
  });

  describe('Testing the movie information functions', () => {
    it('Testing the movie information request', () => {
      const infoFinal = {
        inProgress: true,
        data: null,
        error: false,
        success: false,
      };
      expect(
        movies(initialState, { type: GET_MOVIE_INFORMATION_REQUESTED })
          .movieSelected
      ).toEqual(infoFinal);
    });

    it('Testing the movie information success', () => {
      const data = { name: 'name', desc: 'some' };
      const infoFinal = {
        inProgress: false,
        data,
        error: false,
        success: true,
      };
      expect(
        movies(initialState, {
          type: GET_MOVIE_INFORMATION_FULFILLED,
          payload: data,
        }).movieSelected
      ).toEqual(infoFinal);
    });

    it('Testing the movie information failure', () => {
      const error = 'Network error';
      const infoFinal = {
        inProgress: false,
        data: null,
        error,
        success: false,
      };
      expect(
        movies(initialState, { type: GET_MOVIE_INFORMATION_REJECTED, error })
          .movieSelected
      ).toEqual(infoFinal);
    });
  });
});

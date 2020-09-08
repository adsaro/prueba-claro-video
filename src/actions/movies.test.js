import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as movies from './movies';

jest.mock('axios');

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Testing movies actions', () => {
  describe('Testing the getUrl action', () => {
    it('Testing getUrl action dispatch fulfilled', async () => {
      const store = mockStore({});

      const fakeUrl = 'fake url to test';
      const mockedResponse = {
        data: {
          response: {
            modules: {
              module: [
                {
                  components: {
                    component: [ {}, {}, { properties: { url: fakeUrl } } ],
                  },
                },
              ],
            },
          },
        },
      };
      axios.get.mockImplementationOnce(() => Promise.resolve(mockedResponse));

      const expectedActions = [
        { type: movies.GET_URL_REQUESTED },
        { type: movies.GET_URL_FULFILLED, payload: fakeUrl },
      ];

      return store.dispatch(movies.getUrl()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('Testing getUrl action dispatch rejected', async () => {
      const store = mockStore({});

      axios.get.mockImplementationOnce(() => Promise.reject(new Error('some kind of error')));

      const expectedActions = [
        { type: movies.GET_URL_REQUESTED },
        {
          type: movies.GET_URL_REJECTED,
          error: new Error('some kind of error'),
        },
      ];

      return store.dispatch(movies.getUrl()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Testing the getMovies action', () => {
    it('Testing getMovies action dispatch fulfilled', async () => {
      const store = mockStore({});

      const fakeList = [ 'list', 'of', 'fake', 'items' ];
      const mockedResponse = {
        data: {
          response: {
            groups: fakeList,
          },
        },
      };
      axios.get.mockImplementationOnce(() => Promise.resolve(mockedResponse));

      const expectedActions = [
        {
          type: movies.GET_MOVIES_REQUESTED,
          inProgress: true,
        },
        {
          type: movies.GET_MOVIES_FULFILLED,
          payload: fakeList,
          success: true,
          error: false,
          inProgress: false,
        },
      ];

      return store.dispatch(movies.getMovies()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('Testing getMovies action dispatch rejected', async () => {
      const store = mockStore({});

      axios.get.mockImplementationOnce(() => Promise.reject(new Error('some kind of error')));

      const expectedActions = [
        {
          type: movies.GET_MOVIES_REQUESTED,
          inProgress: true,
        },
        {
          type: movies.GET_MOVIES_REJECTED,
          error: new Error('some kind of error'),
          inProgress: false,
          success: false,
        },
      ];

      return store.dispatch(movies.getMovies()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

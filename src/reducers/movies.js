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

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_URL_REQUESTED: {
    return {
      ...state,
      url: {
        inProgress: true,
        data: null,
        error: false,
        success: false,
      },
    };
  }
  case GET_URL_FULFILLED: {
    return {
      ...state,
      url: {
        inProgress: false,
        data: action.payload,
        error: false,
        success: true,
      },
    };
  }
  case GET_URL_REJECTED: {
    return {
      ...state,
      url: {
        inProgress: false,
        data: null,
        error: action.error,
        success: false,
      },
    };
  }

  case GET_MOVIES_REQUESTED: {
    return {
      ...state,
      list: {
        inProgress: true,
        data: null,
        error: false,
        success: false,
      },
    };
  }
  case GET_MOVIES_FULFILLED: {
    return {
      ...state,
      list: {
        inProgress: false,
        data: action.payload,
        error: false,
        success: true,
      },
    };
  }
  case GET_MOVIES_REJECTED: {
    return {
      ...state,
      list: {
        inProgress: false,
        data: null,
        error: action.error,
        success: false,
      },
    };
  }

  case GET_MOVIE_INFORMATION_REQUESTED: {
    return {
      ...state,
      movieSelected: {
        inProgress: true,
        data: null,
        error: false,
        success: false,
      },
    };
  }
  case GET_MOVIE_INFORMATION_FULFILLED: {
    return {
      ...state,
      movieSelected: {
        inProgress: false,
        data: action.payload,
        error: false,
        success: true,
      },
    };
  }
  case GET_MOVIE_INFORMATION_REJECTED: {
    return {
      ...state,
      movieSelected: {
        inProgress: false,
        data: null,
        error: action.error,
        success: false,
      },
    };
  }

  default: {
    return state;
  }
  }
};

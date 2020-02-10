import {
  LIST_REQUESTED,
  LIST_SUCCESS,
  LIST_FAILED,
  LIST_PULL_TO_REFRESH,
} from '../actions';
  
const initialState = {
  films: {
    data:[],
    nextPage: '',
    pullToRefresh: false,
    loading: true,
  },
};

export default function (state = initialState, action) {
  const { type, payload, error } = action;
  
  switch (type) {
    case LIST_REQUESTED:
      return state;
    case LIST_SUCCESS:
      {
        const { config: { url }, data: { results, next } } = payload;
        const routeName = url.split('/').slice(-1)[0].split('?')[0];
        const nextPage = next ? next.split('/').slice(-1)[0].split('?')[1]: null;

        return {
          ...state,
          [routeName]: {
            data: state[routeName].pullToRefresh ? results : state[routeName].data.concat(results),
            nextPage: nextPage ? `?${nextPage}`: '',
            pullToRefresh: false,
            loading: false,
          }
        };
      }
    case LIST_FAILED:
      {
        const { config: { url } } = payload;
        const routeName = url.split('/').slice(-1)[0].split('?')[0];

        return {
          ...state,
          [routeName]: {
            error,
            ...state[routeName],
            loading: false,
          }
        };
      }

    case LIST_PULL_TO_REFRESH:
      {
        const { routeName } = payload;

        return {
          ...state,
          [routeName]: {
            ...state[routeName],
            // data: [],
            nextPage: '',
            pullToRefresh: !state[routeName].pullToRefresh,
          }
        };
      }
      
    default:
      return state;
  }
};

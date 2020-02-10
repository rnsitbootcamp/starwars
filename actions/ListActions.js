export const LIST_REQUESTED = 'LIST_REQUESTED';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILED = 'LIST_FAILED';
export const LIST_PULL_TO_REFRESH = 'LIST_PULL_TO_REFRESH';

export const getList = ({ url }) => ({
  types: [
    LIST_REQUESTED,
    LIST_SUCCESS,
    LIST_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      url
    }
  }
});

export const pulltoRefresh = routeName =>({
  type: LIST_PULL_TO_REFRESH,
  payload: {
    routeName,
  }
});
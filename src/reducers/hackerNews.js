import { RECEIVE_IDS } from '../constants/ActionTypes';

const initialState = {
  newsIds: [],
};

const HackerNewsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_IDS:
      return Object.assign({}, state, {
        newsIds: action.newsIds,
      });
    default:
      return state;
  }
};

export default HackerNewsListReducer;

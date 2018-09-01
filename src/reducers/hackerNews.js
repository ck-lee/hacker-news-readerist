import { RECEIVE_IDS, RECEIVE_ITEM, REQUEST_ITEM } from '../constants/ActionTypes';

const initialState = {
  newsIds: [],
  newsItems: {},
};

const HackerNewsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_IDS:
      return {
        ...state,
        newsIds: action.newsIds,
      };
    case RECEIVE_ITEM:
      /* eslint-disable no-case-declarations */
      const newItem = {
        [action.item.id]: action.item,
      };
      return {
        ...state,
        newsItems: { ...state.newsItems, ...newItem },
      };
    case REQUEST_ITEM:
      /* eslint-disable no-case-declarations */
      const emptyItem = {
        [action.itemId]: action.item,
      };
      return {
        ...state,
        newsItems: { ...state.newsItems, ...emptyItem },
      };
    default:
      return state;
  }
};

export default HackerNewsListReducer;

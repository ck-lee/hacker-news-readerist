import { RECEIVE_IDS, RECEIVE_ITEM, REQUEST_ITEM } from '../constants/ActionTypes';

const initialState = {
  newsIds: [],
  newsItems: {},
};

const timeConverter = (timestamp) => {
  const a = new Date(timestamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = `0${a.getHours()}`.substr(-2);
  const min = `0${a.getMinutes()}`.substr(-2);
  const sec = `0${a.getSeconds()}`.substr(-2);
  const time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
  return time;
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

      // Handle ask or show items that do not have a URL property
      if (!newItem[action.item.id].url) {
        newItem[action.item.id].url = `https://news.ycombinator.com/item?id=${action.item.id}`;
      }

      // Format date/time
      newItem[action.item.id].timeString = timeConverter(newItem[action.item.id].time);

      return {
        ...state,
        newsItems: { ...state.newsItems, ...newItem },
      };


    case REQUEST_ITEM:
      // Set empty object to indicate that the item is loading to prevent duplicate requests
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

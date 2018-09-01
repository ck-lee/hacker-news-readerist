import hackerNews from '../api/hackerNews';
import {
  RECEIVE_IDS,
  RECEIVE_ITEM,
} from '../constants/ActionTypes';

export const receiveLatestNews = newsIds => (dispatch) => {
  dispatch({
    type: RECEIVE_IDS,
    newsIds,
  });
};

export const receiveItem = item => (dispatch) => {
  dispatch({
    type: RECEIVE_ITEM,
    item,
  });
};

export const getLatestNews = () => (dispatch) => {
  hackerNews.getNewStories()
    .then(response => response.json())
    .then(
      (newsIds) => {
        dispatch(receiveLatestNews(newsIds));
      },
    );
};

export const getMoreNewsItem = (startIndex, stopIndex) => (dispatch, getState) => {
/* eslint-disable no-plusplus */
  for (let i = startIndex; i <= stopIndex; i++) {
    const itemId = getState().hackerNews.newsIds[i];
    if (!getState().hackerNews.newsItems[itemId]) {
      hackerNews.getItem(itemId)
        .then(response => response.json())
        .then(
          (item) => {
            dispatch(receiveItem(item));
          },
        );
    }
  }
};

import hackerNews from '../api/hackerNews';
import {
  RECEIVE_IDS,
  RECEIVE_ITEM,
  REQUEST_ITEM,
  FETCH_ERROR,
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
    ).catch((error) => {
      dispatch({
        type: FETCH_ERROR,
        error,
      });
    });
};

export const getMoreNewsItem = (startIndex, stopIndex) => (dispatch, getState) => {
/* eslint-disable no-plusplus */
  for (let i = startIndex; i <= stopIndex; i++) {
    const itemId = getState().hackerNews.newsIds[i];
    // skip if newsItem already exists
    if (!getState().hackerNews.newsItems[itemId]) {
      dispatch({
        type: REQUEST_ITEM,
        itemId,
      });
      hackerNews.getItem(itemId)
        .then(response => response.json())
        .then(
          (item) => {
            dispatch(receiveItem(item));
          },
        ).catch((error) => {
          dispatch({
            type: FETCH_ERROR,
            error,
          });
        });
    }
  }
};

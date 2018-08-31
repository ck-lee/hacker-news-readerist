import hackerNews from '../api/hackerNews';
import {
  RECEIVE_IDS,
} from '../constants/ActionTypes';

export const receiveLatestNews = newsIds => (dispatch) => {
  dispatch({
    type: RECEIVE_IDS,
    newsIds,
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
    hackerNews.getItem(getState().hackerNews.newsIds[i]);
  }
};

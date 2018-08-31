import hackerNews from '../api/hackerNews';
import {
  RECEIVE_IDS,
} from '../constants/ActionTypes';

export function latestNewsResponse(newsIds) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_IDS,
      newsIds,
    });
  };
}

export const getLatestNews = () => (dispatch) => {
  hackerNews.getNewStories()
    .then(response => response.json())
    .then(
      (newsIds) => {
        dispatch(latestNewsResponse(newsIds));
      },
    );
};

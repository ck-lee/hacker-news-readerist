const getNewStories = () => fetch('https://hacker-news.firebaseio.com/v0/newstories.json').then((response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
});

const getItem = id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
});

export default {
  getItem,
  getNewStories,
};

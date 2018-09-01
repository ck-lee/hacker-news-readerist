const getNewStories = () => fetch('https://hacker-news.firebaseio.com/v0/newstories.json');

const getItem = id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

export default {
  getItem,
  getNewStories,
};

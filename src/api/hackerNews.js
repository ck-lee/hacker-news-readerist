
function getNewStories() {
  return fetch('https://hacker-news.firebaseio.com/v0/newstories.json', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default {
  getNewStories,
};

const version = '0.1.0';
const cacheName = `hacker-news-readerist-${version}`;

const getNewStories = () => fetch('https://hacker-news.firebaseio.com/v0/newstories.json').then(response => caches.open(cacheName).then((cache) => {
  cache.put('https://hacker-news.firebaseio.com/v0/newstories.json', response.clone());
  return response;
}));

const getItem = id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => caches.open(cacheName).then((cache) => {
  cache.put(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, response.clone());
  return response;
}));

export default {
  getItem,
  getNewStories,
};

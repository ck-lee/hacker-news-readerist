/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

const version = '0.1.0';
const cacheName = `hacker-news-readerist-${version}`;
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
      '/hacker-news-readerist/',
      '/hacker-news-readerist/static/js/bundle.js',
      '/hacker-news-readerist/manifest.json',
      '/hacker-news-readerist/sw.js',
      '/hacker-news-readerist/static/js/main.8f52a077.js',
      '/hacker-news-readerist/static/css/main.a7886c67.js',
    ])
      .then(() => self.skipWaiting())),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.url === 'https://hacker-news.firebaseio.com/v0/newstories.json') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request)),
    );
    return;
  }
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => response || fetch(event.request)),
  );
});

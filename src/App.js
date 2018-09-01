import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getLatestNews } from './actions';
import HackerNewsContainer from './containers/HackerNewsContainer';
import './App.css';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

store.dispatch(getLatestNews());

const App = () => (
  <div className="App">
    <Provider store={store}>
      <HackerNewsContainer />
    </Provider>
  </div>
);

export default App;

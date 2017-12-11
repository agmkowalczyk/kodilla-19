import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducer from './reducer';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
import { createStore } from 'redux';
import DevTools from './DevTools';

import addComment from './actions';

//const logger = createLogger();
const store = createStore(
	reducer,
	//applyMiddleware(logger),
	DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

export default store;
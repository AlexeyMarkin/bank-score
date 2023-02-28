//file index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Application from './Application';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureAppStore } from './store/store';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {

  let initialState = {};

  let store = configureAppStore(initialState);
  window.getState = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

})

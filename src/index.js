import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import bagReducer from './reducers/bag';
import { Provider } from 'react-redux';


const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : [];

const bagStore = createStore(bagReducer, persistedState);

bagStore.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(bagStore.getState()))
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={bagStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

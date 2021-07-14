import { createStore } from 'redux';
import allReducers from './reducers';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {bag:[],user:Boolean};

const store = createStore(allReducers, persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
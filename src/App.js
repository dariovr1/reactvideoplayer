import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import VideoPlayer from './components/VideoPlayer';
import SearchBox from  './components/SearchBox';

const store = configureStore();

console.log(store.getState());


const App = () => (
  <Provider store={store}>
    <SearchBox />
  </Provider>
)

export default App;
